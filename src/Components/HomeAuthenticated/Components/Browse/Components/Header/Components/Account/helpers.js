import {setUserMail} from "../../../../../../../../Redux/Slices/userMailSlice.js";

export const handleMatchActiveAccountData = (dropdownAccountSlugActive, isFetchedUsersData, userEmail) => {
  if (dropdownAccountSlugActive) {
    let matchObject = isFetchedUsersData[userEmail]?.accounts?.find((el) => el?.accountName === dropdownAccountSlugActive)

    const {
      accountName,
      autoplayNext,
      autoplayPreview,
      forKids,
      gameName,
      image,
      imageSlug,
      language,
      maturitySetting,
      profileTransfer,
    } = matchObject

    return {
      accountName,
      autoplayNext,
      autoplayPreview,
      forKids,
      gameName,
      image,
      imageSlug,
      language,
      maturitySetting,
      profileTransfer,
    }
  } else return null
}


export const handleDeleteAccount = (setResponseMessage, responseMessage, activeLanguage, errorMap, deleteAccount, userEmail, logoutUser, dispatch) => {
  window.scrollTo(0, 0)

  setResponseMessage({...responseMessage, success: activeLanguage === "English" ? errorMap?.deleteProfile?.success?.labelEng : errorMap?.deleteProfile?.success?.labelHr})

  let timeout = setTimeout(() => {
    setResponseMessage(null)
    deleteAccount({email: userEmail, activeLanguage})
    logoutUser({email: userEmail, activeLanguage,})
    dispatch(setUserMail({userMail: null}))
  }, 3000)

  return () => clearTimeout(timeout)
}