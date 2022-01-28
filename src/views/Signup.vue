<template>

<div class="form-wrapper">
  <h1>Sign Up</h1>
  <form @submit.prevent="signUp" >
    <div class="form-item">
      <label for="name"></label>
      <input type="name" required placeholder="name" v-model="name">
    </div>
    <div class="form-item">
      <label for="email"></label>
      <input type="email" required placeholder="メールアドレス" v-model="email">
    </div>

    <div class="form-item">
      <label for="password"></label>
      <input type="password" required placeholder="パスワード" v-model="password">
    </div>
    <div class="form-item">
      <label for="password confirmation"></label>
      <input type="password" required placeholder="確認" v-model="passwordConfirmation">
    </div>
    <div class="button-panel">
      <input type="submit" class="button" title="登録" value="登録">
    </div>
  </form>
  <div class="form-footer">
    <p><a @click="shouldShowLoginForm = true">Sign in</a></p>
  </div>
</div>
    <div class="error">{{ error }}</div>
</template>

<script>
import axios from 'axios'
import setItem from '../auth/setItem'
export default {
  emits: ['redirectToAppMain'],
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: null
    }
  },
  methods: {
    async signUp () {
      this.error = null
      try {
        const res = await axios.post('http://localhost:3000/auth', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation
          }
        )
        if (!res) {
          throw new Error('アカウントを登録できませんでした')
        }
        if (!this.error) {
          setItem(res.headers, res.data.data.name)
        }

        return res
      } catch (error) {
        this.error = 'アカウントを登録できませんでした'
      }
    }
  }
}
</script>