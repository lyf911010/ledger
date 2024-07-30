<template>
  <div class="launch-page">
    <div class="launch-btn login" @click="handleLogin(1)">登录</div>
    <div class="launch-btn" @click="handleLogin(2)">注册</div>
    <!-- <p>忘记密码</p> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogin = (type: number) => {
  router.push({
    name: 'Login',
    query: {
      type
    }
  })
}

</script>

<style lang="scss" scoped>
.launch {
  &-page {
    width: 100%;
    height: 100%;
    background-color: #F1FFF3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 14px;
      color: #093030;
    }
  }
  &-btn {
    width: 207px;
    height: 45px;
    background-color: #DFF7E2;
    border-radius: 30px;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
    &.login {
      background-color: #00D09E;
      margin-bottom: 12px;
      box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
    }
  }
}
</style>