import { type Actions } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { colorSchema, nameSchema } from '$lib/schema';

export const load = (async () => {
  const nameForm = await superValidate(nameSchema);
  const colorForm = await superValidate(colorSchema);
  return { colorForm, nameForm };
});

export const actions: Actions = {
  postName: async ({ request, locals, params }) => {

		const nameForm = await superValidate(request, nameSchema);
		if (!nameForm.valid) return fail(400, { nameForm });
    return message(nameForm, 'message123');
    // return {form}
  },
  postColor: async ({ request, locals, params }) => {
		const colorForm = await superValidate(request, colorSchema);
		if (!colorForm.valid) return fail(400, { colorForm });
    return message(colorForm, 'message123');
    // return {form}
  }
}
