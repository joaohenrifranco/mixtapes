import SpotifyClient from 'spotify-web-api-js';

class SpotifyGateway {
  constructor(token) {
    this.client = new SpotifyClient();
    this.client.setAccessToken(token);
  }

  async fetchAllPages(request) {
    const firstPage = await request();
    const pages = [firstPage];

    while (pages[pages.length-1].next) {
      const currentPage = await this.client.getGeneric(
        pages[pages.length-1].next,
      );

      pages.push(currentPage);
    }

    return pages;
  }


  async fetchUserSavedTracks() {
    const pages = this.fetchAllPages(this.client.getMySavedTracks);    
    const items = (await pages).reduce((tracks, page) => [...tracks, ...page.items], []);
    return items.map(item => item.track);
  }
}

export default SpotifyGateway;