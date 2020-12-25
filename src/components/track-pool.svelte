<script>
  import { user, trackPool } from "../store/store";
</script>

<style>
</style>

{#if !$trackPool || !$trackPool.length}
  <p>Carregando músicas...</p>
{:else}
  <p>Vieram {JSON.stringify($trackPool.length)} músicas!</p>
{/if}
