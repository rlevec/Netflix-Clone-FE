import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfileTransferFormData: builder.query({
      query: () => `${routes?.serverRoutes?.profileTransferFormDataRoute}`,
      providesTags: ["ProfileTransferFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetProfileTransferFormDataQuery } = extendedRootApi