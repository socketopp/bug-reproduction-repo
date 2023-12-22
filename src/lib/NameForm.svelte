<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import type { SuperValidated } from 'sveltekit-superforms';
  import type { NameSchemaType } from '$lib/schema';
  export let data: SuperValidated<NameSchemaType>;

  const { form, capture, restore, enhance } = superForm<NameSchemaType>(data, {
    taintedMessage: null,
  });

  export const snapshot = { capture, restore };
</script>

<form method="POST" action="?/postName" use:enhance>
  <label for="name">Name</label>
  <input type="text" name="name" bind:value={$form.name} />
  <div><button>Submit Name</button></div>
</form>
