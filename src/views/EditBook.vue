<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import BookForm from "@/components/BookForm.vue";
import booksService from "@/services/books.service";
const props = defineProps({
  bookId: { type: String, required: true },
});
const $router = useRouter();
const $route = useRoute();
const book = ref(null);
const message = ref("");

async function getBook() {
  try {
    book.value = JSON.parse(decodeURIComponent($route.query.book));
  } catch (error) {
    console.error('Error parsing book data:', error);
    // Handle the error, e.g., redirect to an error page or display a message
  }
}



async function onUpdateBook(editedBook) {
  try {
    await booksService.updateBook(editedBook.id, editedBook);
    message.value = "Sách được cập nhật thành công.";
  } catch (error) {
    console.log(error);
  }
}
async function onDeleteBook(id) {
  if (confirm("Bạn muốn xóa Sách này?")) {
    try {
      await booksService.deleteBook(id);
      $router.push({ name: "Home" });
    } catch (error) {
      console.log(error);
    }
  }
}
getBook(props.bookId);
</script>
<template>
  <div v-if="book" class="page">
    <h4>Hiệu chỉnh Sách</h4>
    <BookForm
      :initial-book="book"
      @submit:book="onUpdateBook"
      @delete:book="onDeleteBook"
    />
    <p>{{ message }}</p>
  </div>
</template>
