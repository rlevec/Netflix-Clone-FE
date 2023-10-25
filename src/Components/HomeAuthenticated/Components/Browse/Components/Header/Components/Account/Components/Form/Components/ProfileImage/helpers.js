
export const handleClick = (frontendSlug,updateProfileImage, imageSelected, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, editableProfileImages, responseMessage, setResponseMessage, changeProfileImageFormAlert, editableImageBackend, setImageSelected) => {
  if (frontendSlug === "submit") {
    if(editableImageBackend === imageSelected) {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        error: activeLanguage === "English" ? changeProfileImageFormAlert?.error?.labelEng : changeProfileImageFormAlert?.error?.labelHr
      })

      let timeout = setTimeout(() => {
        setImageSelected(null)
        setResponseMessage({...responseMessage, error: null})
      }, 3000)

      return () => clearTimeout(timeout)
    }
    else {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        success: activeLanguage === "English" ? changeProfileImageFormAlert?.success?.labelEng : changeProfileImageFormAlert?.success?.labelHr
      })

      let timeout = setTimeout(() => {
        setResponseMessage({...responseMessage, success: null})

        updateProfileImage({
          newImageSlug: imageSelected,
          email: userEmail,
          activeLanguage,
          initialAccountName: dropdownAccountSlugActive
        })
      }, 3000)

      return () => clearTimeout(timeout)

    }
  }
  else if (frontendSlug === "back") {
    setActiveDropdownForm(null)
    setActiveDropdownFormContent(null)
  } else return null
}