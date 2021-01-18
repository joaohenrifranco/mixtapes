import { writable } from "svelte/store";

import { SpotifyGateway } from "../../model/infrastructure/spotify-gatewayeway";
import { profile } from "./profile";

type Track = {};

function createTrackPool() {
  const { subscribe, set, update } = writable<Track[]>([]);

  return {
    subscribe,
    set,
    update,
  };
}

export const trackPool = createTrackPool();
