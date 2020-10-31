import { get, writable } from 'svelte/store';
import SpotifyGateway from '../infrastructure/spotify-gateway';

function createTrackPool() {
  const { subscribe, set, update } = writable(0);
	
  const fetch = async () => {
    const currentUser = get(user);
    console.log(currentUser);
    const gateway = new SpotifyGateway(currentUser.accessToken);

    const data = await gateway.fetchUserSavedTracks();
    console.log(data);
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

  const setUserToken = (spotifyDTO) => {
    console.log(spotifyDTO);
    if (!spotifyDTO || spotifyDTO.error) {
      return set({
        error: spotifyDTO.error,
      });
    }
    return set({
      accessToken: spotifyDTO.access_token,
    });
  };

  return { subscribe, setUserToken, update };
}

export const trackPool = createTrackPool();
export const user = createUser();
