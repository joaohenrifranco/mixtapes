import { get, writable } from "svelte/store";
import { SpotifyGateway } from "../infrastructure/spotify-gateway/";
import type { AuthDto } from "../infrastructure/spotify-gateway/types";
import { isAuthDtoError } from "../infrastructure/spotify-gateway/types";

type User = {
  accessToken?: string;
  error?: string;
};

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

function createUser() {
  const { subscribe, set, update } = writable<User>({});

  const setUserToken = (spotifyDTO: AuthDto) => {
    if (isAuthDtoError(spotifyDTO)) {
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
