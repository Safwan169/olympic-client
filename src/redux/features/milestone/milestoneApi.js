import { baseApi } from "../../api/baseApi.jsx";

export const milestoneApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMilestones: builder.query({
      query: () => ({
        method: "GET",
        url: "/milestone",
      }),
      providesTags: ["milestones"],
    }),
    getMilestoneById: builder.query({
      query: (id) => {
        console.log("milestone api", id);
        return {
          method: "GET",
          url: `/milestone/${id}`,
        };
      },
      providesTags: ["milestones"],
    }),
    getMilestonesByProjectId: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/milestone/project/${id}`,
      }),
      providesTags: ["milestones"],
    }),
    createMilestone: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/milestone`,
        body: data,
      }),
      invalidatesTags: ["milestones"],
    }),
    deleteMilestoneById: builder.mutation({
      query: (milestoneId) => ({
        method: "DELETE",
        url: `/milestone/${milestoneId}`,
      }),
      invalidatesTags: ["milestones"],
    }),
    updateMilestoneById: builder.mutation({
      query: ({ id, data }) => {
        console.log("updating milestone", id, data);
        return {
          method: "PUT",
          url: `/milestone/${id}`,
          body: data,
        };
      },
      invalidatesTags: ["milestones"],
    }),
    completeMilestone: builder.mutation({
      query: (id) => ({
        method: "PATCH",
        url: `/milestone/${id}/complete`,
      }),
      invalidatesTags: ["milestones"],
    }),
  }),
});

export const {
  useGetMilestonesQuery,
  useGetMilestoneByIdQuery,
  useGetMilestonesByProjectIdQuery,
  useCreateMilestoneMutation,
  useDeleteMilestoneByIdMutation,
  useUpdateMilestoneByIdMutation,
  useCompleteMilestoneMutation,
} = milestoneApi;