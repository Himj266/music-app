export interface Artist {
  id: number;
  createdAt: number;
  updateAt: number;
  songs: Song[];
  name: string;
}

export interface Song {
  id: number;
  createdAt: number;
  updateAt: number;
  name: string;
  artist: Artist;
  artistId: number;
  duration: number;
  url: string;
  playlists: Playlist[];
}

export interface Playlist {
  id: number;
  createdAt: number;
  updateAt: number;
  name: string;
  songs: Song[];
  user: User;
  userId: number;
}

export interface User {
  id: number;
  createdAt: number;
  updatedAt: number;
  email: string;
  password: string;
  playlists: Playlist[];
}
