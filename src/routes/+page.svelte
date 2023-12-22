<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  import ColorForm from '$lib/ColorForm.svelte';
  import NameForm from '$lib/NameForm.svelte';
</script>

<h1>Form</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation and leave the page</p>

<div>
  <ColorForm data={data.colorForm} />
  <NameForm data={data.nameForm} />
</div>
