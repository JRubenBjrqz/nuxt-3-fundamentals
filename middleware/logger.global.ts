export default defineNuxtRouteMiddleware((to, from) => {
  console.log('middleware', to, from);
})
