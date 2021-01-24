import { get } from "svelte/store";

import * as Store from "./store";
import { SpotifyGateway } from "../spotify-gateway";

import { Logger } from "../logger";

async function fetchTrackPool() {
  Store.trackPoolLoading.set(true);
  const { accessToken } = get(Store.profile);

  if (!accessToken) {
    Logger.error("fetchTrackPool action: accessToken is not defined");
    return;
  }

  const gateway = new SpotifyGateway(accessToken);
  const data = await gateway.fetchUserSavedTracks();

  Store.trackPool.set(data);
  Store.trackPoolLoading.set(false);
}

function handleAuthDTO(authDTO: { error?: string; access_token?: string }) {
  const { error, access_token: accessToken } = authDTO;

  if (error) {
    Logger.error(`handleAuthDTO error: ${authDTO.error}`);
    return;
  }

  if (accessToken) {
    Logger.log(`handleAuthDTO: token set`)
    Store.profile.setAccessToken(accessToken);
  }
}

export const Actions = {
  fetchTrackPool,
  handleAuthDTO,
};
