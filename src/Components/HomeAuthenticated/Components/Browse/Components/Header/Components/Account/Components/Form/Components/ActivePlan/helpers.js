

export const handleClick = (frontendSlug, setActiveForm, setActiveFormContent, changeActivePlan, userEmail, activeLanguage, activePlan, setActivePlan, isFetchedUsersData, changeActivePlanFormAlert, responseMessage, setResponseMessage) => {
  if (frontendSlug === "submit") {
    if(isFetchedUsersData[userEmail]?.activePlan === activePlan) {
      window.scrollTo(0, 0)
      setResponseMessage({...responseMessage, error: activeLanguage === "English" ? changeActivePlanFormAlert?.error?.labelEng : changeActivePlanFormAlert?.error?.labelHr})

      let timeout = setTimeout(() => {
        setResponseMessage({...responseMessage, error: null})
        setActivePlan(null)
      }, 3000)

      return () => clearTimeout(timeout)
    }

    else {
      window.scrollTo(0, 0)
      setResponseMessage({...responseMessage, success: activeLanguage === "English" ? changeActivePlanFormAlert?.success?.labelEng : changeActivePlanFormAlert?.success?.labelHr})

      let timeout = setTimeout(() => {
        setResponseMessage({...responseMessage, success: null})

        changeActivePlan({
          email: userEmail,
          activeLanguage,
          newActivePlan: activePlan
        })
      }, 3000)

      return () => clearTimeout(timeout)

    }
  }
  else if (frontendSlug === "back") {
    setActiveForm(null)
    setActiveFormContent(null)
  }
}
