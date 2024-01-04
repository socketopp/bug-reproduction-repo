// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Session } from '@auth/sveltekit/node_modules/@auth/core/types';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
      session: Session | undefined;
      user: User;
    }
		interface PageData {}
		// interface PageState {}
		interface Platform {}
	}
}

export {};
