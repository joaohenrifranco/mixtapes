<script>
  import { buildDTOFromWindowURIFragment } from "../infrastructure/uri-utils";
  import { user, trackPool } from "../store/store";

  const authDTO = buildDTOFromWindowURIFragment(window);
  user.setUserToken(authDTO);
  const promise = trackPool.fetch();
  const error = $user.error;
</script>

<style>
</style>

{#if !error}Thanks!{/if}

{#await promise}
  <p>...waiting</p>
{:then _}
  <p>Liked: {JSON.stringify($trackPool)}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

{#if error}Authorization failed Error: {error}{/if}
