<template>
  <div>
    login
    <input
      type="text"
      v-model="loginObject.username"
    >
    <input
      type="text"
      v-model="loginObject.password"
    >
    <button @click="onLogin">
      Đăng nhập
    </button>
    <button @click="onRegisterForm">
      Sang form Register
    </button>
    <div> {{ name }} </div>
    <ul
      v-for="(student, index) in listStudent"
      :key="index"
    >
      <li @click="onChooseStudent(student.id)">
        name : {{ student.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios"

export default {
  data () {
    return {
      loginObject: {
        username: '',
        password: '',
      },
      name: 'Phan Thanh Tung',
      students: [
        {
          id: 1,
          name: "Phan Thanh Tùng",
          age: 20
        },
        {
          id: 2,
          name: "Bùi Ngọc Dũng",
          age: 20
        },
        {
          id: 3,
          name: "Mai Thế Hùng",
          age: 30
        },

      ]
    }
  },

  methods: {
    onRegisterForm () {
      this.$router.push('/register')
      //   this.$emit('onChangeForm', 'register')
    },

    onChooseStudent (id) {
      debugger
      axios.get(`http://localhost:3000/users/createUser`, this.loginObject).then(res => {
        debugger
      })
    },

    onLogin () {
      this.loginObject
      debugger
    }


  },

  computed: {
    listStudent () {
      return this.students
    }
  },


  created () {

  }
}
</script>
<style lang="">
</style>