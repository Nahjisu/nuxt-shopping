<template>
  <div class="app">
    <NuxtShoping />
    <main>
    <div>
      <!-- <input type="text"> -->
      <!-- :search-keyword="searchKeyword" @input="updateSearchKeyword" -->
      <SearchInput 
      v-model="searchKeyword"
      @search="searchProducts"
      />
    </div>
      <ul>
        <li class="item flex" v-for="product in products" :key="product.id" @click="moveToDetailPage(product.id)">
        <img 
          class="product-image" 
          :src="product.imageUrl" 
          :alt="product.name"
        />
        <p> {{ product.name }}</p>
        <span> {{ product.price }}</span>
        </li>
      </ul>
    </main>
    <button class="cart-wrapper" @click="moveToCartpage">장바구니 바로가기</button>
  </div>
</template>

<script>
import SearchInput from '~/components/SearchInput.vue';
import NuxtShoping from '~/components/NuxtShoping.vue';
import { fetchProduct, fetchProductByKeyword } from '~/api';

export default {
components: { SearchInput, NuxtShoping },
async asyncData() {
  const response = await fetchProduct();
  const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
  }))
  return { products }
 },

 data() {
  return {
    searchKeyword: '',
  }
},
 
 methods: {
   moveToDetailPage(id) {
     this.$router.push(`detail/${id}`);
   },
  async searchProducts() {
     // this.searchKeyword = keyword
     const response = await fetchProductByKeyword(this.searchKeyword);
     this.products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
  }))
   },
  moveToCartpage() {
     this.$router.push('/cart')
   }
 },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  background-color: dodgerblue;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  height: 50px;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>