<template>
  <div class="card">
    <form>
      <h2 class="card-header">
        REGISTER
      </h2>

      <div class="form-group">
        <label>First Name</label> <br>
        <input type="text">
      </div>

      <div class="form-group">
        <label>Last Name</label> <br>
        <input type="text">
      </div>

      <div class="form-group">
        <label>Department</label> <br>
        <input type="text">
      </div>

      <div class="form-group">
        <label>Username</label> <br>
        <input type="text">
      </div>

      <div class="form-group">
        <label>Password</label> <br>
        <input type="text">
      </div>

      <div class="form-group">
        <label>Confirm Password</label> <br>
        <input type="text">
      </div>

      <div class="form-group">
        <label>E-mail</label> <br>
        <input type="text">
      </div>

      <div class="form-group">
        <label>Contact Number</label> <br>
        <input type="text">
      </div>

      <button 
        type="submit" 
        @click="onLoginForm"
      >
        Register
      </button>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    onLoginForm () {
      this.$router.push('/log-in')
      //   this.$emit('onChangeForm', 'register')
      // debugger
    }
  },
}
</script>
<style lang="css">
</style>