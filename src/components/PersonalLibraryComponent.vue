<template>
  <div class="container-fluid pt-5 d-flex justify-content-center">
    <div class="w-75">
      <h1 class="text-center pb-2">My Anime Library</h1>
      <ul class="nav nav-pills nav-fill border p-2">
        <button class="btn btn-outline-primary nav-item" type="button">Anime</button>
        <button class="btn btn-outline-primary nav-item ms-2" type="button">Manga</button>
      </ul>
      <div class="border">
        <div class="container">
          <div class="row row-cols-auto">
            <div class="card col m-2" v-for="element in [0,1,2,3,4,5,6,7,8,9,10,11,12,1,1,1,1]" :key="element">
              <img
                  src="https://static.posters.cz/image/350/affiches-et-posters/my-hero-academia-season-1-i56127.jpg"
                  width="130" class="rounded m-2 img-thumbnail">
              <div class="d-flex justify-content-center m-2">
                <button class="btn btn-outline-primary">+</button>
                <button class="btn btn-outline-danger ms-2">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalLibraryComponent"
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>