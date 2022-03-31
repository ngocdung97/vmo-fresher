<template>
  <div class="card">
    <form>
      <h2 class="card-header">
        LOG IN
      </h2>

      <div class="form-group">
        <label>Username</label> <br>
        <input
          type="text" 
          v-model="loginObject.username"
          class="username"
          placeholder="Type your username..."
        >
      </div>

      <div class="form-group">
        <label>Password</label> <br>
        <input
          type="text" 
          v-model="loginObject.password"
          class="psw"
          placeholder="Type your password..."
        >
      </div>

      <button 
        type="submit" 
        @click="onLogin"
      >
        Log In
      </button>

      <p>
        <router-link
          to="/forgot-password"
        >
          Forgot password
        </router-link>
      </p>

      <p>
        <router-link
          to="/register"
        >
          Click here to create new account.
        </router-link>
      </p>
    </form>

    <!-- <button @click="onRegisterForm">
      Sang form Register
    </button> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginObject: {
        username: '',
        password: '',
      },
    }
  },

  methods: {
    onRegisterForm () {
      this.$router.push('/register')
      //   this.$emit('onChangeForm', 'register')
    },
    onForgotPasswordForm () {
      this.$router.push('/forgot-password')
    },
    onLogin () {
      this.loginObject
      // debugger
    }
  },

  computed: {
    listStudent () {
      return this.students
    }
  },

  created () {  }
}
</script>
<style lang="css" scoped>
template {
  background-image: url("../../assets/sunset.jpg");
}
.card {
  margin-top: 50px;
}
</style>