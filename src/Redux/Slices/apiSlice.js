import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {routes} from "../../Routes/routes.js";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${routes?.serverRoutes?.root}`,
  }),
  tagTypes: [
    "HomepageUnauthenticatedFormData",
    "FooterFormData",
    "SignUpFormData",
    "SignInFormData",
    "ForgotEmailPasswordFormData",
    "HeaderFormData",
    "ProfilesFormData",
    "UsersData",
    "BrowseFormData",
    "AccountFormData",
    "ProfileTransferFormData",
    "WatchableContentFormData"
  ],
  endpoints: () => ({}),
});