import { createClientTool } from "@/toolkits/create-tool";
import { searchTracksTool, searchArtistsTool, searchAlbumsTool, searchPlaylistsTool } from "./search/base";
import { getPlaylistTool, getPlaylistTracksTool } from "./playlists/base";
import { getArtistTool, getArtistTopTracksTool, getArtistAlbumsTool } from "./artists/base";
import { getAlbumTool, getAlbumTracksTool } from "./albums/base";
import { getTrackTool } from "./tracks/base";
import { getUserProfileTool, getUserPlaylistsTool } from "./user/base";

export const spotifySearchTracksToolConfigClient = createClientTool(searchTracksTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifySearchArtistsToolConfigClient = createClientTool(searchArtistsTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifySearchAlbumsToolConfigClient = createClientTool(searchAlbumsTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifySearchPlaylistsToolConfigClient = createClientTool(searchPlaylistsTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetPlaylistToolConfigClient = createClientTool(getPlaylistTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetPlaylistTracksToolConfigClient = createClientTool(getPlaylistTracksTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetArtistToolConfigClient = createClientTool(getArtistTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetArtistTopTracksToolConfigClient = createClientTool(getArtistTopTracksTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetArtistAlbumsToolConfigClient = createClientTool(getArtistAlbumsTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetAlbumToolConfigClient = createClientTool(getAlbumTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetAlbumTracksToolConfigClient = createClientTool(getAlbumTracksTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetTrackToolConfigClient = createClientTool(getTrackTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetUserProfileToolConfigClient = createClientTool(getUserProfileTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
});

export const spotifyGetUserPlaylistsToolConfigClient = createClientTool(getUserPlaylistsTool, {
  CallComponent: () => null,
  ResultComponent: () => null,
}); 