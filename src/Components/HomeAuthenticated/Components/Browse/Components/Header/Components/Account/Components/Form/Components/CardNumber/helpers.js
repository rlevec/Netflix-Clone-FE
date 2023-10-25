export const handleClick = (frontendSlug, setActiveFormContent, setActiveForm, setNextStepInitiated) => {
  if (frontendSlug === "back") {
    setActiveFormContent(null)
    setActiveForm(null)
  } else if (frontendSlug === "next") {
    setNextStepInitiated(frontendSlug)
  } else return null
}


export const handleStateResetDueFormChange = (frontendSlug, setActiveForm, query, setQuery, fieldError, setFieldError) => {
  setActiveForm(frontendSlug);
  setQuery({
    ...query,
    cardNumber: "",
    expirationDate: "",
    ccv: "",
    firstName: "",
    lastName: ""
  });
  setFieldError({
    ...fieldError,
    cardNumber: false,
    expirationDate: false,
    ccv: false,
    firstName: false,
    lastName: false
  })
}