<script>
  import { Link } from "svelte-routing";
  import { SpotifyGateway } from "../infrastructure/spotify-gateway";
  import { user, trackPool } from "../store/store";


  const loginURL = SpotifyGateway.getAuthorizationURL();

  const authDTO = SpotifyGateway.getAuthDtoFromWindow(window);

  if (authDTO.access_token) {
    user.setUserToken(authDTO);
    trackPool.fetch();
  }
</script>

{#if $user.error}
  <p>Authorization failed Error: {$user.error}</p>
{/if}

{#if $user.accessToken}
  <Link to="/features">Continuar...</Link>
{:else}<a href={loginURL}>Login</a>{/if}

