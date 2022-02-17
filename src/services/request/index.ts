import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { XYRequestInterceptors, XYRequestConfig } from './type'
import 'element-plus/dist/index.css'
import { ElLoading } from 'element-plus/lib/components'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
const DEAFULT_LOADING = true

class XYRequest {
  // 多个请求
  instance: AxiosInstance
  interceptors?: XYRequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean
  constructor(config: XYRequestConfig) {
    // XYRequestConfig扩展类型 interceptors
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors

    // 请求拦截器
    // 从config取出的拦截器是实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('在所有实例都有的拦截器请求成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('在所有实例都有的拦截器请求失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('在所有实例都有的拦截器响应成功')
        // 将loading移除

        this.loading?.close()

        const data = res.data
        if (data.reruenCode === '-1001') {
          console.log('请求失败，错误信息')
        } else {
          return data
        }
      },
      (err) => {
        console.log('在所有实例都有的拦截器响应失败')
        if (err.response.statue === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }
  request<T>(config: XYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // console.log(res)
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          // 3.
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: XYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: XYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: XYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: XYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default XYRequest
