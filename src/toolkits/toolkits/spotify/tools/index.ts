export enum SpotifyTools {
  SearchTracks = "search-tracks",
  SearchArtists = "search-artists",
  SearchAlbums = "search-albums",
  SearchPlaylists = "search-playlists",
  GetPlaylist = "get-playlist",
  GetArtist = "get-artist",
  GetAlbum = "get-album",
  GetTrack = "get-track",
  GetUserProfile = "get-user-profile",
  GetUserPlaylists = "get-user-playlists",
  GetArtistTopTracks = "get-artist-top-tracks",
  GetArtistAlbums = "get-artist-albums",
  GetAlbumTracks = "get-album-tracks",
  GetPlaylistTracks = "get-playlist-tracks",
}

export * from "./search/base";
export * from "./playlists/base";
export * from "./artists/base";
export * from "./albums/base";
export * from "./tracks/base";
export * from "./user/base"; 