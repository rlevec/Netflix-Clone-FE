import {setUserMail} from "../../../../../../../../../../../../Redux/Slices/userMailSlice.js";

export const handleClick = (frontendSlug, changeMaturitySettings, activeMaturitySettings, userEmail, activeLanguage, dropdownAccountSlugActive,setActiveDropdownForm, setActiveDropdownFormContent, maturitySettingsBackend, responseMessage, setResponseMessage, changeMaturitySettingsFormAlert) => {
  if (frontendSlug === "submit") {
    if(activeMaturitySettings === maturitySettingsBackend) {
      window.scrollTo(0, 0)

      setResponseMessage({
        ...responseMessage,
        error: activeLanguage === "English" ? changeMaturitySettingsFormAlert?.error?.labelEng : changeMaturitySettingsFormAlert?.error?.labelHr
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
        success: activeLanguage === "English" ? changeMaturitySettingsFormAlert?.success?.labelEng : changeMaturitySettingsFormAlert?.success?.labelHr
      })

      let timeout = setTimeout(() => {
        changeMaturitySettings({
          newMaturitySetting: activeMaturitySettings,
          email: userEmail,
          activeLanguage,
          initialAccountName:dropdownAccountSlugActive
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