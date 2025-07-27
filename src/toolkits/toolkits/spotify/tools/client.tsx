import { createClientTool } from "@/toolkits/create-tool";
import { searchTracksTool, searchArtistsTool, searchAlbumsTool, searchPlaylistsTool } from "./search/base";
import { getPlaylistTool, getPlaylistTracksTool } from "./playlists/base";
import { getArtistTool, getArtistTopTracksTool, getArtistAlbumsTool } from "./artists/base";
import { getAlbumTool, getAlbumTracksTool } from "./albums/base";
import { getTrackTool } from "./tracks/base";
import { getUserProfileTool, getUserPlaylistsTool } from "./user/base";
import { TrackCard, ArtistCard, AlbumCard, PlaylistCard } from "../components";
import { Search, Music, User, Disc, ListMusic } from "lucide-react";
import { HStack, VStack } from "@/components/ui/stack";

// Search Tracks
export const spotifySearchTracksToolConfigClient = createClientTool(searchTracksTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Search className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Search Tracks
        </span>
        <span className="text-sm">&quot;{args.q}&quot;</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result?.tracks?.length) {
      return <div className="text-muted-foreground">No tracks found</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">
          Track Search Results ({result.tracks.length})
        </h3>
        <div className="flex w-full flex-col">
          {result.tracks.map((track) => (
            <TrackCard key={track?.id ?? Math.random()} track={track} />
          ))}
        </div>
      </VStack>
    );
  },
});

// Search Artists
export const spotifySearchArtistsToolConfigClient = createClientTool(searchArtistsTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Search className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Search Artists
        </span>
        <span className="text-sm">&quot;{args.q}&quot;</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result?.artists?.length) {
      return <div className="text-muted-foreground">No artists found</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">
          Artist Search Results ({result.artists.length})
        </h3>
        <div className="flex w-full flex-col">
          {result.artists.map((artist) => (
            <ArtistCard key={artist?.id ?? Math.random()} artist={artist} />
          ))}
        </div>
      </VStack>
    );
  },
});

// Search Albums
export const spotifySearchAlbumsToolConfigClient = createClientTool(searchAlbumsTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Search className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Search Albums
        </span>
        <span className="text-sm">&quot;{args.q}&quot;</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result?.albums?.length) {
      return <div className="text-muted-foreground">No albums found</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">
          Album Search Results ({result.albums.length})
        </h3>
        <div className="flex w-full flex-col">
          {result.albums.map((album) => (
            <AlbumCard key={album?.id ?? Math.random()} album={album} />
          ))}
        </div>
      </VStack>
    );
  },
});

// Search Playlists
export const spotifySearchPlaylistsToolConfigClient = createClientTool(searchPlaylistsTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Search className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Search Playlists
        </span>
        <span className="text-sm">&quot;{args.q}&quot;</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result?.playlists?.length) {
      return <div className="text-muted-foreground">No playlists found</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">
          Playlist Search Results ({result.playlists.length})
        </h3>
        <div className="flex w-full flex-col">
          {result.playlists.map((playlist) => (
            <PlaylistCard key={playlist?.id ?? Math.random()} playlist={playlist} />
          ))}
        </div>
      </VStack>
    );
  },
});

// Get Playlist
export const spotifyGetPlaylistToolConfigClient = createClientTool(getPlaylistTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <ListMusic className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get Playlist
        </span>
        <span className="text-sm">{args.playlist_id}</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result) {
      return <div className="text-muted-foreground">No playlist found</div>;
    }
    return <PlaylistCard playlist={result} />;
  },
});

// Get Playlist Tracks
export const spotifyGetPlaylistTracksToolConfigClient = createClientTool(getPlaylistTracksTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Music className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get Playlist Tracks
        </span>
        <span className="text-sm">{args.playlist_id}</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result?.tracks?.length) {
      return <div className="text-muted-foreground">No tracks found in playlist</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">
          Playlist Tracks ({result.tracks.length})
        </h3>
        <div className="flex w-full flex-col">
          {result.tracks.map((item, index) => (
            <TrackCard key={item?.track?.id ?? index} track={item?.track} />
          ))}
        </div>
      </VStack>
    );
  },
});

// Get Artist
export const spotifyGetArtistToolConfigClient = createClientTool(getArtistTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <User className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get Artist
        </span>
        <span className="text-sm">{args.artist_id}</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result) {
      return <div className="text-muted-foreground">No artist found</div>;
    }
    return <ArtistCard artist={result} />;
  },
});

