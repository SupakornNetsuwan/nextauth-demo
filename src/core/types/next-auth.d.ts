import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"


declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string,
            username: string,
            email: string,
            role: "superadmin" | "admin" | "support" | "user"
        }
    }

    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback, when using a database.
     */
    interface User {
        id: string,
        username: string,
        email: string,
        role: "superadmin" | "admin" | "support" | "user"
    }
    /**
     * Usually contains information about the provider being used
     * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
     */

    interface Account { }
    /** The OAuth profile returned from your provider */
    interface Profile { }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        id: string,
        username: string,
        email: string,
        role: "superadmin" | "admin" | "support" | "user"
    }
}