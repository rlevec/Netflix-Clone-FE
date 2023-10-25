import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"


const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postChangeUserBillingDay: builder.mutation({
    query: (payload) => ({
        url: routes?.serverRoutes?.changeUserBillingDayRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
  }),
  overrideExisting: false,
})

export const { usePostChangeUserBillingDayMutation } = extendedRootApi