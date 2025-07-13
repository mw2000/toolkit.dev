import { z } from "zod";
import { createBaseTool } from "@/toolkits/create-tool";

export const getTrackTool = createBaseTool({
  description:
    "Get detailed information about a specific track on Spotify, including name, artist, album, duration, and popularity.",
  inputSchema: z.object({
    track_id: z.string().describe("Spotify track ID"),
  }),
  outputSchema: z.object({
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
    track_number: z.number(),
    disc_number: z.number(),
    explicit: z.boolean(),
    is_playable: z.boolean(),
  }),
}); 