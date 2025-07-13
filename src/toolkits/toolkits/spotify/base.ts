import type { ToolkitConfig } from "@/toolkits/types";
import { z } from "zod";
import { SpotifyTools } from "./tools/index";
import {
  searchTracksTool,
  searchArtistsTool,
  searchAlbumsTool,
  searchPlaylistsTool,
  getPlaylistTool,
  getArtistTool,
  getAlbumTool,
  getTrackTool,
  getUserProfileTool,
  getUserPlaylistsTool,
  getArtistTopTracksTool,
  getArtistAlbumsTool,
  getAlbumTracksTool,
  getPlaylistTracksTool,
} from "./tools/index";

export const spotifyParameters = z.object({});

export const baseSpotifyToolkitConfig: ToolkitConfig<
  SpotifyTools,
  typeof spotifyParameters.shape
> = {
  tools: {
    [SpotifyTools.SearchTracks]: searchTracksTool,
    [SpotifyTools.SearchArtists]: searchArtistsTool,
    [SpotifyTools.SearchAlbums]: searchAlbumsTool,
    [SpotifyTools.SearchPlaylists]: searchPlaylistsTool,
    [SpotifyTools.GetPlaylist]: getPlaylistTool,
    [SpotifyTools.GetArtist]: getArtistTool,
    [SpotifyTools.GetAlbum]: getAlbumTool,
    [SpotifyTools.GetTrack]: getTrackTool,
    [SpotifyTools.GetUserProfile]: getUserProfileTool,
    [SpotifyTools.GetUserPlaylists]: getUserPlaylistsTool,
    [SpotifyTools.GetArtistTopTracks]: getArtistTopTracksTool,
    [SpotifyTools.GetArtistAlbums]: getArtistAlbumsTool,
    [SpotifyTools.GetAlbumTracks]: getAlbumTracksTool,
    [SpotifyTools.GetPlaylistTracks]: getPlaylistTracksTool,
  },
  parameters: spotifyParameters,
}; 