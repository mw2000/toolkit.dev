import { z } from "zod";
import { createBaseTool } from "@/toolkits/create-tool";

export const getArtistTool = createBaseTool({
  description:
    "Get detailed information about a specific artist on Spotify, including name, genres, popularity, and follower count.",
  inputSchema: z.object({
    artist_id: z.string().describe("Spotify artist ID"),
  }),
  outputSchema: z.object({
    id: z.string(),
    name: z.string(),
    genres: z.array(z.string()),
    popularity: z.number(),
    images: z.array(z.object({ url: z.string(), width: z.number(), height: z.number() })),
    external_urls: z.object({ spotify: z.string() }),
    followers: z.object({ total: z.number() }),
  }),
});

export const getArtistTopTracksTool = createBaseTool({
  description:
    "Get the top tracks for a specific artist on Spotify. Returns the most popular tracks by that artist.",
  inputSchema: z.object({
    artist_id: z.string().describe("Spotify artist ID"),
    market: z.string().describe("ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB')"),
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

export const getArtistAlbumsTool = createBaseTool({
  description:
    "Get all albums for a specific artist on Spotify. Returns albums, singles, and compilations by the artist.",
  inputSchema: z.object({
    artist_id: z.string().describe("Spotify artist ID"),
    include_groups: z.string().describe("Comma-separated list of album types: album, single, compilation, appears_on"),
    limit: z.number().describe("Number of albums to return (max 50), default to 20"),
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