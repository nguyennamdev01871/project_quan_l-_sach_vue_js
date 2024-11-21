<template>
    <div>
      <div class="mt-5">
        <h3 class="text-center">Update Book</h3>
        <form class="w-50 mx-auto" @submit.prevent="handleUpdate">
          <div class="form-group my-2">
            <label class="my-2" for="title">Title</label>
            <input type="text" class="form-control" v-model="book.title" />
            <span v-if="errors.title" class="text-danger">{{ errors.title }}</span>
          </div>
          <div class="form-group my-2">
            <label class="my-2" for="author">Author</label>
            <input type="text" class="form-control" v-model="book.author" />
            <span v-if="errors.author" class="text-danger">{{ errors.author }}</span>
          </div>
          <div class="form-group my-2">
            <label class="my-2" for="cover">Cover</label>
            <input type="text" class="form-control" v-model="book.cover" />
            <span v-if="errors.cover" class="text-danger">{{ errors.cover }}</span>
          </div>
          <div class="form-group my-2">
            <label class="my-2" for="year">Year</label>
            <input type="text" class="form-control" v-model="book.year" />
            <span v-if="errors.year" class="text-danger">{{ errors.year }}</span>
          </div>
  
          <button type="submit" class="btn btn-info">
            Update
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import instanceAxios from '@/helper/configAxios'
  
  const router = useRouter()
  const route = useRoute()
  
  const book = reactive({
    title: '',
    author: '',
    cover: '',
    year: ''
  })
  
  const errors = reactive({
    title: '',
    author: '',
    cover: '',
    year: ''
  })
  

  const validateForm = () => {
    let isValid = true
    errors.title = ''
    errors.author = ''
    errors.cover = ''
    errors.year = ''
  
    if (!book.title) {
      errors.title = 'Title không được để trống'
      isValid = false
    }
    if (!book.author) {
      errors.author = 'Author không được để trống'
      isValid = false
    }
    if (!book.cover) {
      errors.cover = 'Cover không được để trống'
      isValid = false
    }
    if (!book.year || isNaN(book.year)) {
      errors.year = 'Year phải là số'
      isValid = false
    }
  
    return isValid        
  }
  const fetchBook = async () => {
    try {
      const bookId = route.params.id
      const response = await instanceAxios.get(`/books/${bookId}`)
      Object.assign(book, response.data)
    } catch (error) {
      console.error('', error)
    }
  }



  

  const handleUpdate = async () => {
  if (validateForm()) {
    const bookId = route.params.id
        await instanceAxios.put(`/books/${bookId}`, book)
        router.push({ path: '/home', name: 'home' })  
  }
}






  
  onMounted(() => {
    fetchBook()
  })
  </script>
  
  <style lang="scss" scoped></style>
  