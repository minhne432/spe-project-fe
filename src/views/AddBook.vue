<script setup>
import { ref } from "vue";
// import { useRouter, useRoute } from "vue-router";
import BookForm from "@/components/BookForm.vue";
import booksService from "@/services/books.service";

// const props = defineProps(["bookId"]);
// const $router = useRouter();
// const $route = useRoute();
const book = ref(null);
const message = ref("");



// async function getBook(id) {
//   try {
//     const response = await booksService.getBook(id);
//     // Check if the response is valid JSON
//     const bookData = JSON.parse(response);
//     book.value = bookData;
//   } catch (error) {
//     console.error('Error fetching book:', error);
//   }
// }



async function onAddBook(newBook) {
  try {
await booksService.createBook(newBook);

    message.value = "Sách được thêm thành công.";
  } catch (error) {
    console.log(error);
  }
}


// getBook(props.bookId);

</script>
<template>
  <div class="page">
    <h4>Thêm Sách</h4>
    <BookForm :initial-book="book || {}" @submit:book="onAddBook" />
    <p>{{ message }}</p>
  </div>
</template>