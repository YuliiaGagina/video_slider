import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CLIENT_ID = "f6023e2eb5ad7771b6490aa7e67580f713863bb4";
const client_secret =
  "zid8foI1lYMbBFWQWCFRbR6a/edCl0k4SQ9yXrRnmIF5rum+DMA9VzXetgCqrt0OsIKXQNWykKhVZw1EETyIBYqMI1ymY5hsEg1PaK0aHlOPfsRlaC9eg8YzaIBPp+NB";
const VIMEO_ACCESS_TOKEN = "68e78a5cf48af57750a420d649c93a06";

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://player.vimeo.com/video/824804225",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetVideosQuery } = videoApi;
