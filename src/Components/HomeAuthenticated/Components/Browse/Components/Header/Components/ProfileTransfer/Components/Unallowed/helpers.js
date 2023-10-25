export const handleClick = (frontendSlug, updateProfileTransfer, userEmail, activeLanguage, setActiveSubComponent) => {
  if (frontendSlug === "submit") {
    updateProfileTransfer({
      newProfileTransfer: true,
      email: userEmail,
      activeLanguage,
    })?.unwrap()?.then((response) => {
      if(response) setActiveSubComponent(null)
    })?.catch((error) => {
    })
  }
  else if (frontendSlug === "back") setActiveSubComponent(null)
  else return null
}