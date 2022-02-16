<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      :rules="rules"
      :model="account"
      label-width="60px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input
          type="name"
          autocomplete="off"
          v-model="account.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          autocomplete="off"
          v-model="account.password"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import LocalCache from '../../../utils/cache'
export default defineComponent({
  components: {},
  setup() {
    const store = useStore()

    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            //不记住密码，清除缓存
            LocalCache.delCache('name')
            LocalCache.delCache('password')
          }
          // 2.开始进行登陆验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>
<style lang="less" scoped></style>
