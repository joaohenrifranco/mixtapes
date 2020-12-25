<script>
  import { SpotifyGateway } from "../infrastructure/spotify-gateway";
  const loginUrl = SpotifyGateway.getAuthorizationUrl();
</script>

<a href={loginUrl}>Login</a>
