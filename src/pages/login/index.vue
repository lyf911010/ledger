<template>
  <div class="login-page">
    <div class="login-head">欢迎</div>
    <div class="login-main">
      <template v-if="isLogin">
        <div class="user-info">
          <p>用户名</p>
          <input v-model="userName"/>
        </div>
        <div class="user-info">
          <p>密码</p>
          <input v-model="password"/>
        </div>
      </template>
      <!--注册-->
      <template v-else>
        <div class="user-info">
          <p>用户名</p>
          <input v-model="userName"/>
        </div>
        <div class="user-info">
          <p>密码</p>
          <input v-model="password"/>
        </div>
        <div class="user-info">
          <p>确认密码</p>
          <input v-model="rePassword"/>
        </div>
      </template>

      <div class="login-btn login" @click="handleSubmit">{{ isLogin ? "登录" : "注册" }}</div>
      <!-- <p class="forget-pwd">忘记密码</p> -->
      <p class="no-account" @click="handleSwitch">{{ isLogin ? "还没有账号?" : "已经有账号" }} <span>{{ isLogin ? "注册" : "登录" }}</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()
const router = useRouter()

let isLogin = ref(true)
let userName = ref('')
let password = ref('')
let rePassword = ref('')

const { type } = route.query;
isLogin.value = type && +type === 1 ? true : false

const handleSubmit = () => {
  if (isLogin) {
    console.log('login');
    console.log(userName.value, password.value);
  } else {
    console.log('register');
    console.log(userName.value, password.value, rePassword.value);
  }
}

const handleSwitch = () => {  
  router.replace({
    name: 'Login',
    query: {
      type: isLogin.value ? 2 : 1
    }
  })
}

/**
 * TODO:
 */
onBeforeRouteUpdate((to, from) => {
  const { type } = to.query
  isLogin.value = type && +type === 1 ? true : false
})
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background-color: #00D09E;
  .login-head {
    font-size: 30px;
    color: #000;
    text-align: center;
    padding-top: 50px;
  }
  .login-main {
    width: 100%;
    height: 80vh;
    overflow-y: auto;
    background-color: #F1FFF3;
    position: fixed;
    bottom: 0;
    left: 0;
    border-radius: 40px 40px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .user-info {
      p {
        font-size: 14px;
        color: #093030;
        margin-bottom: 5px;
        padding-left: 10px;
      }
      input {
        width: 320px;
        height: 41px;
        border-radius: 18px;
        background-color: #DFF7E2;
        border: none;
        outline: none;
        padding-left: 20px;
      }
    }
    .login-btn {
      width: 207px;
      height: 45px;
      background-color: #DFF7E2;
      border-radius: 30px;
      text-align: center;
      line-height: 45px;
      font-size: 16px;
      margin-top: 40px;
      &.login {
        background-color: #00D09E;
        margin-bottom: 12px;
        box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
      }
    }
    .forget-pwd {
      font-size: 14px;
    }
    .no-account {
      color: #093030;
      font-size: 13px;
      span {
        color: #00D09E;
      }
    }
  }
}
</style>