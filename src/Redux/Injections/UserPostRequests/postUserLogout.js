import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"


const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postUserLogout: builder.mutation({
    query: (payload) => ({
        url: routes?.serverRoutes?.logoutUserRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
  }),
  overrideExisting: false,
})

export const { usePostUserLogoutMutation } = extendedRootApi