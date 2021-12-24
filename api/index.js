import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.baseURL,
})

function fetchProduct() {
  return instance.get('/products')
}

function fetchProductById (id) {
  return instance.get(`/products/${id}`)
}

function fetchProductByKeyword (keyword) {

  return instance.get(`/products/`, {
    params : {
      name_like : keyword,
    }
  })
}

// carts
function createCartItem(cartItem) {
  return instance.post('/carts', cartItem)
}

function fetchCartItems() {
  return instance.get('/carts')
}

export { fetchProduct,fetchProductById, fetchProductByKeyword, createCartItem, fetchCartItems }