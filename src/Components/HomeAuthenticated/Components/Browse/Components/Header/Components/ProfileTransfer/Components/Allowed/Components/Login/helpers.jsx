import {setSignUpMail} from "../../../../../../../../../../../../Redux/Slices/signUpMailSlice.js";
import {setRegisteredMail} from "../../../../../../../../../../../../Redux/Slices/registeredMail.js";
import {setUserMail} from "../../../../../../../../../../../../Redux/Slices/userMailSlice.js";

import {routes} from "../../../../../../../../../../../../Routes/routes.js";

import React from "react";

import {ReactComponent as ErrorAlertIcon} from "../../../../../../../../../../../../Assets/svg/errorAlert.svg";
import {ReactComponent as ShowPassword} from "../../../../../../../../../../../../Assets/svg/passwordOn.svg";
import {ReactComponent as HidePassword} from "../../../../../../../../../../../../Assets/svg/passwordOff.svg";


export const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  const cookieValue = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;

  document.cookie = cookieValue;
};

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

export const handleRecaptchaChangeAndSignIn = (captchaValue, query, logUser, setQuery, activeLanguage, geoLocationCountry, navigate, dispatch, rememberLoginData, setLoginInitated, errorMap, responseMessage, setResponseMessage, isFetchedUsersData, setFieldError, fieldError, createUserProfile, userEmail, profileSelected, setActiveLoginForm, setCurrentStep, setActiveSubComponent, logoutUser) => {

  //generate full prefix for route navigation
  const fullPrefix = handleFullPrefix(activeLanguage, geoLocationCountry)

  //centralize all registration data into object variable
  const dataToPost = {
    ...query,
    captchaValue,
    activeLanguage
  }



  const matchAccountName = !!isFetchedUsersData?.[query?.email]?.accounts?.find((el) => el?.accountName === profileSelected?.accountName)

  if (isFetchedUsersData[query?.email]?.accounts?.length >= 5) {
    window.scrollTo(0, 0)
    setResponseMessage({
      ...responseMessage,
      error: activeLanguage === "English" ? errorMap?.max?.labelEng : errorMap?.max?.labelHr
    })


    let timeout = setTimeout(() => {
      setResponseMessage({...responseMessage, error: null})
      setActiveSubComponent(null)
    }, 3000)

    return () => clearTimeout(timeout)
  } else if (matchAccountName) {
    window.scrollTo(0, 0)

    setResponseMessage({
      ...responseMessage,
      error: activeLanguage === "English" ? errorMap?.error?.labelEng : errorMap?.error?.labelHr
    })

    let timeout = setTimeout(() => {
      setResponseMessage({...responseMessage, error: null})
      setActiveLoginForm(false)
      setCurrentStep(1)
    }, 3000)
    return () => clearTimeout(timeout)
  } else {

    setResponseMessage({
      ...responseMessage,
      success: activeLanguage === "English" ? errorMap?.success?.labelEng : errorMap?.success?.labelHr
    })

    let timeout = setTimeout(() => {
      setResponseMessage({
        ...responseMessage,
        success: null
      })

      createUserProfile({
        accountName: profileSelected?.accountName,
        forKids: profileSelected?.forKids,
        email: query?.email,
        activeLanguage,
        imageSlug: profileSelected?.imageSlug,
        image: profileSelected?.image,
        language: profileSelected?.language,
        autoplayNext: profileSelected?.autoplayNext,
        autoplayPreview: profileSelected?.autoplayPreview,
      })
      logoutUser({email: userEmail, activeLanguage,})
      logUser(dataToPost).unwrap().then((response) => {
        if (response) {
          window.scrollTo(0, 0)  //scroll to top for user to see success message
          setLoginInitated(false)
          //set timeout to 3sec for user to see the adequate response message
          //set cookie for logged user, initialize on form if exists
          if (rememberLoginData) {
            setCookie("email", query?.email, 7);
            setCookie("password", query?.password, 7);
          }
          dispatch(setUserMail({userMail: query?.email})) //dispatch signUpMail to query?.email due login success
          navigate(`../${fullPrefix}/${routes?.clientRoutes?.staticBrowseRoute}`, {replace: true}); //navigate to browse with prefixes and fully replace the history so user cant navigate back to the signIn form

        }
      })
        .catch((error) => {
          window.scrollTo(0, 0) //scroll to top for user to see error message
          setLoginInitated(false)
        });
    }, 3000)

    return () => clearTimeout(timeout)
  }
};

export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError) => {
  if (frontendSlug === "email") {
    setQuery({...query, email: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, email: false})
    else setFieldError({...fieldError, email: true})
  } else if (frontendSlug === "password") {
    setQuery({...query, password: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, password: false})
    else setFieldError({...fieldError, password: true})
  } else return null
}

const handleErrorContainer = (errorEng, errorHr, activeLanguage) => {
  let error

  if (activeLanguage === "English") error = errorEng
  else error = errorHr

  return (
    <div className="field_error-icon-container">
      <div className="field_error-icon"><ErrorAlertIcon/></div>
      <div className="field_error-content">{error}</div>
    </div>
  )
}

export const handleFieldError = (frontendSlug, fieldError, errorEng, errorHr, activeLanguage) => {
  if (frontendSlug === "email" && fieldError?.email) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "password" && fieldError?.password) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}


export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "email") {
    if (fieldError?.email) return `${componentClassName} error-active`
    else if (!fieldError?.email && query?.email !== "") return `${componentClassName} error-success`
    else return componentClassName
  } else if (frontendSlug === "password") {
    if (fieldError?.password) return `${componentClassName} error-password-active`
    else if (!fieldError?.password && query?.password !== "") return `${componentClassName} error-password-success`
    else return componentClassName
  } else return componentClassName
}


export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "email") return query?.email
  else if (frontendSlug === "password") return query?.password
  else return undefined
}

export const isButtonDisabled = (query, fieldError) => {
  let isAnyQueryPropertyValueEmpty = Object.values(query)?.some((val) => val === "")
  let isAnyFieldErrorTrue = Object.values(fieldError)?.some((val) => val)
  if (isAnyQueryPropertyValueEmpty || isAnyFieldErrorTrue) return true
  else return false
}

export const handleInputType = (frontendSlug, type, showPassword) => {
  if (frontendSlug === "password") {
    if (showPassword?.password) return "text"
    else return type
  } else return null
}


export const handlePasswordIcon = (frontendSlug, showPassword, setShowPassword) => {
  if (frontendSlug === "password") {
    if (showPassword?.password) return <div
      onClick={() => setShowPassword({...showPassword, password: !showPassword?.password})}
      className="password-show-container">
      <ShowPassword/></div>
    else return <div
      onClick={() => setShowPassword({...showPassword, password: !showPassword?.password})}
      className="password-show-container">
      <HidePassword/></div>
  } else return null
}


export const cookieDecoder = (type) => {
  const cookieString = document.cookie

  const decodedCookieString = decodeURIComponent(cookieString);

  let cookies = decodedCookieString?.split(";")

  const transformString = (string) => {
    let transformedElement = string?.split("=")
    let slicedTransformedElement = transformedElement?.slice(-1)
    return slicedTransformedElement?.join()
  }


  if (type === "login") {
    let email = ""
    let password = ""

    cookies?.forEach((el, idx) => {
      if (idx === 0) email = transformString(el)
      else if (idx === 1) password = transformString(el)
    })

    return {email, password}
  }

}
