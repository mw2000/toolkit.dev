import { z } from "zod";
import { createBaseTool } from "@/toolkits/create-tool";

export const getUserProfileTool = createBaseTool({
  description:
    "Get the current user's profile information from Spotify, including display name, email, and profile image.",
  inputSchema: z.object({}),
  outputSchema: z.object({
    id: z.string(),
    display_name: z.string(),
    email: z.string(),
    images: z.array(z.object({ url: z.string(), width: z.number(), height: z.number() })),
    external_urls: z.object({ spotify: z.string() }),
    followers: z.object({ total: z.number() }),
    country: z.string(),
    product: z.string(),
  }),
});

export const getUserPlaylistsTool = createBaseTool({
  description:
    "Get all playlists created by the current user on Spotify. Returns playlists with name, description, and track count.",
  inputSchema: z.object({
    limit: z.number().describe("Number of playlists to return (max 50), default to 20"),
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
        collaborative: z.boolean(),
      }),
    ),
    total: z.number(),
  }),
}); 