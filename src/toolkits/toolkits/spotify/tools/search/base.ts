import { z } from "zod";
import { createBaseTool } from "@/toolkits/create-tool";

export const searchTracksTool = createBaseTool({
  description:
    "Search for tracks on Spotify. Returns a list of tracks matching the search query with essential information like name, artist, album, and duration.",
  inputSchema: z.object({
    q: z
      .string()
      .describe(
        "Search query for tracks. Examples: 'artist:Taylor Swift', 'track:Bohemian Rhapsody', 'year:2023', 'genre:pop', 'isrc:USRC12345678'",
      ),
    type: z.literal("track").describe("Search type (must be 'track')"),
    limit: z.number().describe("Number of results (max 50), default to 20"),
    offset: z.number().describe("Offset for pagination"),
  }),
  outputSchema: z.object({
    tracks: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        artists: z.array(z.object({ id: z.string(), name: z.string() })),
        album: z.object({
          id: z.string(),
          name: z.string(),
          images: z.array(z.object({ url: z.string(), width: z.number(), height: z.number() })),
        }),
        duration_ms: z.number(),
        popularity: z.number(),
        external_urls: z.object({ spotify: z.string() }),
      }),
    ),
  }),
});

export const searchArtistsTool = createBaseTool({
  description:
    "Search for artists on Spotify. Returns a list of artists matching the search query with essential information like name, genres, and popularity.",
  inputSchema: z.object({
    q: z
      .string()
      .describe(
        "Search query for artists. Examples: 'artist:Queen', 'genre:rock', 'tag:new', 'year:2020-2023'",
      ),
    type: z.literal("artist").describe("Search type (must be 'artist')"),
    limit: z.number().describe("Number of results (max 50), default to 20"),
    offset: z.number().describe("Offset for pagination"),
  }),
  outputSchema: z.object({
    artists: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        genres: z.array(z.string()),
        popularity: z.number(),
        images: z.array(z.object({ url: z.string(), width: z.number(), height: z.number() })),
        external_urls: z.object({ spotify: z.string() }),
        followers: z.object({ total: z.number() }),
      }),
    ),
  }),
});

export const searchAlbumsTool = createBaseTool({
  description:
    "Search for albums on Spotify. Returns a list of albums matching the search query with essential information like name, artist, release date, and tracks.",
  inputSchema: z.object({
    q: z
      .string()
      .describe(
        "Search query for albums. Examples: 'album:Thriller', 'artist:Michael Jackson', 'year:1982', 'label:Epic'",
      ),
    type: z.literal("album").describe("Search type (must be 'album')"),
    limit: z.number().describe("Number of results (max 50), default to 20"),
    offset: z.number().describe("Offset for pagination"),
  }),
  outputSchema: z.object({
    albums: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        artists: z.array(z.object({ id: z.string(), name: z.string() })),
        release_date: z.string(),
        total_tracks: z.number(),
        images: z.array(z.object({ url: z.string(), width: z.number(), height: z.number() })),
        external_urls: z.object({ spotify: z.string() }),
        album_type: z.string(),
      }),
    ),
  }),
});

export const searchPlaylistsTool = createBaseTool({
  description:
    "Search for playlists on Spotify. Returns a list of playlists matching the search query with essential information like name, description, and owner.",
  inputSchema: z.object({
    q: z
      .string()
      .describe(
        "Search query for playlists. Examples: 'workout', 'chill', 'party', 'user:spotify', 'playlist:Top Hits'",
      ),
    type: z.literal("playlist").describe("Search type (must be 'playlist')"),
    limit: z.number().describe("Number of results (max 50), default to 20"),
    offset: z.number().describe("Offset for pagination"),
  }),
  outputSchema: z.object({
    playlists: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string().nullable(),
        owner: z.object({ id: z.string(), display_name: z.string() }),
        images: z.array(z.object({ url: z.string(), width: z.number(), height: z.number() })),
        external_urls: z.object({ spotify: z.string() }),
        tracks: z.object({ total: z.number() }),
        public: z.boolean(),
      }),
    ),
  }),
}); 