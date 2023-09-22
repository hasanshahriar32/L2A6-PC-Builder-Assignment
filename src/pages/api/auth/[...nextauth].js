import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "785516990343-rog8ja151nhi0i3l1g5pu3iqs0pujiqe.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "",
  },
};

export default NextAuth(authOptions);
