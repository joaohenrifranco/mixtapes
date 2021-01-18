import { trackPool } from './store/track-poolck-pool';
import { user } from './store/profilere/user';


export function fetchTrackPool() {
  const currentUser = user;
  const gateway = new SpotifyGateway(currentUser.accessToken);
  const data = await gateway.fetchUserSavedTracks();
}