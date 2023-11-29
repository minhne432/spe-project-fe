<template>
  <SideBar />
  <div class="cart-container">
    <h1>Giỏ hàng của bạn</h1>
    <ul class="cart-items">
      <li v-for="(product, index) in cartItems" :key="index" class="cart-item">
        <!-- Hiển thị thông tin của mỗi sản phẩm -->
        <div class="product-info">
          <img :src="product.thumbnail" class="product-image" />
          <div class="product-details">
            <p class="product-name">{{ product.name }}</p>
            <p class="product-price">Giá: {{ product.price }}</p>
            <p class="product-quantity">số lượng: {{ product.quantity }}</p>

            <!-- Các thông tin khác về sản phẩm -->
          </div>
        </div>
        <button @click="deleteItem(product.item_id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
import { ref, onMounted } from 'vue'
import ordersService from '@/services/order.service.js'

// Khai báo ref để lưu trữ thông tin giỏ hàng
const cartItems = ref([])

// Logic để lấy dữ liệu giỏ hàng từ service khi component được tạo
onMounted(async () => {
  try {
    const user_id = localStorage.getItem('id')
    const response = await ordersService.getCartByUserId(user_id)

    if (response.ok) {
      cartItems.value = response.data
    } else {
      console.error('Error fetching cart details:', response.message)
    }
  } catch (error) {
    console.error('Error fetching cart details:', error)
  }
})

const deleteItem = async (item_id) => {
  try {
    const response = await ordersService.deleteCartItemById(item_id)
    if (response.ok) {
      // Xóa sản phẩm thành công từ giỏ hàng API

      // Cập nhật lại danh sách sản phẩm hiển thị trên giao diện
      cartItems.value = cartItems.value.filter((item) => item.item_id !== item_id)
    } else {
      console.error('Error deleting item:', response.message)
    }
  } catch (error) {
    console.error('Error deleting item:', error)
  }
}
</script>

<style >
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cart-items {
  list-style-type: none;
  padding: 0;
}

.cart-item {
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  display: flex;
  align-items: center;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.product-details {
  flex: 1;
}

.product-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.product-price {
  color: #555;
  margin: 0;
}
</style>
