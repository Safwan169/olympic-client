import { baseApi } from "../../api/baseApi";

export const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanners: builder.query({
      query: () => ({
        method: "GET",
        url: "/banner",
      }),
      providesTags: ["banners"],
    }),
    getBannerById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/banner/${id}`,
      }),
      providesTags: ["banners"],
    }),
    createBanner: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/banner",
        body: data,
      }),
      invalidatesTags: ["banners"],
    }),
    updateBannerById: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/banner/${id}`,
        body: data,
      }),
      invalidatesTags: ["banners"],
    }),
    deleteBannerById: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/banner/${id}`,
      }),
      invalidatesTags: ["banners"],
    }),
  }),
});

export const {
  useGetBannersQuery,
  useGetBannerByIdQuery,
  useCreateBannerMutation,
  useUpdateBannerByIdMutation,
  useDeleteBannerByIdMutation,
} = bannerApi;
