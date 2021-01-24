<script lang="typescript">
  import { FEATURES } from "../../config";
  import TrackPool from "../generic/track-pool.svelte";
</script>

<style>
</style>

<TrackPool />

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
