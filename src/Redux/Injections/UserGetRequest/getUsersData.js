import { apiSlice } from "../../Slices/apiSlice"
import { routes } from "../../../Routes/routes"

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `${routes?.serverRoutes?.usersRoute}`,
      providesTags: ["UsersData"]
    }),
  }),
  overrideExisting: false,
})

export const { useGetUsersQuery } = extendedRootApi