import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHeaderFormData: builder.query({
        query: () => `${routes?.serverRoutes?.headerFormDataRoute}`,
      providesTags: ["HeaderFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetHeaderFormDataQuery } = extendedRootApi