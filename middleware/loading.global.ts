import { useLoading } from '../store/loading'

export default defineNuxtRouteMiddleware(async (to, from) => {
  useLoading().setPageLoader(true)
})
