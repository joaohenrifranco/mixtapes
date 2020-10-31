import { get, writable } from 'svelte/store';
import SpotifyGateway from '../infrastructure/spotify-gateway';

function createTrackPool() {
  const { subscribe, set, update } = writable(0);
	
  const fetch = () => {
    const user = get(userStore);
    const gateway = new SpotifyGateway(user.token);

    const data = gateway.fetchUserSavedTracks();
    set(data);
  };

  return {
    subscribe,
    fetch,
    update,
  };
}

function createUser() {
  const { subscribe, set, update } = writable(0);

  return { subscribe, set, update };
}

export const trackPoolStore = createTrackPool();
export const userStore = createUser();
