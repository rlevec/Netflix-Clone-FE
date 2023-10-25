import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"


const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postChangeBrowseContentLanguage: builder.mutation({
    query: (payload) => ({
        url: routes?.serverRoutes?.changeBrowseContentLanguageRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
  }),
  overrideExisting: false,
})

export const { usePostChangeBrowseContentLanguageMutation } = extendedRootApi