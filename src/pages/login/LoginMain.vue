<template>
  <router-view @on-change-form="onChangeForm" />
</template>

<script>
export default {
};
</script>
<style lang="scss">
.w-input {
  font-size: 16px;

  &__input-wrap {
    height: 38px;
  }
}
</style>
<style lang="scss" scoped>
.container {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: none;
  max-height: none;
}
</style>
