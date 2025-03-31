import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { logout, setUser } from "../features/auth/authSlice";
// import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.token;
    console.log("tt", token);
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

// create custom baseQuery for generating new token by refreshToken
// const baseQueryWithRefreshToken = async (arg, api, extraOptions) => {
//   let result = await baseQuery(arg, api, extraOptions);

//   console.log("base query result", result);

//   if (result.error?.status === 404) {
//     return toast.error(result.error?.data?.message);
//   } else if (result.error?.status === 403) {
//     return toast.error(
//       "Forbidden: You do not have permission to access this resource."
//     );
//   }

//   if (result.error?.status === 401) {
//     console.log("token is expired");

//     const res = await fetch("http://localhost:5000/api/auth/refresh-token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });

//     const data = await res.json();

//     if (data?.data?.accessToken) {
//       const user = api.getState().auth.user;

//       api.dispatch(
//         setUser({
//           user,
//           token: data.data.accessToken,
//         })
//       );

//       // Re-run the query with the new token
//       result = await baseQuery(arg, api, extraOptions);
//       console.log("token generate success");
//     } else {
//       console.log("logout success because unauthorized user");
//       api.dispatch(logout());
//       // Returning a custom error object to indicate that logout occurred
//       return { error: { message: "Unauthorized, logging out", status: 401 } };
//     }
//   }

//   return result; // Ensure the result is always in a compatible format
// };

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["users", "milestones"],
  endpoints: () => ({}),
});
