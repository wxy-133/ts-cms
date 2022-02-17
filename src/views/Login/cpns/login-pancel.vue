<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="title">
            <el-icon> <Avatar /> </el-icon>账号登陆
          </span> </template
        ><login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="title">
            <el-icon><Cellphone /></el-icon>手机登陆
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">primary</el-link>
    </div>
    <el-button type="primary" class="login-button" @click="handleLoginClick"
      >立即登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: { loginAccount, loginPhone },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()
    const currentTab = ref('account')

    const handleLoginClick = () => {
      // console.log('handleLoginClick', accountRef.value)
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value) // ?.可选链
      } else {
        console.log('phoneRef')
      }
    }
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      phoneRef,
      currentTab
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  margin-top: 120px;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.account-control {
  display: flex;
  justify-content: space-around;
}
.login-button {
  width: 100%;
  padding: 10px;
}
</style>
