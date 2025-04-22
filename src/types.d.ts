// types.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    strategy: "jwt" | "database"; 
    user: {
      id?: string; 
      name?: string | null;
      email?: string | null;
      image?: string | null;
      // Add other properties if needed
    };
  }

  interface User {
    id?: string;
    // Add any other custom fields for User if required
  }
}
