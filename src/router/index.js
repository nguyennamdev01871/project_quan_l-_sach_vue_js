import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FormCreateBook from '@/components/FormCreateBook.vue'
import BookDetail from '@/views/BookDetail.vue'
import FormUpdateBook from '@/views/FormUpdateBook.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/create',
      name: 'create-book',
      component: FormCreateBook
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: BookDetail
    },
    {
      path: '/edit/:id',
      name: 'edit-book',
      component: FormUpdateBook 
    }
    
    
  ]
})

export default router
