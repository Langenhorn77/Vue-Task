<template>
  <v-app>
    <page-header></page-header>
    
    <v-content>
        <router-view></router-view>
    </v-content>
    
  </v-app>
  </template>
  
  <script>
    import PageHeader from './components/PageHeader.vue'
    export default {
      props: {
        source: String,
      },
      data: () => ({
        drawer: null,
      }),
      components: {
        PageHeader: PageHeader
      }
    }
  </script>




<style lang="scss">

</style>
