import { baseApi } from "../../api/baseApi";

export const achievementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all achievements
    getAchievements: builder.query({
      query: () => ({
        method: "GET",
        url: "/achievements",
      }),
      providesTags: ["achievements"],
    }),

    // Get a single achievement by ID
    getAchievementById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/achievements/${id}`,
      }),
      providesTags: ["achievements"],
    }),

    // Create a new achievement (admin only)
    createAchievement: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/achievements",
        body: data,
      }),
      invalidatesTags: ["achievements"],
    }),

    // Update an existing achievement (admin only)
    updateAchievementById: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/achievements/${id}`,
        body: data,
      }),
      invalidatesTags: ["achievements"],
    }),

    // Delete an achievement (admin only)
    deleteAchievementById: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/achievements/${id}`,
      }),
      invalidatesTags: ["achievements"],
    }),
  }),
});

export const {
  useGetAchievementsQuery,
  useGetAchievementByIdQuery,
  useCreateAchievementMutation,
  useUpdateAchievementByIdMutation,
  useDeleteAchievementByIdMutation,
} = achievementApi;
