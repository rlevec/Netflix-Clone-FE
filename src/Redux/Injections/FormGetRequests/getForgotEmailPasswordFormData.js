import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForgotEmailPasswordFormData: builder.query({
     query: () => `${routes?.serverRoutes?.forgotEmailPasswordFormDataRoute}`,
      providesTags: ["ForgotEmailPasswordFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetForgotEmailPasswordFormDataQuery } = extendedRootApi