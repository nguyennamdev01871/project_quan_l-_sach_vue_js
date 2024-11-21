<template>
  <div class="mt-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Year</th>
          <th scope="col">cover</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, id) in books" :key="id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.year }}</td>
          <td><img :src="book.cover" alt="" width="90px"/></td>
          <td>
            <RouterLink class="mx-2 text-decoration-none" @click="handleShowBookDetail(book.id)" :to="`/book-detail/${book.id}`">view</RouterLink>
            <RouterLink class="btn btn-warning mx-2 text-decoration-none" :to="{ name: 'edit-book', params: { id: book.id } }">Edit</RouterLink>
            <button class="btn btn-danger" @click="handleDelete(book.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import instanceAxios from '@/helper/configAxios'
import router from '@/router'
import { onMounted, ref } from 'vue'

const books = ref()


const fetchBooks = async () => {
  const fetchBooksResponse = await instanceAxios.get('/books')
  books.value = fetchBooksResponse.data
}




const handleDelete = async (bookId) =>{
   await instanceAxios.delete(`/books/${bookId}`)
  fetchBooks();
}






const handleShowBookDetail = (bookId) => {
  
  router.push({
    path: `/detail/${bookId}`, 
    name: 'detail',
    params: { id: bookId }
  })
}






onMounted(() => {
  fetchBooks()
})
</script>

<style lang="scss" scoped></style>