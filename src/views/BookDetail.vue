<template>
    <div class="container mt-5">
      <h3 class="text-center">Book Details</h3>
      <div v-if="book" class="card w-50 mx-auto">
        <div class="card-body">
          
          <h5 class="card-title">Title: {{ book.title }}</h5>
          <p class="card-text">Author: {{ book.author }}</p>
          <p class="card-text">Year: {{ book.year }}</p>

          <img :src="book.cover" alt="Book cover" class="img-fluid" />
        </div>
      </div>
      <div v-else>
        <p class="text-center">không lấy được dữ liệu</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import instanceAxios from '@/helper/configAxios'
  
  const book = ref(null)
  const route = useRoute()
  
  // const fetchBook = async () => {
  //   try {
  //     const bookId = route.params.id
  //     const fetchBookResponse = await instanceAxios.get(`/books/${bookId}`)
  //     book.value = fetchBookResponse.data

  //   } catch (error) {
  //     console.error(':', error)
  //   }
  // }


const detail  = async ()=>{
  const bookId = route.params.id
  const fetchBookResponse = await instanceAxios.get(`/books/${bookId}`)
  book.value = fetchBookResponse.data
}
  

  onMounted(() => {
    detail()
  })
  </script>
  