<template>
  <div>
    <form @submit.prevent="submitLogin">
      <div>
        <label for="username">username</label>
        <input type="text" id='username' v-model="username" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id='password' v-model="password" />
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogin() {
      const payload = {
        username: this.username,
        password: this.password
      }
      console.log(payload)
      this.$router.push({ name: 'mypage' })
    }
  }
}
</script>
