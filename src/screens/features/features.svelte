<script>
  import { navigate } from "svelte-routing";
  import { FEATURES } from "../../features";
  import { user } from "../../store/store";
  import TrackPool from "../generic/track-pool.svelte"

  if (!$user.accessToken) {
    navigate("/", { replace: true });
  }

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
      id={feature} /></label>

{/each}