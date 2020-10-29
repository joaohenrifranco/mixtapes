import Spotify from 'spotify-web-api-js';

import { CLIENT_ID, REDIRECT_URI, SPOTIFY_AUTHORIZATION_ENDPOINT } from '../consts'
import { encodeQueryParams } from './utils'

class SpotifyGateway {
  clientToken = '';
  clientState = Math.random();

  getAuthorizationUrl() {
    const params = {
      client_id: CLIENT_ID,
      response_type: 'token',
      redirect_uri: REDIRECT_URI,
      state: this.clientState,
      scope: 'user-library-read',
    };

    const queryParams = encodeQueryParams(params);

    return `${SPOTIFY_AUTHORIZATION_ENDPOINT}?${queryParams}`;
  }

  setClientToken(clientToken) {
    this.clientToken = clientToken;
  }

}

const SpotifyGatewaySingleton = new SpotifyGateway();

export { SpotifyGatewaySingleton }