<script lang="ts">
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';

  console.log('$page', $page?.data);
</script>

<h1>SvelteKit Auth Example</h1>
<p>
  {#if $page.data.session}
    {#if $page.data.session.user?.image}
      <span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.name ?? 'User'}</strong>
    </span>
    <button on:click={() => signOut()} class="button">Sign out</button>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <button on:click={() => signIn('github')}>Sign In with GitHub</button>
  {/if}
</p>

<!-- <script lang="ts">
  import { signIn, signOut } from '@auth/sveltekit/client';
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  export let data: PageData;

  console.log('data', data);
  console.log('$page', $page);

  function logout() {
    signOut();
  }

  function signInWithGithub() {
    signIn('github');
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={signInWithGithub}>sigin with github</button>
<button on:click={logout}>logout</button> -->
