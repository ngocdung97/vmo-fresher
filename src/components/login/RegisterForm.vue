<template>
  <div>
    register
    <button @click="onRegisterForm">
      Sang form Login
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    onRegisterForm () {
      this.$router.push('/')
      //   this.$emit('onChangeForm', 'register')
      debugger
    }
  },
}
</script>
<style lang="scss" scoped>
</style>