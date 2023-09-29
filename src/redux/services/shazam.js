import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
      reducerPath:'shazamApi',
      baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', `${import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY}`);
          return headers;
        }
      }),
      endpoints: (builder) => ({
        getTopCharts:builder.query({query: () => '/charts/track'}),
        getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/songs/get-related-artist?id=${songid}` }),
        getArtistDetails: builder.query({ query: ({artistId}) => `/artists/get-details?id=${artistId}` }),
        getArtistTopSongs: builder.query({ query: ({artistId}) => `/artists/get-top-songs?id=${artistId}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}` }),
      }),
        });

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
  useGetSongsBySearchQuery,
} = shazamApi;