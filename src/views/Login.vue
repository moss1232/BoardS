<template>
<div class="form-wrapper">
  <h1>Sport  Book</h1>
  <form @submit.prevent="login" >
    <div class="form-item">
      <label for="email"></label>
      <input type="email" required placeholder="メールアドレス" v-model="email">
    </div>
    <div class="form-item">
      <label for="password"></label>
      <input type="password" required placeholder="パスワード" v-model="password">
    </div>
    <div class="button-panel">
      <input type="submit" class="button" title="Sign In" value="Sign In">
    </div>
  </form>
  <div class="form-footer">
    <p><a @click="shouldShowLoginForm = true">Sign Up</a></p>
  </div>
</div>
    <div class="error">{{ error }}</div>

</template>

<script>
import axios from 'axios'
import setItem from '../auth/setItem'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      try {
        this.error = null

        const res = await axios.post('http://localhost:3000/auth/sign_in', {
          email: this.email,
          password: this.password,
          }
        )
        if (!res) {
          throw new Error('メールアドレスかパスワードが違います')
        }

        if (!this.error) {
          setItem(res.headers, res.data.data.name)
          this.$emit('redirectToAppMain')
        }

        return res
      } catch (error) {
        console.log({ error })
        this.error = 'メールアドレスかパスワードが違います'
      }
    }
  }
}
</script>