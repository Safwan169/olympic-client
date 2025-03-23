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
      query: (milestoneId) => {
        console.log("milestone api", milestoneId);
        return {
          method: "GET",
          url: `/milestone/${milestoneId}`,
        };
      },
      providesTags: ["milestones"],
    }),
    getMilestonesByProjectId: builder.query({
      query: (projectId) => ({
        method: "GET",
        url: `/milestone/project/${projectId}`,
      }),
      providesTags: ["milestones"],
    }),
    createMilestone: builder.mutation({
      query: (milestoneData) => ({
        method: "POST",
        url: `/milestone`,
        body: milestoneData,
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
      query: ({ id, updates }) => {
        console.log("updating milestone", id, updates);
        return {
          method: "PUT",
          url: `/milestone/${id}`,
          body: updates,
        };
      },
      invalidatesTags: ["milestones"],
    }),
    completeMilestone: builder.mutation({
      query: (milestoneId) => ({
        method: "PATCH",
        url: `/milestone/${milestoneId}/complete`,
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