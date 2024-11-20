import { apiSlice } from "./apiSlice";

const USERS_URL = 'api/users'; // Define the users API URL

export const usersAPiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Login mutation endpoint
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`, // Assuming login is a different endpoint
        method: 'POST',
        body: data, 
      }),
    }),

    // Register mutation endpoint (adjusted to match your route)
    register: builder.mutation({
      query: (data) => ({
        url: USERS_URL, // Registering through POST to /api/users
        method: 'POST',
        body: data,
      }),
    }),

    // Logout mutation endpoint
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`, // API endpoint for logout
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false, // Ensure that this doesn't overwrite other endpoints
});

// Export hooks to be used in components
export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = usersAPiSlice;
