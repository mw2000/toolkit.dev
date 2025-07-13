import { createServerToolkit } from "@/toolkits/create-toolkit";
import { baseSpotifyToolkitConfig } from "./base";
import {
  spotifySearchTracksToolConfigServer,
  spotifySearchArtistsToolConfigServer,
  spotifySearchAlbumsToolConfigServer,
  spotifySearchPlaylistsToolConfigServer,
  spotifyGetPlaylistToolConfigServer,
  spotifyGetArtistToolConfigServer,
  spotifyGetAlbumToolConfigServer,
  spotifyGetTrackToolConfigServer,
  spotifyGetUserProfileToolConfigServer,
  spotifyGetUserPlaylistsToolConfigServer,
  spotifyGetArtistTopTracksToolConfigServer,
  spotifyGetArtistAlbumsToolConfigServer,
  spotifyGetAlbumTracksToolConfigServer,
  spotifyGetPlaylistTracksToolConfigServer,
} from "./tools/server";
import { SpotifyTools } from "./tools";
import { api } from "@/trpc/server";

export const spotifyToolkitServer = createServerToolkit(
  baseSpotifyToolkitConfig,
  `You have access to the Spotify toolkit for comprehensive music discovery and analysis. This toolkit provides:

- **Search Functions**: Search for tracks, artists, albums, and playlists
- **Artist Analysis**: Get artist information, top tracks, and discography
- **Album Exploration**: Get album details and track listings
- **Playlist Management**: Access playlist information and track listings
- **User Profile**: Get user profile and personal playlists

**Tool Sequencing Strategies:**
1. **Music Discovery**: Start with search functions to find content, then use specific get functions for detailed information
2. **Artist Research**: Search for artists, then get their top tracks and albums for comprehensive analysis
3. **Album Analysis**: Search for albums, then get detailed track listings and artist information
4. **Playlist Curation**: Search for playlists, then explore their tracks and get detailed information
5. **User Experience**: Get user profile and playlists for personalized music recommendations

**Best Practices:**
- Use specific search terms and filters for better results
- Leverage Spotify's search syntax (artist:, album:, year:, genre:)
- When analyzing artists, start with search then get top tracks and albums
- For playlist analysis, get playlist details then explore individual tracks
- Use market codes (e.g., 'US', 'GB') for region-specific content`,
  async () => {
    const account = await api.accounts.getAccountByProvider("spotify");

    if (!account || !account.access_token) {
      throw new Error("No Spotify account found or access token is missing");
    }

    return {
      [SpotifyTools.SearchTracks]: spotifySearchTracksToolConfigServer(account.access_token),
      [SpotifyTools.SearchArtists]: spotifySearchArtistsToolConfigServer(account.access_token),
      [SpotifyTools.SearchAlbums]: spotifySearchAlbumsToolConfigServer(account.access_token),
      [SpotifyTools.SearchPlaylists]: spotifySearchPlaylistsToolConfigServer(account.access_token),
      [SpotifyTools.GetPlaylist]: spotifyGetPlaylistToolConfigServer(account.access_token),
      [SpotifyTools.GetArtist]: spotifyGetArtistToolConfigServer(account.access_token),
      [SpotifyTools.GetAlbum]: spotifyGetAlbumToolConfigServer(account.access_token),
      [SpotifyTools.GetTrack]: spotifyGetTrackToolConfigServer(account.access_token),
      [SpotifyTools.GetUserProfile]: spotifyGetUserProfileToolConfigServer(account.access_token),
      [SpotifyTools.GetUserPlaylists]: spotifyGetUserPlaylistsToolConfigServer(account.access_token),
      [SpotifyTools.GetArtistTopTracks]: spotifyGetArtistTopTracksToolConfigServer(account.access_token),
      [SpotifyTools.GetArtistAlbums]: spotifyGetArtistAlbumsToolConfigServer(account.access_token),
      [SpotifyTools.GetAlbumTracks]: spotifyGetAlbumTracksToolConfigServer(account.access_token),
      [SpotifyTools.GetPlaylistTracks]: spotifyGetPlaylistTracksToolConfigServer(account.access_token),
    };
  },
); 