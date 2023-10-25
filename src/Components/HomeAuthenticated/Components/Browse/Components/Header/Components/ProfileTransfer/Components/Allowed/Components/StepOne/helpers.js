export const renderProfileImage = (image, imageSlug, editableProfileImages, profileImages) => {
  if(image) return editableProfileImages?.find((el => el?.frontendSlug === image))?.image
  else return profileImages?.find((el => el?.frontendSlug === imageSlug))?.image
}