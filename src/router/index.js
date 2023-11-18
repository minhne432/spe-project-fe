// Import các phần cần thiết từ thư viện Vue Router.
import { createRouter, createWebHistory } from 'vue-router'

// Import các component Vue đã tạo hoặc sẽ sử dụng.
import Home from '../views/ShopIndex.vue'


  // Định nghĩa các route của ứng dụng.
const routes = [
  {
    // Địa chỉ URL mặc định (gốc) của trang.
    path: '/',
    // Sử dụng component Home khi địa chỉ này được truy cập.
    component: Home,
    // Đặt tên cho route, dễ dàng sử dụng trong code khác.
    name: 'Home'
  },
  {
    // Địa chỉ URL '/login'.
    path: '/login',
    // Sử dụng component Login khi địa chỉ này được truy cập.
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/books/:id',
    name: 'book.edit',
    component: () => import('@/views/EditBook.vue'),
    props: (route) => ({ bookId: route.params.id })
  },
  {
    path: '/books/add',
    name: 'book.add',
    component: () => import('@/views/AddBook.vue'),
    
  },
  {
    // Địa chỉ URL không khớp với bất kỳ route nào ở trên.
    // Thường được sử dụng để xử lý trang 404 (Không tìm thấy).
    path: '/:pathMatch(.*)*',
    // Đặt tên cho route "notfound".
    name: 'notfound',
    // Sử dụng component NotFound khi địa chỉ không khớp với bất kỳ route nào.
    component: () => import('../views/NotFound.vue')
  }
]


// Tạo một instance của Router sử dụng createRouter.
const router = createRouter({
  // Sử dụng createWebHistory để tạo router sử dụng HTML5 History API.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
// Xuất router để sử dụng trong ứng dụng Vue.
export default router
