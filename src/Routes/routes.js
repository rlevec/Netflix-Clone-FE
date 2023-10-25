export const routes = {
  serverRoutes: {
    root: "http://localhost:6060",
    homepageUnauthenticatedFormDataRoute: "homepage_unauthenticated_formdata",
    footerFormDataRoute: "footer_formdata",
    signUpFormDataRoute: "signup_formdata",
    signInFormDataRoute: "signin_formdata",
    forgotEmailPasswordFormDataRoute: "forgot_email_password_formdata",
    headerFormDataRoute: "header_form_data",
    profilesFormDataRoute: "profiles_form_data",
    usersRoute: "users",
    registerUserRoute: "users/register_user",
    logUserRoute: "users/log_user",
    logoutUserRoute: "users/logout_user",
    changeUserPasswordRoute: "users/password_change",
    createUserProfileRoute: "users/add_profile",
    updateUserProfileRoute: "users//update_profile",
    updateUserProfileImageRoute: "users/update_profile_image",
    deleteUserProfileRoute: "users/delete_profile",
    browseFormDataRoute: "browse_form_data",
    accountFormDataRoute: "account_form_data",
    watchableContentFormDataRoute: "watchable_content_form_data",
    deleteUserAccountRoute: "users/delete_user",
    changeUserEmailRoute: "users/change_email",
    changeUserPaymentInfoRoute: "users/change_payment_info",
    changeUserBillingDayRoute: "users/change_billing_day",
    changeActivePlanRoute: "users/change_active_plan",
    changeAccountNameRoute: "users/change_account_name",
    changeForKidsRoute: "users/change_for_kids",
    changeGameNameRoute: "users/change_game_name",
    changeBrowseContentLanguageRoute: "users/change_browse_content_language",
    changeAmrRoute: "users/change_amr",
    changeAutoplayNextRoute: "users/change_autoplay_next",
    changeAutoplayPreviewRoute: "users/change_autoplay_preview",
    profileTransferFormDataRoute: "profile_transfer_form_data",
    updateUserProfileTransferRoute: "users/update_user_profile_transfer",
    updateUserProfileMyListRoute: "users/update_user_profile_my_list",
    updateUserProfileMyLikesRoute: "users/update_user_profile_my_likes",
    deleteMyListItemFromUserProfileRoute: "users/remove_my_list_content",
    deleteMyLikesItemFromUserProfileRoute: "users/remove_my_likes_content",
  },
  clientRoutes: {
    root: "/",
    dynamicHomeRoute: ":prefix",
    staticSignUpRoute: "signup",
    dynamicSignUpRoute: "/:prefix/signup",
    staticLoginRoute: "login",
    dynamicLoginRoute: "/:prefix/login",
    staticBrowseRoute: "browse",
    dynamicBrowseRoute: "/:prefix/browse",
    staticLoginHelpRoute: "login_help",
    dynamicLoginHelpRoute: "/:prefix/login_help",
  },
};
