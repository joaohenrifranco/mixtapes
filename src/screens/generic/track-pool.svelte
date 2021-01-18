<script>
  import { user, trackPool } from '../../model/store/track-pool';
</script>

<style>
</style>

{#if !$trackPool || !$trackPool.length}
  <p>Carregando músicas...</p>
{:else}
  <p>Vieram {JSON.stringify($trackPool.length)} músicas!</p>
{/if}
