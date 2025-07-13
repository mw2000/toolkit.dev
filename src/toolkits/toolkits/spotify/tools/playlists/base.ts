import { z } from "zod";
import { createBaseTool } from "@/toolkits/create-tool";

export const getPlaylistTool = createBaseTool({
  description:
    "Get detailed information about a specific playlist on Spotify, including name, description, owner, and track count.",
  inputSchema: z.object({
    playlist_id: z.string().describe("Spotify playlist ID"),
  }),
  outputSchema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    owner: z.object({ id: z.string(), display_name: z.string() }),
    images: z.array(z.object({ url: z.string(), width: z.number(), height: z.number() })),
    external_urls: z.object({ spotify: z.string() }),
    tracks: z.object({ total: z.number() }),
    public: z.boolean(),
    collaborative: z.boolean(),
    followers: z.object({ total: z.number() }),
  }),
});

export const getPlaylistTracksTool = createBaseTool({
  description:
    "Get all tracks from a specific playlist on Spotify. Returns detailed track information including name, artist, album, and duration.",
  inputSchema: z.object({
    playlist_id: z.string().describe("Spotify playlist ID"),
    limit: z.number().describe("Number of tracks to return (max 100), default to 20"),
    offset: z.number().describe("Offset for pagination"),
  }),
  outputSchema: z.object({
    tracks: z.array(
      z.object({
        added_at: z.string(),
        track: z.object({
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
      }),
    ),
    total: z.number(),
  }),
}); 