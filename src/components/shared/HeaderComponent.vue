<template>
  <nav>
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h4>My Anime Library</h4>
        <ul class="navbar-nav">
          <li class="nav-item me-3">
            <router-link :to="{name: 'Search'}" class="nav-link py-3 border-bottom">
              Search
            </router-link>
          </li>
          <li class="nav-item me-3">
            <router-link :to="{name: 'PersonalLibrary'}" class="nav-link py-3 border-bottom">
              My Library
            </router-link>
          </li>
          <li class="nav-item me-3">
            <router-link :to="{name: 'Login'}" class="nav-link py-3 border-bottom">
              Information
            </router-link>
          </li>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-3">
              <button type="button" class="btn btn btn-outline-danger" v-on:click="logout">Se déconnecter</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data(){
      return {
      }
  },
  methods:{
    logout(){
      console.log('logout');
    },
  },
}
</script>

<style scoped>
</style>