import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Music, Users, Lock, Unlock } from "lucide-react";
import Image from "next/image";

interface PlaylistCardProps {
  playlist: {
    id: string;
    name: string;
    description: string | null;
    owner: { id: string; display_name: string };
    images: Array<{ url: string; width: number; height: number }>;
    external_urls: { spotify: string };
    tracks: { total: number };
    public: boolean;
    collaborative: boolean;
    followers?: { total: number };
  };
}

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  const playlistImage = playlist.images[0]?.url ?? '/placeholder-playlist.png';

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold truncate">
            {playlist.name}
          </CardTitle>
          <a
            href={playlist.external_urls.spotify}
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
            src={playlistImage}
            alt={playlist.name}
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              by {playlist.owner.display_name}
            </p>
            {playlist.description && (
              <p className="text-xs text-muted-foreground line-clamp-2">
                {playlist.description}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Music className="h-3 w-3" />
            <span>{playlist.tracks.total} tracks</span>
          </div>
          {playlist.followers && (
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3" />
              <span>{playlist.followers.total} followers</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">
            Playlist
          </Badge>
          <Badge variant="outline" className="text-xs">
            {playlist.public ? (
              <div className="flex items-center space-x-1">
                <Unlock className="h-3 w-3" />
                <span>Public</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <Lock className="h-3 w-3" />
                <span>Private</span>
              </div>
            )}
          </Badge>
          {playlist.collaborative && (
            <Badge variant="outline" className="text-xs">
              Collaborative
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 