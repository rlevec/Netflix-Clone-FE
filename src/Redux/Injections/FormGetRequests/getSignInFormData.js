import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSignInFormData: builder.query({
     query: () => `${routes?.serverRoutes?.signInFormDataRoute}`,
      providesTags: ["SignInFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetSignInFormDataQuery } = extendedRootApi