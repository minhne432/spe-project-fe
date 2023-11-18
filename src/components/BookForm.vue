<script setup>
import { ref } from "vue";

const props = defineProps({
  initialBook: { type: Object, required: true },
});
const $emit = defineEmits(["submit:book", "delete:book"]);

const editedBook = ref({ ...props.initialBook });
const selectedImage = ref(null);

function handleImageUpload(event) {
  const file = event.target.files[0];
  selectedImage.value = file;
  console.log(selectedImage.value);

  // Cập nhật trường 'image' trong editedBook để truyền thông tin ảnh cho EditBook.vue
  editedBook.value.image = file;
  console.log(editedBook.value.image)
}

function deleteBook() {
  $emit("delete:book", editedBook.value.id);
}
function submitBook() {
  $emit("submit:book", editedBook.value);
}



</script>




<template>
  <form @submit.prevent="submitBook">
    <div class="form-group">
      <label for="name">Tên sách</label>
      <input
        id="name"
        type="text"
        class="form-control"
        v-model="editedBook.name"
      />
    </div>
    <div class="form-group">
      <label for="author">Thể loại</label>
      <input
        id="author"
        type="text"
        class="form-control"
        v-model="editedBook.categoryName"
      />
    </div>
    <div class="form-group">
      <label for="price">Giá</label>
      <input
        id="price"
        type="text"
        class="form-control"
        v-model="editedBook.price"
      />
    </div>
    <div class="form-group">
    <label for="image">Ảnh</label>
    <input type="file" id="image" ref="imageInput" style="display: none" @change="handleImageUpload" />
    <button @click="handleImageUpload">Tải ảnh lên</button>
  </div>

    <div class="form-group">
      <button>Lưu</button>
      <button
        v-if="editedBook.id"
        type="button"
        @click="deleteBook"
      >
        Xóa
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>
