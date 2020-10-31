<script>
  import SpotifyGateway from "../infrastructure/spotify-gateway";
  const loginUrl = SpotifyGateway.getAuthorizationUrl();
</script>

<style>
  a {
  }
</style>

<a href={loginUrl}>Login</a>
