<template>
  <div class="app">
    <header class="title">
    <NuxtLink class="logo" to="/">NuxtShoping</NuxtLink>
    <!-- <h1 @click="moveMain">NuxtShoping</h1> -->
    </header>
  </div>  
</template>

<script>
export default {
  methods: {
    moveMain() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

/* 헤더 관려 태그 */
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
  cursor: pointer;
  color: dodgerblue;

}
.logo:visited {
  color: inherit;
}
</style>


</style>