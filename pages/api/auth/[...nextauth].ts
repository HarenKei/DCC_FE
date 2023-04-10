import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Providers from 'next-auth/providers';
import dotenv from "dotenv";
// Initialize NextAuth
dotenv.config();
const googleConfig={
    id : process.env.GOOGLE_CLIENT_ID,
    sc : process.env.GOOGLE_CLIENT_SECRET
};

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: googleConfig.id!,
            clientSecret: googleConfig.sc!
        })
    ]
});