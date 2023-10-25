import { apiSlice } from "../../Slices/apiSlice";
import { routes } from "../../../Routes/routes";

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postUserProfileMyList: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.updateUserProfileMyListRoute,
        method: "POST",
        body: { payload },
      }),
      invalidatesTags: ["UsersData"],
    }),
  }),
  overrideExisting: false,
});

export const { usePostUserProfileMyListMutation } = extendedRootApi;
