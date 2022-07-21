<template>
  <header-component></header-component>
  <router-view></router-view>
</template>

<script>

import HeaderComponent from "@/components/shared/HeaderComponent";
export default {
  name: 'App',
  components: {HeaderComponent}
}
</script>

<style>
</style>
