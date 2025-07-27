const spotifyApiCall = async (accessToken: string, endpoint: string, params?: Record<string, string>) => {
  const url = new URL(`https://api.spotify.com/v1${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  console.log('Spotify API call:', { endpoint, params, url: url.toString() });

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error');
    console.error('Spotify API error:', { status: response.status, statusText: response.statusText, errorText });
    throw new Error(`Spotify API error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.json();
};

export const spotifySearchTracksToolConfigServer = (accessToken: string) => ({
  callback: async (args: Record<string, unknown>) => {
    try {
      const { q, type, limit, offset } = args as { q: string; type: "track"; limit: number; offset: number };
      console.log('Spotify search tracks:', { q, type, limit, offset });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await spotifyApiCall(accessToken, '/search', {
        q,
        type,
        limit: limit.toString(),
        offset: offset.toString(),
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      return { tracks: (result).tracks?.items ?? [] };
    } catch (error) {
      console.error('Spotify search tracks error:', error);
      return { tracks: [] };
    }
  },
});

export const spotifySearchArtistsToolConfigServer = (accessToken: string) => ({
  callback: async (args: Record<string, unknown>) => {
    try {
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
    } catch (error) {
      console.error('Spotify search artists error:', error);
      return { artists: [] };
    }
  },
});

export const spotifySearchAlbumsToolConfigServer = (accessToken: string) => ({
  callback: async (args: Record<string, unknown>) => {
    try {
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
    } catch (error) {
      console.error('Spotify search albums error:', error);
      return { albums: [] };
    }
  },
});

export const spotifySearchPlaylistsToolConfigServer = (accessToken: string) => ({
  callback: async (args: Record<string, unknown>) => {
    try {
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
    } catch (error) {
      console.error('Spotify search playlists error:', error);
      return { playlists: [] };
    }
  },
});

export const spotifyGetPlaylistToolConfigServer = (accessToken: string) => ({
  callback: async (args: Record<string, unknown>) => {
    const { playlist_id } = args as { playlist_id: string };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, `/playlists/${playlist_id}`);
  },
});

export const spotifyGetPlaylistTracksToolConfigServer = (accessToken: string) => ({
  callback: async (args: Record<string, unknown>) => {
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
  callback: async (args: Record<string, unknown>) => {
    const { artist_id } = args as { artist_id: string };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, `/artists/${artist_id}`);
  },
});

export const spotifyGetArtistTopTracksToolConfigServer = (accessToken: string) => ({
  callback: async (args: Record<string, unknown>) => {
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
  callback: async (args: Record<string, unknown>) => {
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
  callback: async (args: Record<string, unknown>) => {
    const { album_id } = args as { album_id: string };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, `/albums/${album_id}`);
  },
});

export const spotifyGetAlbumTracksToolConfigServer = (accessToken: string) => ({
  callback: async (args: Record<string, unknown>) => {
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
  callback: async (args: Record<string, unknown>) => {
    const { track_id } = args as { track_id: string };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, `/tracks/${track_id}`);
  },
});

export const spotifyGetUserProfileToolConfigServer = (accessToken: string) => ({
  callback: async (_args: Record<string, unknown>) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await spotifyApiCall(accessToken, '/me');
  },
});

export const spotifyGetUserPlaylistsToolConfigServer = (accessToken: string) => ({
  callback: async (args: Record<string, unknown>) => {
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