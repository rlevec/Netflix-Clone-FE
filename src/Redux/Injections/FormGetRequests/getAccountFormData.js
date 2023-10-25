import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccountFormData: builder.query({
      query: () => `${routes?.serverRoutes?.accountFormDataRoute}`,
      providesTags: ["AccountFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetAccountFormDataQuery } = extendedRootApi