import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Users } from "lucide-react";
import Image from "next/image";

interface TrackCardProps {
  track: {
    id: string;
    name: string;
    artists: Array<{ id: string; name: string }>;
    album: {
      id: string;
      name: string;
      images: Array<{ url: string; width: number; height: number }>;
    };
    duration_ms: number;
    popularity: number;
    external_urls: { spotify: string };
  };
}

export function TrackCard({ track }: TrackCardProps) {
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const albumImage = track.album.images[0]?.url ?? '/placeholder-album.png';

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold truncate">
            {track.name}
          </CardTitle>
          <a
            href={track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2">
          <Image
            src={albumImage}
            alt={track.album.name}
            className="w-12 h-12 rounded-md object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              {track.artists.map(artist => artist.name).join(', ')}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {track.album.name}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{formatDuration(track.duration_ms)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span>{track.popularity}%</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">
            Track
          </Badge>
          <Badge variant="outline" className="text-xs">
            {track.artists.length > 1 ? 'Multiple Artists' : 'Single Artist'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
} 