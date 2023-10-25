export const handleIsDisabled = (isFetchedUsersData, userEmail, activeForm) => {
  if(activeForm === "editProfiles") return false
  else {
    if (isFetchedUsersData[userEmail]?.accounts?.length) return false
    else return true
  }
}

export const handleImages = (image, imageSlug, profilesImages, initialProfileImages) => {
  if (image) return profilesImages?.find((el) => el?.frontendSlug === image)?.image
  else return initialProfileImages?.find((el) => el?.frontendSlug === imageSlug)?.image
}


export const rendereElementsByActiveForm = (activeForm, activeLanguage, initialHeader, initialManage, editableHeader, editableButtons, type) => {
  if (activeForm === "initialForm") {
    if (type === "header") {
      if (activeLanguage === "English") return initialHeader?.titleEng
      else return initialHeader?.titleHr
    } else if (type === "button") {
      if (activeLanguage === "English") return initialManage?.titleEng
      else return initialManage?.titleHr
    }
  } else if (activeForm === "editProfiles") {
    if (type === "header") {
      if (activeLanguage === "English") return editableHeader?.titleEng
      else return editableHeader?.titleHr
    } else if (type === "button") {
      if (activeLanguage === "English") return editableButtons?.titleEng
      else return editableButtons?.titleHr
    }
  }
}


export const handleProfileCardActions = (accountName, activeForm, setActiveForm, setEditProfileActive, setBrowseProfileActive, setIsEditFormActive) => {
  if (activeForm === "editProfiles") {
    setEditProfileActive(accountName)
    setBrowseProfileActive(null)
    setIsEditFormActive(true)
  } else if (activeForm === "initialForm") {
    setBrowseProfileActive(accountName)
    setEditProfileActive(null)
    setActiveForm("profileActive")
  } else return null
}