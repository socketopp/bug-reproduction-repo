import { GH_ID, GH_SECRET, AUTH_SECRET } from '$env/static/private';
import GitHub from '@auth/sveltekit/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import { building } from '$app/environment';
import { sequence } from '@sveltejs/kit/hooks';

export const authorization: Handle = async ({ event, resolve }) => {
  const session = await event.locals.getSession();
  event.locals.session = session;
  console.log('session', session);
	const response = await resolve(event);
	return response;
};

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// export const authProviders: Handle = SvelteKitAuth(async (event) => {
// 	const authOptions = {
// 		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// 		// @ts-ignore
// 		providers: [
// 			GitHub({
// 				clientId: GH_ID,
// 				clientSecret: GH_SECRET})],

// 		trustHost: true,
// 		secret: AUTH_SECRET,
//     callbacks: {
// 			async session(event: { session: any; token: any; }) {
//         const { session, token } = event;
//         if (token) session.user.id = token.sub;
//         return session;
//       }
//     },

		
// 	};
// 	return authOptions;
// }) satisfies Handle;

export const authProviders = SvelteKitAuth(async (event) => {
  const authOptions = {
    providers: [GitHub({ clientId: GH_ID, clientSecret:GH_SECRET })],
    secret: AUTH_SECRET,
    trustHost: true,
    session: {
			strategy: 'jwt' as const
		},
		callbacks: {
			async session(event: { session: any; }) {
        console.log('session event', event)
        return event?.session
			}
		}
  }
  return authOptions
}) satisfies Handle;

export const handle = sequence(authProviders, authorization);
// export const handle = building ? sequence() : sequence(authProviders, authorization);