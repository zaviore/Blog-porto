/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/client";
import GitHubProvider from "next-auth/providers/github";

const authHandler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: { token: any; account?: any; user?: any }) {
      if (account && user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
});

// Export HTTP methods
export { authHandler as GET, authHandler as POST };
