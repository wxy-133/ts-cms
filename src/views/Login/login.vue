<template>
  <div class="login">
    <login-pancel></login-pancel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPancel from './cpns/login-pancel.vue'

export default defineComponent({
  components: {
    loginPancel
  },
  setup() {
    return {}
  }
})
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/login-bg.svg');
}
</style>
