<script>
  import { buildDTOFromWindowURIFragment } from "../infrastructure/uri-utils";
  import { user, trackPool } from "../store/store";
  import TrackPool from '../components/track-pool.svelte'

  const authDTO = buildDTOFromWindowURIFragment(window);
  user.setUserToken(authDTO);
  const promise = trackPool.fetch();
  const error = $user.error;
</script>

<style>
</style>

<TrackPool />
