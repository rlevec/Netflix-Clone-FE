import { apiSlice } from "../../Slices/apiSlice";
import { routes } from "../../../Routes/routes";

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postUserProfileMyLikes: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.updateUserProfileMyLikesRoute,
        method: "POST",
        body: { payload },
      }),
      invalidatesTags: ["UsersData"],
    }),
  }),
  overrideExisting: false,
});

export const { usePostUserProfileMyLikesMutation } = extendedRootApi;
