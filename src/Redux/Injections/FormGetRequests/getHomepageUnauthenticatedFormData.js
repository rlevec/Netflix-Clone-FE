import { apiSlice } from "../../Slices/apiSlice"
import {routes} from "../../../Routes/routes"


const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomepageUnauthenticatedFormData: builder.query({
    query: () => `${routes?.serverRoutes?.homepageUnauthenticatedFormDataRoute}`,
      providesTags: ["HomepageUnauthenticatedFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetHomepageUnauthenticatedFormDataQuery } = extendedRootApi