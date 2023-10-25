import {setUserMail} from "../../../../../../../../../../../../Redux/Slices/userMailSlice.js";

export const handleClick = (frontendSlug, changeBrowseLanguageContent, activeLanguageToPost, userEmail, activeLanguage, dropdownAccountSlugActive,setActiveDropdownForm, setActiveDropdownFormContent, languageBackend, responseMessage, setResponseMessage, changeLanguageFormAlert) => {
  if (frontendSlug === "submit") {
    if(languageBackend === activeLanguageToPost) {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        error: activeLanguage === "English" ? changeLanguageFormAlert?.error?.labelEng : changeLanguageFormAlert?.error?.labelHr
      })

      let timeout = setTimeout(() => {
        setResponseMessage({...responseMessage, error: null})
      }, 3000)

      return () => clearTimeout(timeout)
    }
    else {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        success: activeLanguage === "English" ? changeLanguageFormAlert?.success?.labelEng : changeLanguageFormAlert?.success?.labelHr
      })

      let timeout = setTimeout(() => {
        setResponseMessage({
          ...responseMessage,
          success: null
        })

        changeBrowseLanguageContent({
          newBrowseLanguage: activeLanguageToPost,
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