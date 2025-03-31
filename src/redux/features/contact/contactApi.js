import { baseApi } from "../../api/baseApi";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create a contact (public)
    createContact: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/contact",
        body: data,
      }),
      invalidatesTags: ["contacts"],
    }),

    // Admin: Get all contacts
    getContacts: builder.query({
      query: () => ({
        method: "GET",
        url: "/contact",
      }),
      providesTags: ["contacts"],
    }),

    // Admin: Get a single contact by ID
    getContactById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/contact/${id}`,
      }),
      providesTags: ["contacts"],
    }),

    // (Optional) Update contact (if you allow public or internal updates)
    updateContactById: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/contact/${id}`,
        body: data,
      }),
      invalidatesTags: ["contacts"],
    }),

    // Admin: Delete a contact
    deleteContactById: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/contact/${id}`,
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactsQuery,
  useGetContactByIdQuery,
  useUpdateContactByIdMutation,
  useDeleteContactByIdMutation,
} = contactApi;
