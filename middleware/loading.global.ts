import { useLoading } from '../store/loading'

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('Loading middleware', to.path)
  useLoading().setPageLoader(true)
})
