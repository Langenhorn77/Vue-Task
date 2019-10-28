<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h2 class="text-center ">Страница авторизации</h2>
        <login></login>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Login from '../components/Login'
  export default {
    name: "Auth",
    components: {
      Login: Login
    }
  }
</script>

<style scoped>

</style>
