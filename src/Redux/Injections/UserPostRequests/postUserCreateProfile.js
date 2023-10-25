import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"


const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postCreateUserProfile: builder.mutation({
    query: (payload) => ({
        url: routes?.serverRoutes?.createUserProfileRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
  }),
  overrideExisting: false,
})

export const { usePostCreateUserProfileMutation } = extendedRootApi