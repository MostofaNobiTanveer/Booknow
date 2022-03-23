import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '../../../models/user';
import dbConnect from '../../../config/dbConnect';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        dbConnect();
        const { email, password } = credentials;

        // Check if email and password are provided
        if (!email || !password) {
          throw new Error('Email and password are required');
        }

        // Check if user exists
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
          throw new Error('Invalid email or password');
        }

        // Check if password is correct
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          throw new Error('Invalid email or password');
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});
