<script>
  import { user, trackPool } from "../store/store";
  import TrackPool from "../components/track-pool.svelte";
  import { SpotifyGateway } from "../infrastructure/spotify-gateway";

  const authDTO = SpotifyGateway.getAuthDtoFromWindow(window);
  
  user.setUserToken(authDTO);
  trackPool.fetch();
</script>

<style>
</style>

<TrackPool />
