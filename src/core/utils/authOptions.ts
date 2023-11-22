import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const timer = (time: number) => new Promise((resolve, reject) => setTimeout(() => resolve, time))

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password, csrfToken } = req.body || {};
                const user: User = {
                    id: Math.floor(Math.random() * 100).toString(),
                    username: username,
                    email: "earth@gmail.com",
                    role: "admin"
                }

                // If no error and we have user data, return it
                if (user) return user

                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    debug: true,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async jwt({ token, user, account, profile }) {

            if (account) {
                token.username = user.username
                token.email = user.email
                token.id = user.id
                token.role = user.role
            }

            return token
        },
        async session({ session, token, user }) {
            session.user = {
                id: token.id,
                email: token.email,
                role: token.role,
                username: token.username
            }

            return session
        }
    }
}

export default authOptions