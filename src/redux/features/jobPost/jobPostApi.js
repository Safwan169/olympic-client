import { baseApi } from "../../api/baseApi.jsx";

export const jobPostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getJobPosts: builder.query({
      query: () => ({
        method: "GET",
        url: "/jobs",
      }),
      providesTags: ["jobPosts"],
    }),
    getJobPostById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/jobs/${id}`,
      }),
      providesTags: ["jobPosts"],
    }),
    createJobPost: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/jobs`,
        body: data,
      }),
      invalidatesTags: ["jobPosts"],
    }),
    updateJobPostById: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/jobs/${id}`,
        body: data,
      }),
      invalidatesTags: ["jobPosts"],
    }),
    deleteJobPostById: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/jobs/${id}`,
      }),
      invalidatesTags: ["jobPosts"],
    }),
  }),
});

export const {
  useGetJobPostsQuery,
  useGetJobPostByIdQuery,
  useCreateJobPostMutation,
  useUpdateJobPostByIdMutation,
  useDeleteJobPostByIdMutation,
} = jobPostApi;
