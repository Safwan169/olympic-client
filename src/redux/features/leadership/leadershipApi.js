import { baseApi } from "../../api/baseApi";

export const leadershipApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLeaderships: builder.query({
      query: () => ({
        method: "GET",
        url: "/leadership",
      }),
      providesTags: ["leaderships"],
    }),
    getLeadershipById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/leadership/${id}`,
      }),
      providesTags: ["leaderships"],
    }),
    createLeadership: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/leadership",
        body: data,
      }),
      invalidatesTags: ["leaderships"],
    }),
    updateLeadershipById: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/leadership/${id}`,
        body: data,
      }),
      invalidatesTags: ["leaderships"],
    }),
    deleteLeadershipById: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/leadership/${id}`,
      }),
      invalidatesTags: ["leaderships"],
    }),
  }),
});

export const {
  useGetLeadershipsQuery,
  useGetLeadershipByIdQuery,
  useCreateLeadershipMutation,
  useUpdateLeadershipByIdMutation,
  useDeleteLeadershipByIdMutation,
} = leadershipApi;
