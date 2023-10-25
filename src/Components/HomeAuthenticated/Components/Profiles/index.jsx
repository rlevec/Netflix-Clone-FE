import React, {useState} from "react";

import {StyledProfiles} from "./styledProfiles.js";

import {ReactComponent as Plus} from "../../../../Assets/svg/plus_borderless.svg";
import {ReactComponent as Edit} from "../../../../Assets/svg/edit.svg";

import {handleIsDisabled, rendereElementsByActiveForm, handleProfileCardActions, handleImages} from "./helpers.jsx";

import {useSelector} from "react-redux";

import EditForm from "./Components/EditForm/index.jsx";


export default function Profiles(props) {

  const {
    allProfilesData: {
      header: initialHeader,
      manage: initialManage,
      profile: initialProfile
    },
    editProfilesData: {
      header: editableHeader,
      buttons: editableButtons,
      editForm: editableForm,
    },
    setActiveForm,
    activeForm,
    isFetchedUsersData,
    initialProfileImages,
    profilesImages,
    profileImagesContent,
    responseErrorMessage,
    responseSuccessMessage,
    setResponseSuccessMessage,
    setResponseErrorMessage,
    setBrowseProfileActive
  } = props


  const userEmail = useSelector((state) => state?.userMail?.userMail)
  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  const [isEditFormActive, setIsEditFormActive] = useState(false)
  const [editProfileActive, setEditProfileActive] = useState(null)

  const [isProfileImagesModalActive, setIsProfileImagesModalActive] = useState(false)

  if (isEditFormActive) return <EditForm setResponseSuccessMessage={setResponseSuccessMessage}
                                         setResponseErrorMessage={setResponseErrorMessage}
                                         profileImagesContent={profileImagesContent}
                                         isProfileImagesModalActive={isProfileImagesModalActive}
                                         setIsProfileImagesModalActive={setIsProfileImagesModalActive}
                                         profilesImages={profilesImages}
                                         initialProfileImages={initialProfileImages}
                                         editableForm={editableForm}
                                         setIsEditFormActive={setIsEditFormActive}
                                         isFetchedUsersData={isFetchedUsersData}
                                         editProfileActive={editProfileActive}

  />
  else {
    return (
      <StyledProfiles editFormActive={activeForm === "editProfiles"}>
        <div className="profiles_wrapper">
          {responseErrorMessage && <div className="profiles_form-error">{responseErrorMessage}</div>}
          {responseSuccessMessage && <div className="profiles_form-success">{responseSuccessMessage}</div>}
          <div
            className="profiles_title">{rendereElementsByActiveForm(activeForm, activeLanguage, initialHeader, initialManage, editableHeader, editableButtons, "header")}</div>
          <div className="profiles_profiles-container">
            {
              isFetchedUsersData[userEmail]?.accounts?.map((el) => {
                const {accountName, forKids, image, imageSlug} = el

                return (
                  <div className="profiles_profile-wrapper" key={accountName}
                       onClick={() => handleProfileCardActions(accountName, activeForm, setActiveForm, setEditProfileActive, setBrowseProfileActive, setIsEditFormActive)}>

                    <div className="profiles_profile-img-container">
                      <div
                        className="profiles_profile-image-rendered-container"><img
                        src={handleImages(image, imageSlug, profilesImages, initialProfileImages)}
                        alt={`image-${image || imageSlug}`}/></div>
                      {activeForm === "editProfiles" && <div className="profiles_profile-edit-container"><Edit/></div>}
                    </div>
                    <div className="profiles_profile-title">{accountName}</div>
                  </div>
                )
              })
            }
            {
              isFetchedUsersData[userEmail]?.accounts?.length <= 4 && (
                <div className="profiles_add-profile-button-wrapper" onClick={() => setActiveForm("addProfileForm")}>
                  <div className="profiles_add-profile-button">
                    <div className="profiles_add-profile-svg-container">
                      <Plus/>
                    </div>
                  </div>
                  <div className="profiles_add-profile-button-title">
                    {activeLanguage === "English" ? initialProfile?.titleEng : initialProfile?.titleHr}
                  </div>
                </div>
              )
            }
          </div>
          <div
            className={activeForm === "initialForm" ? "profiles_manage-button-container" : "profiles_edit-button-container"}>
            <button disabled={handleIsDisabled(isFetchedUsersData, userEmail, activeForm)}
                    onClick={() => activeForm === "initialForm" ? setActiveForm("editProfiles") : setActiveForm("initialForm")}>{rendereElementsByActiveForm(activeForm, activeLanguage, initialHeader, initialManage, editableHeader, editableButtons, "button")}</button>
          </div>
        </div>
      </StyledProfiles>
    )
  }
}