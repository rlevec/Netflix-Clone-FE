import {useCallback, useEffect} from "react";
import {routes} from "../../Routes/routes.js";

export const handleFullPrefix = (activeLanguage, geoLocationCountry) => {
  let newGeoLocationCountry
  let newActiveLanguage

  if (geoLocationCountry !== "") {
    if (geoLocationCountry === "Croatia") newGeoLocationCountry = "hr"
    else newGeoLocationCountry = "en"
  }
  if (activeLanguage !== "") {
    if (activeLanguage === "Hrvatski") newActiveLanguage = "hr"
    else if (activeLanguage === "English") newActiveLanguage = "en"
    else newActiveLanguage = "en"
  }

  let fullPrefix = () => {
    if (newGeoLocationCountry === newActiveLanguage) return newActiveLanguage
    else return `${newGeoLocationCountry}-${newActiveLanguage}`
  }

  return fullPrefix()
}

export const handleActiveFormToRender = (isFetchedForgotEmailPasswordFormData, currentActiveForm) => isFetchedForgotEmailPasswordFormData?.content?.find((el) => el?.frontendSlug === currentActiveForm)


//if email has been generated via unknownMailForm, set it to query state as email property value
export const useHandleGeneratedEmail = (query, setQuery, generatedEmail) => {
  const handleGeneratedEmail = useCallback(() => {
    if (generatedEmail) setQuery({...query, email: generatedEmail})
  }, [generatedEmail])

  useEffect(() => {
    handleGeneratedEmail()
  }, [handleGeneratedEmail])
}

export const handleRecaptchaChangeAndRedirectToLogin = (captchaValue, query, setQuery, activeLanguage, geoLocationCountry, changeUserPassword, setResponseSuccess, setResponseError, navigate, setPasswordChangeInitiated) => {
  const {newPassword} = query
  let email = query?.email

  //generate full prefix for route navigation
  const fullPrefix = handleFullPrefix(activeLanguage, geoLocationCountry)

  //centralize all registration data into object variable
  const dataToPost = {
    newPassword,
    captchaValue,
    activeLanguage,
    email,
  }

  //unwrap response due rtk to use it as Promise
  changeUserPassword(dataToPost).unwrap().then((response) => {
    window.scrollTo(0, 0)  //scroll to top for user to see success message
    setResponseSuccess(response?.message) //set response message to state
    setPasswordChangeInitiated(false)
    //set timeout to 3sec for user to see the adequate response message
    let timeout = setTimeout(() => {
      //set cookie for logged user, initialize on form if exists
      setResponseSuccess(null)  //reset responseSuccess state
    }, 3000)
    navigate(`../${fullPrefix}/${routes?.clientRoutes?.staticLoginRoute}`, {replace: false}); //navigate to browse with prefixes and fully replace the history so user cant navigate back to the signIn form
    return () => clearTimeout(timeout)
  })
    .catch((error) => {
      window.scrollTo(0, 0) //scroll to top for user to see error message
      setResponseError(error?.data?.error); //set response message to state
      setPasswordChangeInitiated(false)
      //set timeout to 3sec for user to see the adequate response message
      let timeout = setTimeout(() => {
        setQuery({...query, newPassword: "", confirmNewPassword: ""}) //set query sate property values to empty strings
        setResponseError(null)  ////reset responseError state
      }, 3000)

      return () => clearTimeout(timeout)
    });
};

export const useHandlePasswordMatchCheck = (query, fieldError, setFieldError) => {
  const handlePasswordMatchCheck = useCallback(() => {
    if (query?.newPassword === query?.confirmNewPassword) setFieldError({...fieldError, confirmNewPassword: false})
    else setFieldError({...fieldError, confirmNewPassword: true})
  }, [query?.newPassword, query?.confirmNewPassword])

  useEffect(() => {
    handlePasswordMatchCheck()
  }, [handlePasswordMatchCheck])
}