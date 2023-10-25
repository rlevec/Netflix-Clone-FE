
export const handleClick = (frontendSlug, changeAutoplayNext, autoPlayNext, userEmail, activeLanguage,setActiveDropdownForm, setActiveDropdownFormContent, dropdownAccountSlugActive, setAutoplayNext, responseMessage, setResponseMessage, changeAutoplayNextFormAlert, autoplayNextBackend) => {
  if(frontendSlug === "submit") {
    if(autoPlayNext === autoplayNextBackend) {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        error: activeLanguage === "English" ? changeAutoplayNextFormAlert?.error?.labelEng : changeAutoplayNextFormAlert?.error?.labelHr
      })

      let timeout = setTimeout(() => {
        setAutoplayNext(!autoPlayNext)
        setResponseMessage({...responseMessage, error: null})
      }, 3000)

      return () => clearTimeout(timeout)
    }
    else {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        success: activeLanguage === "English" ? changeAutoplayNextFormAlert?.success?.labelEng : changeAutoplayNextFormAlert?.success?.labelHr
      })

      let timeout = setTimeout(() => {
        setResponseMessage({...responseMessage, success: null})

        changeAutoplayNext({
          newAutoplayNext: autoPlayNext,
          email: userEmail,
          activeLanguage,
          initialAccountName: dropdownAccountSlugActive
        })
      }, 3000)

      return () => clearTimeout(timeout)

    }
  }
  else if(frontendSlug === "back") {
    setActiveDropdownForm(null)
    setActiveDropdownFormContent(null)
  }
  else return null
}