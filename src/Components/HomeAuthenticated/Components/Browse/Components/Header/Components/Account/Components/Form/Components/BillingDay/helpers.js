
export const handleValueToRender = (valueForChange, activeLanguage, inputs) => {
  if(valueForChange) {
    if(activeLanguage === "English") return inputs?.options?.find((el) => valueForChange === el?.value)?.titleEng
    else if(activeLanguage === "Hrvatski") return inputs?.options?.find((el) => valueForChange === el?.value)?.titleHr
    else return null
  }
  else {
    if(activeLanguage === "English") return inputs?.placeholderEng
    else if(activeLanguage === "Hrvatski") return inputs?.placeholderHr
    else return null
  }
}


export const handleClick = (frontendSlug, setActiveForm, setActiveFormContent, changeBillingDay, userEmail, activeLanguage, valueForChange, setValueForChange, isFetchedUsersData, changeBillingDayFormAlert, responseMessage, setResponseMessage) => {
  if(frontendSlug === "submit") {
    if(isFetchedUsersData[userEmail]?.billingDay === valueForChange) {
       console.log("if_trigger")
      window.scrollTo(0, 0)
      setResponseMessage({...responseMessage, error: activeLanguage === "English" ? changeBillingDayFormAlert?.error?.labelEng : changeBillingDayFormAlert?.error?.labelHr})

      let timeout = setTimeout(() => {
        setResponseMessage(null)
        setValueForChange(null)
      }, 3000)

      return () => clearTimeout(timeout)
    }
    else {
      window.scrollTo(0, 0)
      setResponseMessage({...responseMessage, success: activeLanguage === "English" ? changeBillingDayFormAlert?.success?.labelEng : changeBillingDayFormAlert?.success?.labelHr})

      let timeout = setTimeout(() => {
        changeBillingDay({
          email: userEmail,
          activeLanguage,
          newBillingDay: valueForChange
        })
        setResponseMessage({...responseMessage, succes: null})
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }
  else if(frontendSlug === "back") {
    setActiveForm(null)
    setActiveFormContent(null)
  }
  else return null
}
