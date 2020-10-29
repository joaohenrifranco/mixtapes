<script>
  import { SpotifyGatewaySingleton } from "../infrastructure/spotify-gateway";
  const loginUrl = SpotifyGatewaySingleton.getAuthorizationUrl();
</script>

<style>
  a {
  }
</style>

<a href={loginUrl}>Login</a>
