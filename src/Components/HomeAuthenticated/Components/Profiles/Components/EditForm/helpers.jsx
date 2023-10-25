import React, {useEffect} from "react";

import {ReactComponent as ErrorAlertIcon} from "../../../../../../Assets/svg/errorAlert.svg";

export const extractAllProfileValues = (isFetchedUsersData, userEmail, editProfileActive) => {
  const matchObject = isFetchedUsersData[userEmail]?.accounts?.find((el) => el?.accountName === editProfileActive)
  const {
    accountName,
    autoplayNext,
    autoplayPreview,
    forKids,
    gameName,
    image,
    imageSlug,
    language,
    maturitySetting
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
    maturitySetting
  }
}


export const renderProfileImage = (isFetchedUsersData, userEmail, editProfileActive, initialProfileImages, profilesImages, editImageActiveSlug) => {
  if (editImageActiveSlug) {
    return profilesImages?.find((el) => el?.frontendSlug === editImageActiveSlug)?.image
  } else if (extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.image) {
    const imageSlug = extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.image
    return profilesImages?.find((el) => el?.frontendSlug === imageSlug)?.image
  } else {
    const imageSlug = extractAllProfileValues(isFetchedUsersData, userEmail, editProfileActive)?.imageSlug
    return initialProfileImages?.find((el) => el?.frontendSlug === imageSlug)?.image
  }
}

export const handleCheckboxValues = (frontendSlug, event, query, setQuery) => {
  if (frontendSlug === "autoplayNext") {
    setQuery({...query, autoplayNext: event?.target?.checked})
  } else if (frontendSlug === "autoplayPreviews") {
    setQuery({...query, autoplayPreview: event?.target?.checked})
  } else return null
}

export const handleChecked = (frontendSlug, query) => {
  if (frontendSlug === "autoplayNext") return query?.autoplayNext
  else if (frontendSlug === "autoplayPreviews") return query?.autoplayPreview
  else return null
}

export const handleSubmit = (updateUserProfile, activeLanguage, userEmail, editProfileActive, query, selectedMaturityValue, selectedBrowseLanguage, setIsEditFormActive, setResponseSuccessMessage, setResponseErrorMessage, updateProfileImage, editImageActiveSlug) => {
  if (editImageActiveSlug) {
    updateProfileImage(
      {
        newImageSlug: editImageActiveSlug,
        email: userEmail,
        activeLanguage,
        initialAccountName: editProfileActive
      }
    )
  }
  updateUserProfile({
    activeLanguage,
    email: userEmail,
    initialAccountName: editProfileActive,
    accountName: query?.accountName,
    gameName: query?.gameName,
    maturitySetting: selectedMaturityValue,
    language: selectedBrowseLanguage?.value,
    autoplayNext: query?.autoplayNext,
    autplayPreview: query?.autoplayPreview
  }).unwrap().then((response) => {
    if (response) {
      window.scrollTo(0, 0)  //scroll to top for user to see success message

      setResponseSuccessMessage(response?.message) //set response message to state

      setIsEditFormActive(false)

      let timeout = setTimeout(() => {
        setResponseSuccessMessage(null)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }).catch((error) => {
    window.scrollTo(0, 0) //scroll to top for user to see error message

    if (error?.data?.error) setResponseErrorMessage(error?.data?.error); //set response message to state
    if (error?.data?.message) setResponseErrorMessage(error?.data?.message); //set response message to state

    setIsEditFormActive(false)

    let timeout = setTimeout(() => {
      setResponseErrorMessage(null)
    }, 3000)

    return () => clearTimeout(timeout)
  });
}


export const handleDelete = (deleteUserProfile, activeLanguage, userEmail, editProfileActive, setIsEditFormActive, setResponseSuccessMessage, setResponseErrorMessage) => {
  deleteUserProfile({
    activeLanguage,
    email: userEmail,
    accountName: editProfileActive,
  }).unwrap().then((response) => {
    if (response) {
      window.scrollTo(0, 0)  //scroll to top for user to see success message


      setResponseSuccessMessage(response?.message) //set response message to state

      setIsEditFormActive(false)

      let timeout = setTimeout(() => {
        setResponseSuccessMessage(null)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }).catch((error) => {
    window.scrollTo(0, 0) //scroll to top for user to see error message

    if (error?.data?.error) setResponseErrorMessage(error?.data?.error); //set response message to state
    if (error?.data?.message) setResponseErrorMessage(error?.data?.message); //set response message to state

    setIsEditFormActive(false)

    let timeout = setTimeout(() => {
      setResponseErrorMessage(null)
    }, 3000)

    return () => clearTimeout(timeout)
  })
}

export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError) => {
  if (frontendSlug === "accountName") {
    setQuery({...query, accountName: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, accountName: false})
    else setFieldError({...fieldError, accountName: true})
  } else if (frontendSlug === "gameName") {
    setQuery({...query, gameName: eventTargetValue})
    if (query?.gameName?.length > 2) setFieldError({...fieldError, gameName: false})
    else setFieldError({...fieldError, gameName: true})
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
  if (frontendSlug === "accountName" && fieldError?.accountName) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else if (frontendSlug === "gameName" && fieldError?.gameName) return handleErrorContainer(errorEng, errorHr, activeLanguage)
  else return null
}


export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "accountName") return query?.accountName
  else if (frontendSlug === "gameName") return query?.gameName
  else return ""
}

export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "accountName") {
    if (fieldError?.accountName) return `${componentClassName} error-accountName-active`
    else if (!fieldError?.accountName && query?.accountName !== "") return `${componentClassName} error-accountName-success`
    else return componentClassName
  }
  if (frontendSlug === "gameName") {
    if (fieldError?.gameName) return `${componentClassName} error-gameName-active`
    else if (!fieldError?.gameName && query?.gameName !== "") return `${componentClassName} error-gameName-success`
    else return componentClassName
  } else return componentClassName
}

export const handleDisabled = (frontendSlug, query, fieldError) => {
  if (frontendSlug === "save") {
    let isAnyQueryEmpty = Object.values(query)?.some((val) => val === "")
    let isAnyFieldInError = Object.values(fieldError)?.some((val) => val)

    if (isAnyQueryEmpty || isAnyFieldInError) return true
    else return false
  } else return false
}


export const useHandleResize = (mainRef, dimensions, setDimensions, setMainDivWidth) => {
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    if (mainRef) {
      if (mainRef.current?.clientWidth) setMainDivWidth(mainRef.current.clientWidth)
    }
  }, [dimensions?.width])
}

