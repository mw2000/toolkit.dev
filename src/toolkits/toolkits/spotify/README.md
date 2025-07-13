# Spotify Toolkit

A comprehensive toolkit for integrating Spotify Web API functionality into your application. This toolkit provides tools for searching music, accessing artist information, managing playlists, and more.

## Features

### Search Tools
- **Search Tracks**: Find tracks by artist, title, genre, year, and more
- **Search Artists**: Discover artists by name, genre, popularity
- **Search Albums**: Find albums by title, artist, release year
- **Search Playlists**: Discover playlists by name, description, owner

### Artist Tools
- **Get Artist**: Get detailed artist information including genres and popularity
- **Get Artist Top Tracks**: Get the most popular tracks by an artist
- **Get Artist Albums**: Get all albums, singles, and compilations by an artist

### Album Tools
- **Get Album**: Get detailed album information
- **Get Album Tracks**: Get all tracks from an album

### Playlist Tools
- **Get Playlist**: Get detailed playlist information
- **Get Playlist Tracks**: Get all tracks from a playlist

### Track Tools
- **Get Track**: Get detailed track information

### User Tools
- **Get User Profile**: Get current user's profile information
- **Get User Playlists**: Get all playlists created by the current user

## Setup

### 1. Create a Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Click "Create App"
3. Fill in the app details:
   - App name: Your app name
   - App description: Brief description
   - Website: Your app's website
   - Redirect URI: `http://localhost:3000/api/auth/callback/spotify` (for development)
4. Save the app

### 2. Configure Environment Variables

Add the following environment variables to your `.env.local` file:

```bash
AUTH_SPOTIFY_ID=your_spotify_client_id
AUTH_SPOTIFY_SECRET=your_spotify_client_secret
```

### 3. Configure Redirect URIs

In your Spotify app settings, add these redirect URIs:
- Development: `http://localhost:3000/api/auth/callback/spotify`
- Production: `https://yourdomain.com/api/auth/callback/spotify`

## Usage Examples

### Search for Tracks
```
Search for tracks by Taylor Swift released in 2023
```

### Get Artist Information
```
Get information about Queen and their top tracks
```

### Explore Playlists
```
Search for workout playlists and get the tracks from the first result
```

### User Profile
```
Get my profile and show my playlists
```

## API Scopes

The toolkit requests the following scopes:
- `user-read-private`: Read user's private information
- `user-read-email`: Read user's email address
- `playlist-read-private`: Read private playlists
- `playlist-read-collaborative`: Read collaborative playlists
- `user-library-read`: Read user's saved tracks and albums

## Search Syntax

Spotify supports advanced search syntax:

### Track Search
- `artist:Taylor Swift` - Search by artist
- `track:Bohemian Rhapsody` - Search by track name
- `year:2023` - Search by release year
- `genre:pop` - Search by genre
- `isrc:USRC12345678` - Search by ISRC

### Artist Search
- `artist:Queen` - Search by artist name
- `genre:rock` - Search by genre
- `tag:new` - Search for new artists
- `year:2020-2023` - Search by year range

### Album Search
- `album:Thriller` - Search by album name
- `artist:Michael Jackson` - Search by artist
- `year:1982` - Search by release year
- `label:Epic` - Search by record label

### Playlist Search
- `workout` - Search by playlist name
- `chill` - Search by mood/theme
- `user:spotify` - Search by playlist owner
- `playlist:Top Hits` - Search by playlist name

## Error Handling

The toolkit includes comprehensive error handling:
- Invalid access tokens
- API rate limiting
- Network errors
- Invalid search parameters

## Rate Limits

Spotify API has rate limits:
- 100 requests per second for authenticated requests
- 25 requests per second for unauthenticated requests

The toolkit handles rate limiting gracefully and will retry requests when possible.

## Contributing

To add new features to the Spotify toolkit:

1. Add new tool definitions in the appropriate `base.ts` file
2. Create client and server configurations
3. Update the main toolkit files
4. Add tests for new functionality
5. Update this README with new features

## License

This toolkit is part of the main project and follows the same license terms. 