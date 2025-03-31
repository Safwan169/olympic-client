import { baseApi } from "../../api/baseApi";

export const activityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActivities: builder.query({
      query: () => ({
        method: "GET",
        url: "/activity",
      }),
      providesTags: ["activities"],
    }),
    getActivityById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/activity/${id}`,
      }),
      providesTags: ["activities"],
    }),
    createActivity: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/activity",
        body: data,
      }),
      invalidatesTags: ["activities"],
    }),
    updateActivityById: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/activity/${id}`,
        body: data,
      }),
      invalidatesTags: ["activities"],
    }),
    deleteActivityById: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/activity/${id}`,
      }),
      invalidatesTags: ["activities"],
    }),
  }),
});

export const {
  useGetActivitiesQuery,
  useGetActivityByIdQuery,
  useCreateActivityMutation,
  useUpdateActivityByIdMutation,
  useDeleteActivityByIdMutation,
} = activityApi;
