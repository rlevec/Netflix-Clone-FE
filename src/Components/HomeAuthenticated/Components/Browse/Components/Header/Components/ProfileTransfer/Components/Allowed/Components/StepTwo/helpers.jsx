import React from "react";

import {ReactComponent as ErrorAlertIcon} from "../../../../../../../../../../../../Assets/svg/errorAlert.svg"
import {ReactComponent as ShowPassword} from "../../../../../../../../../../../../Assets/svg/passwordOn.svg";
import {ReactComponent as HidePassword} from "../../../../../../../../../../../../Assets/svg/passwordOff.svg";

export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError) => {
  if (frontendSlug === "email") {
    setQuery({...query, newEmail: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, newEmail: false})
    else setFieldError({...fieldError, newEmail: true})
  } else if (frontendSlug === "newPassword") {
    setQuery({...query, newPassword: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, newPassword: false})
    else setFieldError({...fieldError, newPassword: true})
  }
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
  if (frontendSlug === "email" && fieldError?.newEmail) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "newPassword" && fieldError?.newPassword) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}

export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "email") {
    if (fieldError?.newEmail) return `${componentClassName} error-active`
    else if (!fieldError?.newEmail && query?.newEmail !== "") return `${componentClassName} error-success`
    else return componentClassName
  } else if (frontendSlug === "newPassword") {
    if (fieldError?.newPassword) return `${componentClassName} error-password-active`
    else if (!fieldError?.newPassword && query?.newPassword !== "") return `${componentClassName} error-password-success`
    else return componentClassName
  }
}

export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "email") return query?.newEmail
  else if (frontendSlug === "newPassword") return query?.newPassword
  else return undefined
}

export const handleInputType = (frontendSlug, type, showPassword) => {
  if (frontendSlug === "newPassword") {
    if (showPassword?.newPassword) return "text"
    else return type
  }
  else return type
}

export const handlePasswordIcon = (frontendSlug, showPassword, setShowPassword) => {
  if (frontendSlug === "newPassword") {
    if (showPassword?.newPassword) return <div
      onClick={() => setShowPassword({...showPassword, newPassword: !showPassword?.newPassword})}
      className="password-show-container">
      <ShowPassword/></div>
    else return <div
      onClick={() => setShowPassword({...showPassword, newPassword: !showPassword?.newPassword})}
      className="password-show-container">
      <HidePassword/></div>
  }
  else return null
}

export const renderProfileImage = (isFetchedUsersData, userEmail, profileSelected, editableProfileImages, profileImages) => {
  const matchProfileObject = () => isFetchedUsersData[userEmail]?.accounts?.find((el) => el?.accountName === profileSelected?.accountName)

  const {
    image,
    imageSlug
  } = matchProfileObject()

  if (image) return editableProfileImages?.find((el => el?.frontendSlug === image))?.image
  else return profileImages?.find((el => el?.frontendSlug === imageSlug))?.image
}