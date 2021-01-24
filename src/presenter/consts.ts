import { readable } from "svelte/store";
import { SpotifyGateway } from "../spotify-gateway";

export const spotifyAuthorizationURL = SpotifyGateway.getAuthorizationURL();