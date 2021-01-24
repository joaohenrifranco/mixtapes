import { writable } from "svelte/store";

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
export const trackPoolLoading = writable<boolean>(false);
