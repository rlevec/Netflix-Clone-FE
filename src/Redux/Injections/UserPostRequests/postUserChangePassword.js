import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"


const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postUserChangePassword: builder.mutation({
    query: (payload) => ({
        url: routes?.serverRoutes?.changeUserPasswordRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
  }),
  overrideExisting: false,
})

export const { usePostUserChangePasswordMutation } = extendedRootApi