import NextAuth from 'next-auth'
import { JWT as DefaultJWT } from 'next-auth/jwt'

// Perluas tipe User
declare module 'next-auth' {
  interface User {
    token?: string // Menambahkan properti token di User
    name?: string;
    image_url?: string;
    user_id?: string
  }

  interface Session {
    accessToken?: string // Menambahkan properti accessToken di Session
    user?: {
      name?: string;
      image_url?: string;
      user_id?: string
    } & DefaultSession["user"];
  }

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
    data: Campaign;
  }  
}

// Perluas tipe JWT
declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    accessToken?: string // Menambahkan properti accessToken di JWT
  }
}
