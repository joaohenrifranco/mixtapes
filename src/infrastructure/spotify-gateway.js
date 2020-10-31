import SpotifyClient from 'spotify-web-api-js';

class SpotifyGateway {
  constructor(token) {
    this.client = new SpotifyClient();
    this.client.setAccessToken(token);
  }

  async fetchAllPages(firstPage) {
    if (firstPage.next);
  }

  async fetchUserSavedTracks() {
    const firstPage = this.client.getMySavedTracks();
    this.fetchAllPages(firstPage);
  }
}

export default { 
  SpotifyGateway
};