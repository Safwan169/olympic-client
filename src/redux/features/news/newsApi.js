import { baseApi } from "../../api/baseApi";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => ({
        method: "GET",
        url: "/news",
      }),
      providesTags: ["news"],
    }),
    getNewsById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/news/${id}`,
      }),
      providesTags: ["news"],
    }),
    createNews: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/news",
        body: data,
      }),
      invalidatesTags: ["news"],
    }),
    updateNewsById: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/news/${id}`,
        body: data,
      }),
      invalidatesTags: ["news"],
    }),
    deleteNewsById: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/news/${id}`,
      }),
      invalidatesTags: ["news"],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetNewsByIdQuery,
  useCreateNewsMutation,
  useUpdateNewsByIdMutation,
  useDeleteNewsByIdMutation,
} = newsApi;
