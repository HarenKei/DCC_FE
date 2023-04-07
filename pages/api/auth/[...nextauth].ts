import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "353509793610-c5v7ue46kae727gfarj698ba6ir1nist.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
});