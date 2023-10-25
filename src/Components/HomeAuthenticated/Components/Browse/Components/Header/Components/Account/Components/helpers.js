export const generateUserObject = (isFetchedUsersData, userEmail) => {
  const matchUserObject = isFetchedUsersData[userEmail]

  const {
    billingDay,
    cardNumber,
    ccv,
    firstName,
    lastName,
    loggedStatus,
    password,
    account,
    registerDate,
    activePlan
  } = matchUserObject

  return {
    billingDay,
    cardNumber,
    ccv,
    firstName,
    lastName,
    loggedStatus,
    password,
    account,
    registerDate,
    activePlan
  }
}


export const handleUserValueToRender = (frontendSlug, isFetchedUsersData, userEmail) => {
  if (frontendSlug === "email") return userEmail
  else if (frontendSlug === "password") return generateUserObject(isFetchedUsersData, userEmail)?.password
  else if (frontendSlug === "cardNumber") return generateUserObject(isFetchedUsersData, userEmail)?.cardNumber
  else if (frontendSlug === "billingDay") return `${generateUserObject(isFetchedUsersData, userEmail)?.billingDay}. each month`
}

export const handleProfileImage = (imageSlug, image, editableProfileImages, profileImages) => {
  if (image) return editableProfileImages?.find((el) => el?.frontendSlug === image)?.image
  else if (imageSlug) return profileImages?.find((el) => el?.frontendSlug === imageSlug)?.image
  else return null
}