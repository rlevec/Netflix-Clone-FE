import { apiSlice } from "../../Slices/apiSlice";
import { routes } from "../../../Routes/routes";

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    removeUserProfileMyListContent: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.deleteMyListItemFromUserProfileRoute,
        method: "POST",
        body: { payload },
      }),
      invalidatesTags: ["UsersData"],
    }),
  }),
  overrideExisting: false,
});

export const { useRemoveUserProfileMyListContentMutation } = extendedRootApi;
