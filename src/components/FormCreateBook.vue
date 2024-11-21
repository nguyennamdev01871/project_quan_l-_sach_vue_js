<template>
  <div>
    <div class="mt-5">
      <h3 class="text-center">Create book</h3>
      <form class="w-50 mx-auto" @submit.prevent="handleAdd">
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
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import instanceAxios from '@/helper/configAxios'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
    errors.title = 'Title khong duoc trong'
    isValid = false
  }
  if (!book.author) {
    errors.author = 'Author khong duoc trong'
    isValid = false
  }
  if (!book.cover) {
    errors.cover = 'Cover khong duoc trong'
    isValid = false
  }

  if (!book.year) {
    errors.year = 'Cover khong duoc trong'
    isValid = false
  }else if
    (!book.year || isNaN(book.year)) {
    errors.year = 'Year phai la so'
    isValid = false
  }
  return isValid
}


const handleAdd = async () => {
  if (validateForm()) {
      await instanceAxios.post('/books', book)
      router.push({ path: '/home', name: 'home' })   
  }
}




</script>

<style lang="scss" scoped></style>
