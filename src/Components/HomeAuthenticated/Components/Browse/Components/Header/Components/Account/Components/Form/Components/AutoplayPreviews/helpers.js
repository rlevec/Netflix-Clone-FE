

export const handleClick = (frontendSlug, changeAutoplayPreview, autoPlayPreviews, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, setAutoplayPreviews, changeAutoplayPreviewsFormAlert, responseMessage, setResponseMessage, autoplayPreviewsBackend) => {
  if (frontendSlug === "submit") {
    if(autoplayPreviewsBackend === autoPlayPreviews) {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        error: activeLanguage === "English" ? changeAutoplayPreviewsFormAlert?.error?.labelEng : changeAutoplayPreviewsFormAlert?.error?.labelHr
      })

      let timeout = setTimeout(() => {
        setAutoplayPreviews(!autoPlayPreviews)
        setResponseMessage({...responseMessage, error: null})
      }, 3000)

      return () => clearTimeout(timeout)
    }
    else {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        success: activeLanguage === "English" ? changeAutoplayPreviewsFormAlert?.success?.labelEng : changeAutoplayPreviewsFormAlert?.success?.labelHr
      })

      let timeout = setTimeout(() => {
        setResponseMessage({...responseMessage, success: null})

        changeAutoplayPreview({
          newAutoplayPreview: autoPlayPreviews,
          email: userEmail,
          activeLanguage,
          initialAccountName: dropdownAccountSlugActive
        })
      }, 3000)

      return () => clearTimeout(timeout)
    }
  } else if (frontendSlug === "back") {
    setActiveDropdownForm(null)
    setActiveDropdownFormContent(null)
  } else return null
}
