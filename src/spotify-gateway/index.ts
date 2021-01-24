import SpotifyClient from "spotify-web-api-js";

import { URIUtils } from "../uri-utils"

import {
  CLIENT_ID,
  REDIRECT_URI,
  SPOTIFY_AUTHORIZATION_ENDPOINT,
} from "../config"

class SpotifyGateway {
  client: SpotifyClient.SpotifyWebApiJs;

  constructor(token: string) {
    this.client = new SpotifyClient();
    this.client.setAccessToken(token);
  }

  static getAuthorizationURL(): string {
    const params = {
      client_id: CLIENT_ID,
      response_type: "token",
      redirect_uri: REDIRECT_URI,
      state: 123,
      scope: "user-library-read",
    };

    const queryParams = URIUtils.encodeQueryParams(params);

    return `${SPOTIFY_AUTHORIZATION_ENDPOINT}?${queryParams}`;
  }

  async fetchAllPages(
    request: () => Promise<SpotifyApi.UsersSavedTracksResponse>
  ) {
    const firstPage = await request();
    const pages = [firstPage];

    while (pages[pages.length - 1].next) {
      const currentPage = (await this.client.getGeneric(
        pages[pages.length - 1].next
      )) as SpotifyApi.UsersSavedTracksResponse;

      pages.push(currentPage);
    }

    return pages;
  }

  async fetchUserSavedTracks() {
    const pages = this.fetchAllPages(this.client.getMySavedTracks);
    const items = (await pages).reduce(
      (tracks, page) => [...tracks, ...page.items],
      []
    );
    return items.map((item) => item.track);
  }
}

export { SpotifyGateway };
