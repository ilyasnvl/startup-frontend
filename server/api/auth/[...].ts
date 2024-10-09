import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET,
//   providers: [
//     CredentialsProvider.default({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email Address', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
    providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        credentials: {
            email: { label: 'Email Address', type: 'text' },
            password: { label: 'Password', type: 'password' }
        },
      authorize: async(credentials: any) => {
        try {
          // Kirim permintaan ke backend Go
          const res = await fetch(`${useRuntimeConfig().public.baseURL}/api/v1/sessions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data = await res.json();
            console.log('Response status:', res.status); // Cek status HTTP
            console.log('Response data:', data); // Cek data dari backend   

          // Cek apakah login berhasil
          if (res.ok && data.data.token) {
            // Return user object jika login berhasil
            return {
              token: data.data.token,
              email: credentials.email,
              name: data.data.name,
              image_url: data.data.image_url,
              id: data.data.id,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error during login:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Simpan token dari backend ke dalam JWT
      if (user) {
        token.accessToken = user.token;
        token.name = user.name;
        token.image_url = user.image_url;
        token.user_id = user.id;
      }
      return token;
    },
    async session({ session, token }) {

        if (session.user) {
            session.user.name = token.name; // Tambahkan nama user ke session
            session.user.image_url = token.image_url; // Tambahkan URL gambar user ke session
            session.user.user_id = token.user_id;
          }
      // Tambahkan token ke session
      session.accessToken = token.accessToken;

      

      return session;

    },
  },
  pages: {
    signIn: '/login', // halaman login
  },
});
