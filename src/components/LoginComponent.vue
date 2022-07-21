<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Connexion</h3>
    </div>
    <div class="card-body align-items-center d-flex justify-content-center">
      <form>
        <div class="input-group mb-3" style="width: 400px">
          <span class="input-group-text" id="basic-addon1" style="width: 100px">Username</span>
          <input type="text" class="form-control">
        </div>
        <div class="input-group mb-3" style="width: 400px">
          <span class="input-group-text" id="basic-addon1" style="width: 100px">Password</span>
          <input type="text" class="form-control">
        </div>
        <button type="submit" class="btn btn-outline-success">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
    }
  },
}
</script>

<style scoped>
  .card {
    width: 50%;
    text-align: center;
    margin: 30vh auto auto;
  }
</style>