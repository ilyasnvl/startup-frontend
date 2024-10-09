interface Campaign {
    id: number;
    name: string;
    short_description: string;
    description: string;
    image_url: string;
    goal_amount: number;
    current_amount: number;
    backer_count: number;
    user_id: number;
    slug: string;
    perks: string[];
    user: {
      name: string;
      image_url: string;
    };
    images: {
      image_url: string;
      is_primary: boolean;
    }[];
  }
  
  interface ApiResponse {
    meta: {
      message: string;
      code: number;
      status: string;
    };
    data: Campaign; // Campaign data is nested under data property
  }
  
  export default defineNuxtRouteMiddleware(async (to) => {
    const { data: session } = useAuth();
    
    const token = session?.value?.accessToken;
    
    // Cek jika user belum login
    if (!token) {
      return navigateTo('/login');
    }
  
    // Ambil campaign ID dari route params
    const campaignId = to.params.id;
  
    try {
      // Panggil API untuk mengecek apakah user memiliki campaign tersebut
      const { data: campaignResponse } = await useAsyncData<ApiResponse>('campaign', () => 
        $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/campaigns/${campaignId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Sertakan token di header untuk otorisasi
          }
        })
      );
  
      // Cek apakah campaign tidak ditemukan
      if (!campaignResponse.value || !campaignResponse.value.data) {
        console.error('Campaign not found');
        return navigateTo('/'); // Redirect jika campaign tidak ditemukan
      }
  
      const campaign = campaignResponse.value.data; // Mengakses data campaign dari respons API
  
      // Cek jika user bukan pemilik campaign
      if (campaign.user_id !== session.value.user.user_id) {
        return navigateTo('/'); // Redirect ke halaman home jika bukan pemilik
      }
  
    } catch (err) {
      console.error('Error in middleware:', err);
      return navigateTo('/'); // Redirect jika terjadi error pada proses
    }
  });
  