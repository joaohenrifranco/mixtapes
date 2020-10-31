<script>
  import { parseCurrentURIFragment } from "../infrastructure/uri-utils";
  import SpotifyGateway from "../infrastructure/spotify-gateway";

  const spotifyAuthResponse = parseCurrentURIFragment();
  const isAuthorized = spotifyAuthResponse && !spotifyAuthResponse.error;

  SpotifyGateway.initClient(spotifyAuthResponse.access_token);
  const promise = SpotifyGateway.getUserSavedTracks();

  console.log(spotifyAuthResponse);
</script>

<style>
</style>

{#if isAuthorized}Authorized{/if}

{#await promise}
  <p>...waiting</p>
{:then data}
  <p>Liked: {JSON.stringify(data)}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

{#if !isAuthorized}Authorization failed Error: {spotifyAuthResponse.error}{/if}
