export const filterContentByStep = (content, currentStep) => content?.filter((el) => el?.step === currentStep)

export const handleMinMaxStep = (content) => {
  let stepsArr = []

  content?.forEach((el) => {
    const {
      step
    } = el

    stepsArr?.push(step)
  })

  let maxStepValue = Math.max(...stepsArr)
  let minStepValue = Math.min(...stepsArr)

  return {
    maxStepValue,
    minStepValue
  }
}


export const isButtonDisabled = (currentStep, profileSelected, query, fieldError, activePlanSelected, formSelected) => {
  if (currentStep === handleMinMaxStep()?.minStepValue) return !profileSelected;
  else if (currentStep === 2) {
    return query?.newEmail === "" ||
      fieldError?.newEmail ||
      query?.newPassword === "" ||
      fieldError?.newPassword;
  } else if (currentStep === 3) return false
  else if (currentStep === 4) return !activePlanSelected;
  else if(currentStep === 5) return !formSelected
  else if(currentStep === handleMinMaxStep()?.maxStepValue) {
    let isAnyQueryEmpty = false
    let isAnyFieldInError = false


    Object.entries(query)?.forEach(([key, val]) => {
      if (val === "") {
        if (formSelected === "maestroCard" && key === "ccv") {
          isAnyQueryEmpty = false
        } else {
          isAnyQueryEmpty = true
          return null
        }
      }
    })

    Object.entries(fieldError)?.forEach(([key, val]) => {
      if (val === true) {
        isAnyFieldInError = true
        return null
      }
    })

    if (isAnyQueryEmpty === false && isAnyFieldInError === false) return false
    else return true

  }
  else return false
}