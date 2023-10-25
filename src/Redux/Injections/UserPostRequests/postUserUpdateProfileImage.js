import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"


const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postUpdateUserProfileImage: builder.mutation({
    query: (payload) => ({
        url: routes?.serverRoutes?.updateUserProfileImageRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
  }),
  overrideExisting: false,
})

export const { usePostUpdateUserProfileImageMutation } = extendedRootApi