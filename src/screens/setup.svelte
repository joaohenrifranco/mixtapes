<script>
  import { parseCurrentURIFragment } from "../infrastructure/utils";

  const spotifyAuthResponse = parseCurrentURIFragment();

  const isAuthorized = spotifyAuthResponse && !spotifyAuthResponse.error;

  console.log(spotifyAuthResponse)
</script>


<style>

</style>

ASDASDSADS

{#if isAuthorized}SUCCESS!{/if}

{#if !isAuthorized}FAILED!{/if}
