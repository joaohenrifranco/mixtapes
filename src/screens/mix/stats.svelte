<script lang="typescript">
  export let totalTrackCount: number;
  export let chosenTrackCount: number;
  export let isLoading: boolean;
</script>

<style>
</style>

{#if isLoading}
  <p>Ainda carregando suas músicas...</p>
{/if}

<p>Escolhendo {chosenTrackCount} de {totalTrackCount}</p>
