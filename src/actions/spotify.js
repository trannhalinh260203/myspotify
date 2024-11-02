// config.js
export const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const RESPONSE_TYPE = 'token';

export const SCOPES = [
    'user-library-read',
    'playlist-read-private',
    'user-read-private',
    'user-read-email',
    'playlist-read-collaborative',
    'user-top-read',
].join(' ');

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