// Get Artist Top Tracks
export const spotifyGetArtistTopTracksToolConfigClient = createClientTool(getArtistTopTracksTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Music className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get Artist Top Tracks
        </span>
        <span className="text-sm">{args.artist_id}</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result?.tracks?.length) {
      return <div className="text-muted-foreground">No top tracks found</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">
          Top Tracks ({result.tracks.length})
        </h3>
        <div className="flex w-full flex-col">
          {result.tracks.map((track) => (
            <TrackCard key={track?.id ?? Math.random()} track={track} />
          ))}
        </div>
      </VStack>
    );
  },
});

// Get Artist Albums
export const spotifyGetArtistAlbumsToolConfigClient = createClientTool(getArtistAlbumsTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Disc className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get Artist Albums
        </span>
        <span className="text-sm">{args.artist_id}</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result?.albums?.length) {
      return <div className="text-muted-foreground">No albums found</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">
          Artist Albums ({result.albums.length})
        </h3>
        <div className="flex w-full flex-col">
          {result.albums.map((album) => (
            <AlbumCard key={album?.id ?? Math.random()} album={album} />
          ))}
        </div>
      </VStack>
    );
  },
});

// Get Album
export const spotifyGetAlbumToolConfigClient = createClientTool(getAlbumTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Disc className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get Album
        </span>
        <span className="text-sm">{args.album_id}</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result) {
      return <div className="text-muted-foreground">No album found</div>;
    }
    return <AlbumCard album={result} />;
  },
});

// Get Album Tracks
export const spotifyGetAlbumTracksToolConfigClient = createClientTool(getAlbumTracksTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Music className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get Album Tracks
        </span>
        <span className="text-sm">{args.album_id}</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result?.tracks?.length) {
      return <div className="text-muted-foreground">No tracks found in album</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">
          Album Tracks ({result.tracks.length})
        </h3>
        <div className="flex w-full flex-col">
          {result.tracks.map((track) => (
            <TrackCard key={track?.id ?? Math.random()} track={track} />
          ))}
        </div>
      </VStack>
    );
  },
});

// Get Track
export const spotifyGetTrackToolConfigClient = createClientTool(getTrackTool, {
  CallComponent: ({ args }) => (
    <HStack className="gap-2">
      <Music className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get Track
        </span>
        <span className="text-sm">{args.track_id}</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result) {
      return <div className="text-muted-foreground">No track found</div>;
    }
    return <TrackCard track={result} />;
  },
});

// Get User Profile
export const spotifyGetUserProfileToolConfigClient = createClientTool(getUserProfileTool, {
  CallComponent: () => (
    <HStack className="gap-2">
      <User className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get User Profile
        </span>
        <span className="text-sm">Current user</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result) {
      return <div className="text-muted-foreground">No user profile found</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">User Profile</h3>
        <div className="flex items-center gap-3">
          {result?.images?.[0]?.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={result.images[0].url}
              alt={result.display_name ?? "User"}
              className="h-12 w-12 rounded-full"
            />
          ) : (
            <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-full">
              <User className="text-muted-foreground size-6" />
            </div>
          )}
          <VStack className="items-start gap-1">
            <h4 className="font-medium">{result?.display_name ?? "Unknown User"}</h4>
            <p className="text-muted-foreground text-sm">{result?.email ?? "No email"}</p>
            <p className="text-muted-foreground text-sm">ID: {result?.id ?? "Unknown"}</p>
          </VStack>
        </div>
      </VStack>
    );
  },
});

// Get User Playlists
export const spotifyGetUserPlaylistsToolConfigClient = createClientTool(getUserPlaylistsTool, {
  CallComponent: () => (
    <HStack className="gap-2">
      <ListMusic className="text-muted-foreground size-4" />
      <VStack className="items-start gap-0">
        <span className="text-muted-foreground/80 text-xs font-medium">
          Get User Playlists
        </span>
        <span className="text-sm">Current user</span>
      </VStack>
    </HStack>
  ),
  ResultComponent: ({ result }) => {
    if (!result?.playlists?.length) {
      return <div className="text-muted-foreground">No playlists found</div>;
    }

    return (
      <VStack className="items-start gap-2">
        <h3 className="text-muted-foreground text-sm font-medium">
          User Playlists ({result.playlists.length})
        </h3>
        <div className="flex w-full flex-col">
          {result.playlists.map((playlist) => (
            <PlaylistCard key={playlist?.id ?? Math.random()} playlist={playlist} />
          ))}
        </div>
      </VStack>
    );
  },
}); 