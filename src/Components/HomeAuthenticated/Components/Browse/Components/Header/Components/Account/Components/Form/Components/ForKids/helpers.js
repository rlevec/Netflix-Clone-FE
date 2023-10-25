
export const handleClick = (frontendSlug, changeForKidsSelector, forKids, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, forKidsBackend, setForKids, changeForKidsFormAlert, responseMessage, setResponseMessage) => {
  if (frontendSlug === "submit") {
    if (forKidsBackend === forKids) {
      window.scrollTo(0, 0)
      setResponseMessage({
        ...responseMessage,
        error: activeLanguage === "English" ? changeForKidsFormAlert?.error?.labelEng : changeForKidsFormAlert?.error?.labelHr
      })

      let timeout = setTimeout(() => {
        setResponseMessage(null)
        setForKids(!forKids)
      }, 3000)

      return () => clearTimeout(timeout)
    } else {
      window.scrollTo(0, 0)
      setResponseMessage({
        ...responseMessage,
        success: activeLanguage === "English" ? changeForKidsFormAlert?.success?.labelEng : changeForKidsFormAlert?.success?.labelHr
      })


      let timeout = setTimeout(() => {
        changeForKidsSelector({
          newForKids: forKids,
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