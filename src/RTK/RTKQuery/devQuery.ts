import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { devFace } from "@/types/devFace";

import isValidGitHubUserId from "../../utils/isValidGitHubUserId";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    getUser: builder.query<devFace, string>({
      query: (userId) => `users/${userId}`,
    }),
  }),
});

export const { useGetUserQuery } = githubApi;

export const useGetUserIfValidQuery = (userId: string) => {
  // Check if the input is a valid GitHub user ID
  const isValidUser = isValidGitHubUserId(userId);

  // Use RTK Query hook to fetch data only if the input is valid
  return useGetUserQuery(isValidUser ? userId : "", {
    skip: !isValidUser, // Skip the query if the input is not valid
  });
};
