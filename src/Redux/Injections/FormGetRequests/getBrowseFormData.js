import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrowseFormData: builder.query({
      query: () => `${routes?.serverRoutes?.browseFormDataRoute}`,
      providesTags: ["BrowseFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetBrowseFormDataQuery } = extendedRootApi