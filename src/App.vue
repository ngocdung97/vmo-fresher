<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/log-in">
      Log In
    </router-link> |
    <router-link to="/register">
      Register new account
    </router-link> |
    <router-link to="/about">
      About
    </router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.card {
  width: 300px;
  margin: auto;
  box-shadow: 0px 14px 80px rgb(34 35 58 / 20%);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  background-color: lightblue;
}

.form-group {
  padding: 5px;
}

input[type=text],
input[type=password] {
  width: 250px;
  height: 20px;
  text-align: center;
} 

button {
  height: 40px;
  width: 100px;
  background-color: blue;
  color: white;
  font-size: 15px;
  line-height: 1.2;
  padding: 0 20px;
  cursor: pointer;
}

label {
  font-size: 15px;
}
</style>
