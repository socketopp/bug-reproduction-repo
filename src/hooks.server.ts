import { dev } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { SvelteKitAuth } from '@auth/sveltekit';

import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import type { HandleServerError } from '@sveltejs/kit';

import { D1Adapter, up } from '@auth/d1-adapter';

export const routing: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	return response;
};

export const authProviders: Handle = SvelteKitAuth(async ({ locals }) => {
	const authOptions = {
		adapter: D1Adapter(locals?.D1),
    providers: [],
  };
	return authOptions;
}) satisfies Handle;

export const handle: Handle = sequence(authProviders, routing);
