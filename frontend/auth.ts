import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		Auth0Provider({
			clientId: process.env.AUTH0_CLIENT_ID as string,
			clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
		}),
	],
});
