import SpotifyClient from 'spotify-web-api-js';

import { CLIENT_ID, REDIRECT_URI, SPOTIFY_AUTHORIZATION_ENDPOINT } from '../consts';
import { encodeQueryParams } from './url-utils';

const client = new SpotifyClient();
const clientState = Math.random();

function getAuthorizationUrl() {
  const params = {
    client_id: CLIENT_ID,
    response_type: 'token',
    redirect_uri: REDIRECT_URI,
    state: clientState,
    scope: 'user-library-read',
  };

  const queryParams = encodeQueryParams(params);

  return `${SPOTIFY_AUTHORIZATION_ENDPOINT}?${queryParams}`;
}

function initClient(token) {
  client.setAccessToken(token);
}

async function fetchAllPages(firstPage) {
  if (firstPage.next) {

  }
}

async function fetchUserSavedTracks() {
  const firstPage = client.getMySavedTracks();
}


export default { 
  initClient,
  getAuthorizationUrl,
  getUserSavedTracks,
};