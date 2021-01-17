import { get, writable } from "svelte/store";
import { SpotifyGateway } from "../infrastructure/spotify-gateway;
import type { AuthDto } from "../infrastructure/spotify-gateway/types";
import { isAuthDtoError } from "../infrastructure/spotify-gateway/types";

type User = {
  accessToken?: string;
  error?: string;
};

function createUser() {
  const { subscribe, set, update } = writable<User>({});

  const setToken = (spotifyDTO: AuthDto) => {
    if (isAuthDtoError(spotifyDTO)) {
      return set({
        error: spotifyDTO.error,
      });
    }
    return set({
      accessToken: spotifyDTO.access_token,
    });
  };

  return { subscribe, setToken, update };
}

export const listener = createUser();
