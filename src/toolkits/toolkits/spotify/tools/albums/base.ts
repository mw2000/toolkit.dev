import { z } from "zod";
import { createBaseTool } from "@/toolkits/create-tool";

export const getAlbumTool = createBaseTool({
  description:
    "Get detailed information about a specific album on Spotify, including name, artist, release date, and track count.",
  inputSchema: z.object({
    album_id: z.string().describe("Spotify album ID"),
  }),
  outputSchema: z.object({
    id: z.string(),
    name: z.string(),
    artists: z.array(z.object({ id: z.string(), name: z.string() })),
    release_date: z.string(),
    total_tracks: z.number(),
    images: z.array(z.object({ url: z.string(), width: z.number(), height: z.number() })),
    external_urls: z.object({ spotify: z.string() }),
    album_type: z.string(),
    popularity: z.number(),
    genres: z.array(z.string()),
  }),
});

export const getAlbumTracksTool = createBaseTool({
  description:
    "Get all tracks from a specific album on Spotify. Returns detailed track information including name, artist, and duration.",
  inputSchema: z.object({
    album_id: z.string().describe("Spotify album ID"),
    limit: z.number().describe("Number of tracks to return (max 50), default to 20"),
    offset: z.number().describe("Offset for pagination"),
  }),
  outputSchema: z.object({
    tracks: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        artists: z.array(z.object({ id: z.string(), name: z.string() })),
        duration_ms: z.number(),
        track_number: z.number(),
        disc_number: z.number(),
        external_urls: z.object({ spotify: z.string() }),
      }),
    ),
    total: z.number(),
  }),
}); 