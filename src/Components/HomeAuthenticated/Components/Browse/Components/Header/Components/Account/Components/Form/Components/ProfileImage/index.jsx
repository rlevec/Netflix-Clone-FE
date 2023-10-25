import React, {useState} from "react";

import {StyledProfileImage} from "./styledProfileImage.js";

import {useSelector} from "react-redux";

import {usePostUpdateUserProfileImageMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserUpdateProfileImage.js"

import {handleClick} from "./helpers.js";

export default function ProfileImage(props) {
  const {
    setActiveDropdownForm,
    setActiveDropdownFormContent,
    dropdownAccountSlugActive,
    activeDropdownFormContent: {
      label,
      buttons
    },
    editableProfileImages,
    changeProfileImageFormAlert,
    editableImageBackend
  } = props


  const [updateProfileImage] = usePostUpdateUserProfileImageMutation()


  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [imageSelected, setImageSelected] = useState(editableImageBackend || null)

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  return (
    <StyledProfileImage inactive={responseMessage?.success || responseMessage?.error}>
      <div className="profileImages_wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="profileImages_title">
          {activeLanguage === "English" ? label?.labelEng : label?.labelHr}
        </div>
        <div className="profileImages_images-container">
          {editableProfileImages?.map((el) => {
            const {
              id,
              image,
              frontendSlug
            } = el

            return (
              <div
                className="profileImages_images-image-container" key={id}
                onClick={() => {
                  setImageSelected(frontendSlug)
                }
                }
              >
                <img
                  className={(frontendSlug === imageSelected) ? "selectedProfileImage" : "profileImage"}
                  src={image} alt="profile-image"/>
              </div>
            )
          })}
        </div>
        <div className="profileImages-buttons-container">
          {buttons?.map((el) => {
            const {
              id,
              frontendSlug,
              buttonTitleEng,
              buttonTitleHr
            } = el

            return (
              <div className={`${frontendSlug}Button-container`}>
                <button
                  key={id}
                  onClick={() => handleClick(frontendSlug, updateProfileImage, imageSelected, userEmail, activeLanguage, dropdownAccountSlugActive, setActiveDropdownForm, setActiveDropdownFormContent, editableProfileImages, responseMessage, setResponseMessage, changeProfileImageFormAlert, editableImageBackend, setImageSelected)}
                  disabled={frontendSlug === "submit" ? !imageSelected : false}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledProfileImage>
  )
}