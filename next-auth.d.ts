import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      userName: string;
    };
  }

  interface JWT {
    id: string;
    userName: string;
  }
}
