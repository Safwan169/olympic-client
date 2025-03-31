import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all products
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
      providesTags: ["products"],
    }),

    // Get a single product by ID
    getProductById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/product/${id}`,
      }),
      providesTags: ["products"],
    }),

    // Create a new product
    createProduct: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/product",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    // Update a product
    updateProductById: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/product/${id}`,
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    // Delete a product
    deleteProductById: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/${id}`,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductByIdMutation,
  useDeleteProductByIdMutation,
} = productApi;
