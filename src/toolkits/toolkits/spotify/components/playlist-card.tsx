import React from "react";
import { HStack, VStack } from "@/components/ui/stack";
import { Badge } from "@/components/ui/badge";
import { ListMusic, ExternalLink, User } from "lucide-react";
import Link from "next/link";

export interface PlaylistData {
  id: string;
  name: string;
  description: string | null;
  owner: {
    display_name: string;
    id: string;
  };
  tracks: {
    total: number;
  };
  images: Array<{ url: string; width: number; height: number }>;
  external_urls: { spotify: string };
  public: boolean;
}

interface PlaylistCardProps {
  playlist: PlaylistData;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const playlistImage = playlist.images[0]?.url;

  return (
    <HStack className="group w-full cursor-pointer items-center border-b py-3 last:border-b-0 last:pb-0">
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md">
        {playlistImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={playlistImage}
            alt={`${playlist.name} playlist cover`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="bg-muted flex h-full w-full items-center justify-center rounded-md">
            <ListMusic className="text-muted-foreground size-5" />
          </div>
        )}
      </div>
      
      <VStack className="flex w-full items-start gap-1">
        <HStack className="items-center gap-2">
          <h3 className="group-hover:text-primary line-clamp-1 font-medium transition-colors">
            {playlist.name}
          </h3>
          <Link
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary opacity-0 transition-opacity group-hover:opacity-100"
          >
            <ExternalLink className="size-3" />
          </Link>
        </HStack>
        
        {playlist.description && (
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {playlist.description}
          </p>
        )}
        
        <HStack className="items-center gap-2">
          <User className="text-muted-foreground size-3" />
          <p className="text-muted-foreground text-sm">
            {playlist.owner.display_name}
          </p>
          <span className="text-muted-foreground">•</span>
          <Badge variant="outline" className="text-xs">
            {playlist.tracks.total} track{playlist.tracks.total !== 1 ? "s" : ""}
          </Badge>
          <span className="text-muted-foreground">•</span>
          <Badge variant={playlist.public ? "secondary" : "outline"} className="text-xs">
            {playlist.public ? "Public" : "Private"}
          </Badge>
        </HStack>
      </VStack>
    </HStack>
  );
}; 