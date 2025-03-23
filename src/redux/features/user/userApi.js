import { baseApi } from "../../api/baseApi.jsx";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        method: "GET",
        url: "/user",
      }),
      providesTags: ["users"],
    }),
    getUserById: builder.query({
      query: (userId) => {
        console.log("user api", userId); // Corrected logging
        return {
          method: "GET",
          url: `/user/${userId}`,
        };
      },
      providesTags: ["users"],
    }),

    getUserByEmail: builder.query({
      query: (email) => ({
        method: "GET",
        url: `/user/${email}`,
      }),
      providesTags: ["users"],
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        method: "POST",
        url: `/user`,
        body: userData,
      }),
      invalidatesTags: ["users"],
    }),
    deleteUserById: builder.mutation({
      query: (userId) => ({
        method: "DELETE",
        url: `/user/${userId}`,
      }),
      invalidatesTags: ["users"],
    }),
    updateUserById: builder.mutation({
      query: ({ id, role }) => {
        console.log("api hitting", id, role);
        return {
          method: "PUT",
          url: `/user/${id}`,
          body: role,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserByIdMutation,
  useCreateUserMutation,
  useGetUserByEmailQuery,
  useDeleteUserByIdMutation,
} = userApi;
