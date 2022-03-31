<template>
  <div class="card">
    <form>
      <h2 class="card-header">
        FORGOT PASSWORD
      </h2>

      <div class="form-group">
        <label>Username</label> <br>
        <input
          type="text"
          placeholder="Type your username..."
        >
      </div>

      <button
        type="submit"
        @click="onLoginForm"
      >
        Reset Password
      </button>
    </form>
  </div>  
</template>

<script>
export default {
  methods: {
    onLoginForm () {
      this.$router.push('/log-in')
    }
  },
}
</script>

<style lang="css">  
</style>