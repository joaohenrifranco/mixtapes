import { CLIENT_ID, REDIRECT_URI, SPOTIFY_AUTHORIZATION_ENDPOINT } from '../consts';

export function encodeQueryParams(params) {
  const ret = [];
  for (let p in params)
    ret.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
  return ret.join('&');
}

export function parseCurrentURIFragment() {
  const fragment = window.location.hash.substr(1);

  return fragment.split('&').reduce((params, item) =>
  {
    const label = item.split('=')[0];
    const value = item.split('=')[1];
    params[label] = value;
    return params;
  }, {});
}

export const authState = Math.random();

export function getAuthorizationUrl() {
  const params = {
    client_id: CLIENT_ID,
    response_type: 'token',
    redirect_uri: REDIRECT_URI,
    state: authState,
    scope: 'user-library-read',
  };

  const queryParams = encodeQueryParams(params);

  return `${SPOTIFY_AUTHORIZATION_ENDPOINT}?${queryParams}`;
}