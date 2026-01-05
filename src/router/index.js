import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Step1CourseInfo from '../views/Step1CourseInfo.vue'
import Step2References from '../views/Step2References.vue'
import Step3Structure from '../views/Step3Structure.vue'
import Step4EditStructure from '../views/Step4EditStructure.vue'
import Step5Review from '../views/Step5Review.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/step-1',
    name: 'Step1',
    component: Step1CourseInfo
  },
  {
    path: '/step-2',
    name: 'Step2',
    component: Step2References
  },
  {
    path: '/step-3',
    name: 'Step3',
    component: Step3Structure
  },
  {
    path: '/step-4',
    name: 'Step4',
    component: Step4EditStructure
  },
  {
    path: '/step-5',
    name: 'Step5',
    component: Step5Review
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
