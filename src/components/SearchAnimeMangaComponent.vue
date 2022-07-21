<template>
  <div class="container-fluid pt-5 d-flex justify-content-center">
    <div class="card w-50">
      <div class="card-header">
        <h3 class="card-title text-center">Search Anime/Manga</h3>
      </div>
      <div class="card-body">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Choisir un type</label>
          <select class="form-select" id="inputGroupSelect01">
            <option value="1" selected>Anime</option>
            <option value="2">Manga</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Entrez le nom d'un anime ou manga">
          <button class="btn btn-outline-success" type="button" id="button-addon2">Rechercher</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid pt-5 d-flex justify-content-center" v-for="element in [0,1,2,3,4,5,6,7,8]" :key="element">
    <div class="card w-75">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex">
          <img
              src="https://static.posters.cz/image/350/affiches-et-posters/my-hero-academia-season-1-i56127.jpg"
              width="150" class="rounded m-2 img-thumbnail">
          <div class="mt-2">
            <h5 class="mb-0">My Hero Academia</h5>
            <p class="text-muted">Season 1</p>
          </div>
        </div>
        <div>
          <h5 class="mb-0">Trop bien</h5>
          <p class="text-muted">La saison est trop bien</p>
        </div>
        <div class="d-flex flex-column m-2">
          <button class="btn btn-outline-success" style="width: 150px">Ajouter</button>
          <button class="btn btn-outline-danger mt-2" style="width: 150px">Supprimer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchAnimeMangaComponent"
}
</script>

<style scoped>

</style>