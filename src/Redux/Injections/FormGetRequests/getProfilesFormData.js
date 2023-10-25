import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfilesFormData: builder.query({
      query: () => `${routes?.serverRoutes?.profilesFormDataRoute}`,
      providesTags: ["ProfilesFormData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetProfilesFormDataQuery } = extendedRootApi