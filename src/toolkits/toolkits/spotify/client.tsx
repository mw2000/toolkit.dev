import { SpotifyTools } from "./tools";
import { createClientToolkit } from "@/toolkits/create-toolkit";
import { baseSpotifyToolkitConfig } from "./base";
import {
  spotifySearchTracksToolConfigClient,
  spotifySearchArtistsToolConfigClient,
  spotifySearchAlbumsToolConfigClient,
  spotifySearchPlaylistsToolConfigClient,
  spotifyGetPlaylistToolConfigClient,
  spotifyGetArtistToolConfigClient,
  spotifyGetAlbumToolConfigClient,
  spotifyGetTrackToolConfigClient,
  spotifyGetUserProfileToolConfigClient,
  spotifyGetUserPlaylistsToolConfigClient,
  spotifyGetArtistTopTracksToolConfigClient,
  spotifyGetArtistAlbumsToolConfigClient,
  spotifyGetAlbumTracksToolConfigClient,
  spotifyGetPlaylistTracksToolConfigClient,
} from "./tools/client";
import { SiSpotify } from "@icons-pack/react-simple-icons";
import { ToolkitGroups } from "@/toolkits/types";
import { SpotifyWrapper } from "./wrapper";

export const spotifyClientToolkit = createClientToolkit(
  baseSpotifyToolkitConfig,
  {
    name: "Spotify",
    description: "Search and explore music, artists, albums, and playlists",
    icon: SiSpotify,
    form: null,
    Wrapper: SpotifyWrapper,
    type: ToolkitGroups.DataSource,
  },
  {
    [SpotifyTools.SearchTracks]: spotifySearchTracksToolConfigClient,
    [SpotifyTools.SearchArtists]: spotifySearchArtistsToolConfigClient,
    [SpotifyTools.SearchAlbums]: spotifySearchAlbumsToolConfigClient,
    [SpotifyTools.SearchPlaylists]: spotifySearchPlaylistsToolConfigClient,
    [SpotifyTools.GetPlaylist]: spotifyGetPlaylistToolConfigClient,
    [SpotifyTools.GetArtist]: spotifyGetArtistToolConfigClient,
    [SpotifyTools.GetAlbum]: spotifyGetAlbumToolConfigClient,
    [SpotifyTools.GetTrack]: spotifyGetTrackToolConfigClient,
    [SpotifyTools.GetUserProfile]: spotifyGetUserProfileToolConfigClient,
    [SpotifyTools.GetUserPlaylists]: spotifyGetUserPlaylistsToolConfigClient,
    [SpotifyTools.GetArtistTopTracks]: spotifyGetArtistTopTracksToolConfigClient,
    [SpotifyTools.GetArtistAlbums]: spotifyGetArtistAlbumsToolConfigClient,
    [SpotifyTools.GetAlbumTracks]: spotifyGetAlbumTracksToolConfigClient,
    [SpotifyTools.GetPlaylistTracks]: spotifyGetPlaylistTracksToolConfigClient,
  },
); 