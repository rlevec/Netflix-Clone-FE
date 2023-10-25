import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFooterFormData: builder.query({
     query: () => `${routes?.serverRoutes?.footerFormDataRoute}`,
      providesTags: ["FooterFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetFooterFormDataQuery } = extendedRootApi