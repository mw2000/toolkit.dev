import React from "react";
import { HStack, VStack } from "@/components/ui/stack";
import { Badge } from "@/components/ui/badge";
import { Music, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface TrackData {
  id: string;
  name: string;
  artists: Array<{ id: string; name: string }>;
  album?: {
    id: string;
    name: string;
    images: Array<{ url: string; width: number; height: number }>;
  };
  duration_ms: number;
  popularity?: number;
  external_urls: { spotify: string };
  track_number?: number;
  disc_number?: number;
}

interface TrackCardProps {
  track: TrackData;
}

export const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  if (!track) {
    return null;
  }

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const artistNames = track.artists?.map(artist => artist.name).join(", ") ?? "Unknown Artist";
  const albumImage = track.album?.images?.[0]?.url;

  return (
    <HStack className="group w-full cursor-pointer items-center border-b py-3 last:border-b-0 last:pb-0">
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md">
        {albumImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={albumImage}
            alt={`${track.album?.name ?? "Album"} album cover`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="bg-muted flex h-full w-full items-center justify-center rounded-md">
            <Music className="text-muted-foreground size-5" />
          </div>
        )}
      </div>
      
      <VStack className="flex w-full items-start gap-1">
        <HStack className="items-center gap-2">
          <h3 className="group-hover:text-primary line-clamp-1 font-medium transition-colors">
            {track.name}
          </h3>
          <Link
            href={track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary opacity-0 transition-opacity group-hover:opacity-100"
          >
            <ExternalLink className="size-3" />
          </Link>
        </HStack>
        
        <HStack className="items-center gap-2">
          <p className="text-muted-foreground text-sm">
            {artistNames}
          </p>
          {track.album && (
            <>
              <span className="text-muted-foreground">•</span>
              <p className="text-muted-foreground text-sm">
                {track.album.name}
              </p>
            </>
          )}
        </HStack>
        
        <HStack className="items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {formatDuration(track.duration_ms)}
          </Badge>
          {track.popularity && track.popularity > 0 && (
            <Badge variant="secondary" className="text-xs">
              {track.popularity}% popular
            </Badge>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
}; 