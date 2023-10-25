import {generateProfileImageSlug} from "../helpers.js";

import {ReactComponent as ErrorAlertIcon} from "../../../../Assets/svg/errorAlert.svg";

import React, {useEffect} from "react";

export const handleSubmit = (frontendSlug, createUserProfile, userEmail, query, forKids, isFetchedUsersData, initialProfileImages, activeLanguage, setActiveForm, setQuery, setResponseSuccessMessage, setResponseErrorMessage) => {
  if (frontendSlug === "continue") {
    createUserProfile({
      email: userEmail,
      accountName: query?.accountName,
      forKids,
      imageSlug: generateProfileImageSlug(isFetchedUsersData, userEmail, initialProfileImages),
      image: null,
      gameName: null,
      language: "english",
      autoplayNext: true,
      autoplayPreview: true,
      activeLanguage
    }).unwrap().then((response) => {
      if(response) {
        window.scrollTo(0, 0)  //scroll to top for user to see success message

        setResponseSuccessMessage(response?.message) //set response message to state

        setActiveForm("initialForm")

        let timeout = setTimeout(() => {
          setResponseSuccessMessage(null)
        }, 3000)

        return () => clearTimeout(timeout)
      }
    }).catch((error) => {
      window.scrollTo(0, 0) //scroll to top for user to see error message
      if (error?.data?.error) setResponseErrorMessage(error?.data?.error); //set response message to state
      if (error?.data?.message) setResponseErrorMessage(error?.data?.message); //set response message to state

      setActiveForm("initialForm")

      let timeout = setTimeout(() => {
        setResponseErrorMessage(null)
      }, 3000)

      return () => clearTimeout(timeout)
    })
  } else if (frontendSlug === "cancel") {
    setQuery({...query, name: ""})
    setActiveForm("initialForm")
  } else return null
}

export const handleDisabled = (query, fieldError) => {
  if (query?.accountName === "" && fieldError?.accountName) return true
  else return false
}



export const handleChangeAndValidation = (eventTargetValue, frontendSlug, validation, query, setQuery, fieldError, setFieldError) => {
  if (frontendSlug === "accountName") {
    setQuery({...query, accountName: eventTargetValue})
    let regex = new RegExp(validation)
    if (regex.test(eventTargetValue)) setFieldError({...fieldError, accountName: false})
    else setFieldError({...fieldError, accountName: true})
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
  else return null
}


export const handleInputValues = (frontendSlug, query) => {
  if (frontendSlug === "accountName") return query?.accountName
  else return undefined
}

export const handleInputBorderClassName = (frontendSlug, fieldError, componentClassName, query) => {
  if (frontendSlug === "accountName") {
    if (fieldError?.accountName) return `${componentClassName} error-accountName-active`
    else if (!fieldError?.accountName && query?.accountName !== "") return `${componentClassName} error-accountName-success`
    else return componentClassName
  } else return componentClassName
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
