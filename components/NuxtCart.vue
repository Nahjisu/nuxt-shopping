<template>
  <div>
    <button class="btn" @click="moveCart">장바구니</button>
  </div>
</template>

<script>
export default {
  methods: {
    moveCart() {
      this.$router.push("/cart")
    }
  }
}
</script>

<style scoped>

.btn {
  width: 100px;
  height: 50px;
  background-color: dodgerblue;
  color: white;
  cursor: pointer;
}

</style>