<template>
  <form @submit.prevent="login">
    <div>
      <label for="username">Phone number:</label>
      <input type="text" id="username" v-model="phone_number" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">Đăng nhập</button>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import makeAuthService from '../services/users.service'; // Import service từ file makeAuthService.js

 // Gọi hàm loginUser từ service

const phone_number = ref('');
const password = ref('');
let error = '';

const login = async () => {
  try {
    const { ok, data } = await makeAuthService.loginUser(phone_number.value, password.value);

    if (ok) {
      localStorage.setItem('access_token', data.responseData.access_token);
      console.log('Đăng nhập thành công');
      const accessToken = localStorage.getItem('access_token');
      console.log(accessToken)
    } else {
      error = data.message;
    }
  } catch (err) {
    console.error('Đã xảy ra lỗi:', err);
    error = 'Đã xảy ra lỗi khi đăng nhập';
  }
};
</script>
