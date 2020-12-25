<script>
  import { user, trackPool } from "../store/store";
</script>

<style>
</style>

{#if !$user.error}Thanks!{:else}Authorization failed Error: {$user.error}{/if}

{#if !$trackPool}
  <p>Carregando músicas...</p>
{:else}
  <p>Vieram {JSON.stringify($trackPool.length)} músicas!</p>
{/if}
