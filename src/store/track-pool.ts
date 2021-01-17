import { get, writable } from "svelte/store";

import { SpotifyGateway } from "../infrastructure/spotify-gateway";
import { user } from "./user";

type Track = {};

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
