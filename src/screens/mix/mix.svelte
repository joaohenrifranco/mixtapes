<script lang="typescript">
  import { FEATURES } from "../../config";
  import { Actions } from "../../presenter/actions";
  import Stats from "./stats.svelte";
  import { trackPool, trackPoolLoading } from "../../presenter/store";

  Actions.fetchTrackPool();
</script>

<style>
</style>

<Stats
  totalTrackCount={$trackPool.length}
  chosenTrackCount={0}
  isLoading={$trackPoolLoading} />

{#each Object.keys(FEATURES) as feature}
  <label>{feature}
    <input
      type="range"
      min="1"
      max="100"
      value="50"
      class="slider"
      id={feature} />
  </label>
{/each}
