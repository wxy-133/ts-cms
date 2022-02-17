import xyRequest from '../index'
import IAccount from './type'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return xyRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
