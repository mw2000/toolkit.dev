const spotifyApiCall = async (accessToken: string, endpoint: string, params?: Record<string, string>) => {
  const url = new URL(`https://api.spotify.com/v1${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.status} ${response.statusText}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.json();
};

export const spotifySearchTracksToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { q, type, limit, offset } = args as { q: string; type: "track"; limit: number; offset: number };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await spotifyApiCall(accessToken, '/search', {
      q,
      type,
      limit: limit.toString(),
      offset: offset.toString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    return { tracks: (result).tracks?.items ?? [] };
  },
});

export const spotifySearchArtistsToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { q, type, limit, offset } = args as { q: string; type: "artist"; limit: number; offset: number };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await spotifyApiCall(accessToken, '/search', {
      q,
      type,
      limit: limit.toString(),
      offset: offset.toString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    return { artists: (result).artists?.items ?? [] };
  },
});

export const spotifySearchAlbumsToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { q, type, limit, offset } = args as { q: string; type: "album"; limit: number; offset: number };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await spotifyApiCall(accessToken, '/search', {
      q,
      type,
      limit: limit.toString(),
      offset: offset.toString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    return { albums: (result).albums?.items ?? [] };
  },
});

export const spotifySearchPlaylistsToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { q, type, limit, offset } = args as { q: string; type: "playlist"; limit: number; offset: number };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await spotifyApiCall(accessToken, '/search', {
      q,
      type,
      limit: limit.toString(),
      offset: offset.toString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    return { playlists: (result).playlists?.items ?? [] };
  },
});

export const spotifyGetPlaylistToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { playlist_id } = args as { playlist_id: string };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, `/playlists/${playlist_id}`);
  },
});

export const spotifyGetPlaylistTracksToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { playlist_id, limit, offset } = args as { playlist_id: string; limit: number; offset: number };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await spotifyApiCall(accessToken, `/playlists/${playlist_id}/tracks`, {
      limit: limit.toString(),
      offset: offset.toString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    return { tracks: (result).items ?? [], total: (result).total ?? 0 };
  },
});

export const spotifyGetArtistToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { artist_id } = args as { artist_id: string };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, `/artists/${artist_id}`);
  },
});

export const spotifyGetArtistTopTracksToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { artist_id, market } = args as { artist_id: string; market: string };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await spotifyApiCall(accessToken, `/artists/${artist_id}/top-tracks`, {
      market,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    return { tracks: (result).tracks ?? [] };
  },
});

export const spotifyGetArtistAlbumsToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { artist_id, include_groups, limit, offset } = args as { artist_id: string; include_groups: string; limit: number; offset: number };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await spotifyApiCall(accessToken, `/artists/${artist_id}/albums`, {
      include_groups,
      limit: limit.toString(),
      offset: offset.toString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    return { albums: (result).items ?? [] };
  },
});

export const spotifyGetAlbumToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { album_id } = args as { album_id: string };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, `/albums/${album_id}`);
  },
});

export const spotifyGetAlbumTracksToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { album_id, limit, offset } = args as { album_id: string; limit: number; offset: number };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await spotifyApiCall(accessToken, `/albums/${album_id}/tracks`, {
      limit: limit.toString(),
      offset: offset.toString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    return { tracks: (result).items ?? [], total: (result).total ?? 0 };
  },
});

export const spotifyGetTrackToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { track_id } = args as { track_id: string };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, `/tracks/${track_id}`);
  },
});

export const spotifyGetUserProfileToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, '/me');
  },
});

export const spotifyGetUserPlaylistsToolConfigServer = (accessToken: string) => ({
  callback: async (args: { [x: string]: any }) => {
    const { limit, offset } = args as { limit: number; offset: number };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await spotifyApiCall(accessToken, '/me/playlists', {
      limit: limit.toString(),
      offset: offset.toString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    return { playlists: (result).items ?? [], total: (result).total ?? 0 };
  },
}); 