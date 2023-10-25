import React from "react";

import {ReactComponent as Edit} from "../../../../../../Assets/svg/edit.svg";
import {ReactComponent as Profile} from "../../../../../../Assets/svg/user.svg";
import {ReactComponent as Transfer} from "../../../../../../Assets/svg/arrowRight.svg";
import {ReactComponent as Help} from "../../../../../../Assets/svg/help.svg";
import {setUserMail} from "../../../../../../Redux/Slices/userMailSlice.js";
import {routes} from "../../../../../../Routes/routes.js";


export const handleActiveProfileImage = (isFetchedUsersData, userEmail, editableProfileImages, profileImages, activeAccountName) => {

  const matchUserObject = isFetchedUsersData[userEmail]

  const matchActiveAccount = matchUserObject?.accounts?.find((el) => el?.accountName === activeAccountName)


  if (matchActiveAccount?.image) return editableProfileImages?.find((el) => el?.frontendSlug === matchActiveAccount?.image)?.image
  else if (matchActiveAccount?.imageSlug) return profileImages?.find((el) => el?.frontendSlug === matchActiveAccount?.imageSlug)?.image
  else return null
}

export const renderExistingProfiles = (isFetchedUsersData,userEmail) => {
  const matchUserObject = isFetchedUsersData[userEmail]
  return matchUserObject?.accounts
}

export const handleProfileImages = (isFetchedUsersData, userEmail, editableProfileImages, profileImages, accountName, image, imageSlug) => {
  const matchUserObject = isFetchedUsersData[userEmail]

  const matchActiveAccount = matchUserObject?.accounts?.find((el) => el?.accountName === accountName)

  if (image) return editableProfileImages?.find((el) => el?.frontendSlug === matchActiveAccount?.image)?.image
  else if (imageSlug) return profileImages?.find((el) => el?.frontendSlug === matchActiveAccount?.imageSlug)?.image
  else return null
}

export const handleControlsClickEvents = (frontendSlug, setActiveForm, setActiveSubComponent) => {
  if(frontendSlug === "manageProfiles") setActiveForm("editProfiles")
  else if(frontendSlug === "transferProfile") setActiveSubComponent("transferProfile")
  else if(frontendSlug === "account") setActiveSubComponent("account")
  else if(frontendSlug === "helpCenter") return null
  else return null
}


export const handleSvgToRender = (frontendSlug) => {
  if (frontendSlug === "manageProfiles") return <Edit/>
  else if (frontendSlug === "transferProfile") return <Transfer/>
  else if (frontendSlug === "account") return <Profile/>
  else if (frontendSlug === "helpCenter") return <Help/>
}

export const handleUserLogout = (logoutUser, userEmail, activeLanguage, dispatch, navigate) => {
  logoutUser({email: userEmail, activeLanguage}).unwrap()?.then((response) => {
    if (response) {
        dispatch(setUserMail({userMail: null}))
        navigate(routes?.clientRoutes?.root)
    }
  })
}



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