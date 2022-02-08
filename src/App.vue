<template>
  <div class="app">
    <h2>{{ $store.state.name }}</h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>
<style lang="less"></style>
