<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import type { SuperValidated } from 'sveltekit-superforms';
  import type { ColorSchemaType } from '$lib/schema';
  export let data: SuperValidated<ColorSchemaType>;

  const { form, capture, restore, enhance } = superForm<ColorSchemaType>(data, {
    taintedMessage: null,
  });

  export const snapshot = { capture, restore };
</script>

<form method="POST" action="?/postColor" use:enhance>
  <label for="color">Color</label>
  <input type="text" name="color" bind:value={$form.color} />
  <div><button>Submit Color</button></div>
</form>
