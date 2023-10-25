import { apiSlice } from "../../Slices/apiSlice";
import { routes } from "../../../Routes/routes";

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    removeUserProfileMyLikesContent: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.deleteMyLikesItemFromUserProfileRoute,
        method: "POST",
        body: { payload },
      }),
      invalidatesTags: ["UsersData"],
    }),
  }),
  overrideExisting: false,
});

export const { useRemoveUserProfileMyLikesContentMutation } = extendedRootApi;
