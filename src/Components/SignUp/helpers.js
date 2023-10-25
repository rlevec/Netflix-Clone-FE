//filter content to render by currentStep state value
export const handleContentToRenderByCurrentStep = (isFetchedSignUpFormData, currentStep) => isFetchedSignUpFormData?.nonExistant?.content?.filter((el) => el?.step === currentStep)


//generate max step value
export const handleMaxStep = (isFetchedSignUpFormData) => {
  let stepArray = []

  isFetchedSignUpFormData?.nonExistant?.content?.forEach((el) => stepArray?.push(el?.step))

  return Math.max(...stepArray)
}


//disable buttons by each step registration dependency
export const isStepButtonDisabled = (currentStep, query, fieldError, activePlan, activeForm) => {
  if (currentStep === 1) return false
  else if (currentStep === 2) {
    if (query?.email === "" || query?.password === "" || fieldError?.email || fieldError?.password) return true
    else return false
  } else if (currentStep === 3) return false
  else if (currentStep === 4) {
    if (activePlan === "") return true
    else return false
  } else if (currentStep === 5) {
    if (activeForm === "") return true
    else return false
  } else return false
}


export const handleFullPrefix = (activeLanguage, geoLocationCountry) => {
  let newGeoLocationCountry
  let newActiveLanguage

  if (geoLocationCountry !== "") {
    if (geoLocationCountry === "Croatia") newGeoLocationCountry = "hr"
    else newGeoLocationCountry = "en"
  }
  if (activeLanguage !== "") {
    if (activeLanguage === "Hrvatski") newActiveLanguage = "hr"
    else if (activeLanguage === "English") newActiveLanguage = "en"
    else newActiveLanguage = "en"
  }

  let fullPrefix = () => {
    if (newGeoLocationCountry === newActiveLanguage) return newActiveLanguage
    else return `${newGeoLocationCountry}-${newActiveLanguage}`
  }

  return fullPrefix()
}
