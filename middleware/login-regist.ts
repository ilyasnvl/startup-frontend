export default defineNuxtRouteMiddleware(async (to) => {
    const { data: session } = useAuth();
    
    const token = session?.value?.accessToken;
    
    // Cek jika user belum login
    if (token) {
      return navigateTo('/');
    }
})