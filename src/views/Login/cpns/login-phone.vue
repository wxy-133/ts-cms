<template>
  <div class="login-phone">
    <el-form
      ref="ruleFormRef"
      status-icon
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号码" prop="phone">
        <el-input
          type="password"
          autocomplete="off"
          v-model="phone.number"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input
          type="password"
          autocomplete="off"
          v-model="phone.code"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登陆</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  components: {},
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })
    return { phone }
  }
})
</script>
<style lang="less" scoped></style>
