import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: { 
//       'X-RapidAPI-Key': '1beaee4af1msh347530e5422fc35p11ada2jsnbf03d4904b5e',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '1beaee4af1msh347530e5422fc35p11ada2jsnbf03d4904b5e');

            return headers;
        },
    }),
    endpoints: (builder) => ({  
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        //i want to know when we know we will need a new endpoint?
        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongDetails: builder.query({query: ({ songid }) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
        // why destructure sometimes and why did we pass it without destructuring here
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
        getSongsBySearch: builder.query({ query: (searchTerm) => `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
        // tutor says i think you can now see the power of creating a proper Redux Toolkit Structure
        // it's so easy to add new APi endpoints 
    }),
     });
    

    export const { 
        useGetTopChartsQuery,
        useGetSongsByGenreQuery,
        useGetSongDetailsQuery, //as we know redux toolkit will generate a new query for us automatically, this is automatic bro
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsBySearchQuery
    } = shazamCoreApi;