import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Music } from "lucide-react";
import Image from "next/image";

interface ArtistCardProps {
  artist: {
    id: string;
    name: string;
    genres: string[];
    popularity: number;
    images: Array<{ url: string; width: number; height: number }>;
    external_urls: { spotify: string };
    followers: { total: number };
  };
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const artistImage = artist.images[0]?.url ?? '/placeholder-artist.png';

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold truncate">
            {artist.name}
          </CardTitle>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-3">
          <Image
            src={artistImage}
            alt={artist.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{formatFollowers(artist.followers.total)} followers</span>
              </div>
              <div className="flex items-center space-x-1">
                <Music className="h-3 w-3" />
                <span>{artist.popularity}% popularity</span>
              </div>
            </div>
          </div>
        </div>
        
        {artist.genres.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {artist.genres.slice(0, 3).map((genre, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
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
        
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">
            Artist
          </Badge>
          <Badge variant="outline" className="text-xs">
            {artist.popularity >= 80 ? 'Very Popular' : 
             artist.popularity >= 60 ? 'Popular' : 
             artist.popularity >= 40 ? 'Moderate' : 'Emerging'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
} 