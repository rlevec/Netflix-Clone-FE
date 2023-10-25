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



{/* 
  endpoints: (builder) => ({
    getHomepageUnauthenticatedFormData: builder.query({
      query: () => `${routes?.serverRoutes?.homepageUnauthenticatedFormDataRoute}`,
      providesTags: ["HomepageUnauthenticatedFormData"]
    }),
    getFooterFormData: builder.query({
      query: () => `${routes?.serverRoutes?.footerFormDataRoute}`,
      providesTags: ["FooterFormData"]
    }),
    getSignUpFormData: builder.query({
      query: () => `${routes?.serverRoutes?.signUpFormDataRoute}`,
      providesTags: ["SignUpFormData"]
    }),
    getSignInFormData: builder.query({
      query: () => `${routes?.serverRoutes?.signInFormDataRoute}`,
      providesTags: ["SignInFormData"]
    }),
    getForgotEmailPasswordFormData: builder.query({
      query: () => `${routes?.serverRoutes?.forgotEmailPasswordFormDataRoute}`,
      providesTags: ["ForgotEmailPasswordFormData"]
    }),
    getHeaderFormData: builder.query({
      query: () => `${routes?.serverRoutes?.headerFormDataRoute}`,
      providesTags: ["HeaderFormData"]
    }),
    getProfilesFormData: builder.query({
      query: () => `${routes?.serverRoutes?.profilesFormDataRoute}`,
      providesTags: ["ProfilesFormData"]
    }),
    getAccountFormData: builder.query({
      query: () => `${routes?.serverRoutes?.accountFormDataRoute}`,
      providesTags: ["AccountFormData"]
    }),
    getBrowseFormData: builder.query({
      query: () => `${routes?.serverRoutes?.browseFormDataRoute}`,
      providesTags: ["BrowseFormData"]
    }),
    getUsers: builder.query({
      query: () => `${routes?.serverRoutes?.usersRoute}`,
      providesTags: ["UsersData"]
    }),
    postUserRegistration: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.registerUserRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postUserLogin: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.logUserRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postUserLogout: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.logoutUserRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postUserChangePassword: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeUserPasswordRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postCreateUserProfile: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.createUserProfileRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postUpdateUserProfile: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.updateUserProfileRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postUpdateUserProfileImage: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.updateUserProfileImageRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postDeleteUserProfile: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.deleteUserProfileRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postDeleteUserAccount: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.deleteUserAccountRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeUserEmail: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeUserEmailRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeUserPaymentInfo: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeUserPaymentInfoRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeUserBillingDay: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeUserBillingDayRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeUserActivePlan: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeActivePlanRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeAccountName: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeAccountNameRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeForKids: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeForKidsRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeGameName: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeGameNameRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeBrowseContentLanguage: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeBrowseContentLanguageRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeAmr: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeAmrRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeAutoplayNext: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeAutoplayNextRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postChangeAutoplayPreview: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.changeAutoplayPreviewRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    postUpdateUserProfileTransfer: builder.mutation({
      query: (payload) => ({
        url: routes?.serverRoutes?.updateUserProfileTransferRoute,
        method: "POST",
        body: {payload},
      }),
      invalidatesTags: ["UsersData"]
    }),
    getProfileTransferFormData: builder.query({
      query: () => `${routes?.serverRoutes?.profileTransferFormDataRoute}`,
      providesTags: ["ProfileTransferFormData"]
    }),
  }),
*/}