import { trackPool } from './../actions/store/track-pool';
import { get, writable } from "svelte/store";

type Store = {
  trackPool: any[]
};

function createTrackPool() {
  const { subscribe, set, update } = writable<Track[]>([]);

  const fetch = async () => {
    const currentUser = get(user);
    const gateway = new SpotifyGateway(currentUser.accessToken);
    const data = await gateway.fetchUserSavedTracks();
    set(data);
  };

  return {
    subscribe,
    fetch,
    update,
  };
}

export const trackPool = createTrackPool();
