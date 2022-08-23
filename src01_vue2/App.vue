<template>
  <Home></Home>
  <hr />
  <News></News>
  <hr />
  <User></User>
</template>

<script>
import Home from './components/Home.vue'
import News from './components/News.vue'
import User from './components/User.vue'
export default {
  name: 'App',
  components: {
    Home,
    News,
    User,
  }
}
</script>

<style>
</style>
