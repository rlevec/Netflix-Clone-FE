//reset all state values when changing forms due preventing reusable component to use it's state values in both forms
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