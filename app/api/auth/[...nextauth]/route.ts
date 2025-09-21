import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/utils/connect";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          typeof credentials?.username !== "string" ||
          typeof credentials?.password !== "string"
        ) {
          return null;
        }

        const user = await prisma.driver.findUnique({
          where: { userName: credentials.username },
        });

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatch) return null;

        return {
          id: user.id,
          userName: user.userName,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // primeira vez que o user loga
      if (user) {
        token.id = user.id;
        token.userName = (user as any).userName;
      }
      return token;
    },
    async session({ session, token }) {
      // coloca os dados do token na session
      session.user = {
        id: token.id as string,
        userName: token.userName as string,
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
