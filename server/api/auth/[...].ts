// import { NuxtAuthHandler } from '#auth'
// import CredentialsProvider from 'next-auth/providers/credentials'

// export default NuxtAuthHandler({
//     // TODO: SET A STRONG SECRET, SEE https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler#secret
//     secret: process.env.AUTH_SECRET,
//     // TODO: ADD YOUR OWN AUTHENTICATION PROVIDER HERE, READ THE DOCS FOR MORE: https://sidebase.io/nuxt-auth
//     providers: [
//       // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
//       CredentialsProvider.default({
//         // The name to display on the sign in form (e.g. 'Sign in with...')
//         name: 'Credentials',
//         // The credentials is used to generate a suitable form on the sign in page.
//         // You can specify whatever fields you are expecting to be submitted.
//         // e.g. domain, username, password, 2FA token, etc.
//         // You can pass any HTML attribute to the <input> tag through the object.
//         credentials: {
//           username: { label: 'Email Address', type: 'text' },
//           password: { label: 'Password', type: 'password' }
//         },
//         authorize: async(credentials: any) => {
//           //console.warn('ATTENTION: You should replace this with your real providers or credential provider logic! The current setup is not safe')
//           // You need to provide your own logic here that takes the credentials
//           // submitted and returns either a object representing a user or value
//           // that is false/null if the credentials are invalid.
//           // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
  
//           //const user = { id: '1', name: 'J Smith', username: 'jsmith', password: 'hunter2' }
  
//           const res = await fetch('http://localhost:8080/api/v1/sessions', {
//                         method: 'POST',
//                         body: JSON.stringify(credentials),
//                         headers: { 'Content-Type': 'application/json' }
//                       })

//                       const user = await res.json()
              
//                       if (res.ok && user?.token) {
//                         return {
//                             ...user, // Mengembalikan user dengan token (pastikan backend mengembalikan token)
//                             token: user.token // Pastikan ini adalah token yang kamu dapat dari backend
//                           }
//                       } else {
//                         console.log("error login")
//                       }
//                     }
//               })
//             ],
                    
//     pages: {
//         signIn: '/login'
//         },
//     callbacks: {
//         // Callback untuk mengelola JWT token
//         async jwt({ token, user }) {
//             if (user?.token) {
//                 token.accessToken = user.token // Menyimpan token dari backend ke JWT token
//             }
//           return token
//         },
//         // Callback untuk mengelola session
//         async session({ session, token }) {
//             if (token?.accessToken) {
//                 session.accessToken = token.accessToken // Menyimpan accessToken ke dalam session
//               }
//             return session
//         }                      
//     }
//   })

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
          const res = await fetch('http://localhost:8080/api/v1/sessions', {
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
      }
      return token;
    },
    async session({ session, token }) {

        if (session.user) {
            session.user.name = token.name; // Tambahkan nama user ke session
            session.user.image_url = token.image_url; // Tambahkan URL gambar user ke session
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
