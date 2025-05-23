import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUp: builder.mutation({
      query: (data) => {
        console.log("auth hii", data);

        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});
