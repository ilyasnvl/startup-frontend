import NextAuth from 'next-auth'
import { JWT as DefaultJWT } from 'next-auth/jwt'

// Perluas tipe User
declare module 'next-auth' {
  interface User {
    token?: string // Menambahkan properti token di User
    name?: string;
    image_url?: string;
  }

  interface Session {
    accessToken?: string // Menambahkan properti accessToken di Session
    user?: {
      name?: string;
      image_url?: string;
    } & DefaultSession["user"];
  }
}

// Perluas tipe JWT
declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    accessToken?: string // Menambahkan properti accessToken di JWT
  }
}
