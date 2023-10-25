import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSignUpFormData: builder.query({
     query: () => `${routes?.serverRoutes?.signUpFormDataRoute}`,
      providesTags: ["SignUpFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetSignUpFormDataQuery } = extendedRootApi