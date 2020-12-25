<script>
  import { SpotifyGateway } from "../infrastructure/spotify-gateway";
  import { user, trackPool } from "../store/store";

  const loginURL = SpotifyGateway.getAuthorizationURL();

  const authDTO = SpotifyGateway.getAuthDtoFromWindow(window);

  console.log(authDTO);

  if (authDTO.access_token) {
    user.setUserToken(authDTO);
    trackPool.fetch();
  }
</script>

{#if $user.error}
  <p>Authorization failed Error: {$user.error}</p>
{/if}

{#if $user.accessToken}
  <a href={loginURL}>Continuar!</a>
{:else}
  <a href={loginURL}>Login</a>
{/if}

