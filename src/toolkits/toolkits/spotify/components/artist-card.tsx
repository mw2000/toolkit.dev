import React from "react";
import { HStack, VStack } from "@/components/ui/stack";
import { Badge } from "@/components/ui/badge";
import { User, ExternalLink, Users } from "lucide-react";
import Link from "next/link";

export interface ArtistData {
  id: string;
  name: string;
  genres: string[];
  popularity: number;
  images: Array<{ url: string; width: number; height: number }>;
  external_urls: { spotify: string };
  followers: { total: number };
}

interface ArtistCardProps {
  artist: ArtistData;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  if (!artist) {
    return null;
  }

  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const artistImage = artist.images?.[0]?.url;

  return (
    <HStack className="group w-full cursor-pointer items-center border-b py-3 last:border-b-0 last:pb-0">
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
        {artistImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={artistImage}
            alt={`${artist.name} profile`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="bg-muted flex h-full w-full items-center justify-center rounded-full">
            <User className="text-muted-foreground size-5" />
          </div>
        )}
      </div>
      
      <VStack className="flex w-full items-start gap-1">
        <HStack className="items-center gap-2">
          <h3 className="group-hover:text-primary line-clamp-1 font-medium transition-colors">
            {artist.name}
          </h3>
          <Link
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary opacity-0 transition-opacity group-hover:opacity-100"
          >
            <ExternalLink className="size-3" />
          </Link>
        </HStack>
        
        <HStack className="items-center gap-2">
          <Users className="text-muted-foreground size-3" />
          <p className="text-muted-foreground text-sm">
            {formatFollowers(artist.followers.total)} followers
          </p>
          {artist.popularity > 0 && (
            <>
              <span className="text-muted-foreground">•</span>
              <Badge variant="secondary" className="text-xs">
                {artist.popularity}% popular
              </Badge>
            </>
          )}
        </HStack>
        
        {artist.genres.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {artist.genres.slice(0, 3).map((genre, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {genre}
              </Badge>
            ))}
            {artist.genres.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{artist.genres.length - 3} more
              </Badge>
            )}
          </div>
        )}
      </VStack>
    </HStack>
  );
}; 