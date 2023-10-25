import { apiSlice } from "../../Slices/apiSlice";
import { routes } from "../../../Routes/routes";

const extendedRootApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWatchableContentFormData: builder.query({
      query: () => `${routes?.serverRoutes?.watchableContentFormDataRoute}`,
      providesTags: ["WatchableContentFormData"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetWatchableContentFormDataQuery } = extendedRootApi;
