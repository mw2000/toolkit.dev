import React from "react";
import { HStack, VStack } from "@/components/ui/stack";
import { Badge } from "@/components/ui/badge";
import { Disc, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

export interface AlbumData {
  id: string;
  name: string;
  artists: Array<{ id: string; name: string }>;
  release_date: string;
  total_tracks: number;
  images: Array<{ url: string; width: number; height: number }>;
  external_urls: { spotify: string };
  album_type: string;
}

interface AlbumCardProps {
  album: AlbumData;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const formatReleaseDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const artistNames = album.artists.map(artist => artist.name).join(", ");
  const albumImage = album.images[0]?.url;

  return (
    <HStack className="group w-full cursor-pointer items-center border-b py-3 last:border-b-0 last:pb-0">
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md">
        {albumImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={albumImage}
            alt={`${album.name} album cover`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="bg-muted flex h-full w-full items-center justify-center rounded-md">
            <Disc className="text-muted-foreground size-5" />
          </div>
        )}
      </div>
      
      <VStack className="flex w-full items-start gap-1">
        <HStack className="items-center gap-2">
          <h3 className="group-hover:text-primary line-clamp-1 font-medium transition-colors">
            {album.name}
          </h3>
          <Link
            href={album.external_urls.spotify}
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
          <span className="text-muted-foreground">•</span>
          <p className="text-muted-foreground text-sm">
            {album.album_type}
          </p>
        </HStack>
        
        <HStack className="items-center gap-2">
          <Calendar className="text-muted-foreground size-3" />
          <p className="text-muted-foreground text-sm">
            {formatReleaseDate(album.release_date)}
          </p>
          <span className="text-muted-foreground">•</span>
          <Badge variant="outline" className="text-xs">
            {album.total_tracks} track{album.total_tracks !== 1 ? "s" : ""}
          </Badge>
        </HStack>
      </VStack>
    </HStack>
  );
}; 