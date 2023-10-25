import React from "react";

import {StyledStepOne} from "./styledStepOne.js";
import {useSelector} from "react-redux";

import {renderProfileImage} from "./helpers.js";

export default function StepOne(props) {
 const {
   renderContent,
   profileImages,
   editableProfileImages,
   isFetchedUsersData,
   profileSelected,
   setProfileSelected,
 } = props

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  return (
    <StyledStepOne accountLength={isFetchedUsersData[userEmail]?.accounts?.length}>
      <div className="step_one-wrapper">
        <div className="step_one-title">{activeLanguage === "English" ? renderContent[0]?.header?.labelEng : renderContent[0]?.header?.labelHr}</div>
        <div className="step_one-content">
          {isFetchedUsersData[userEmail]?.accounts?.map((el) => {
            const {
              accountName,
              imageSlug,
              image
            } = el

            return (
              <div
                className={profileSelected?.accountName === accountName ? "step_one-single-content-container active" : "step_one-single-content-container"}
                onClick={() => setProfileSelected(el)}
              >
                <div className="step_one-single-content-image-container">
                  <img src={renderProfileImage(image, imageSlug, editableProfileImages, profileImages)} alt="profile-image"/>
                </div>
                <div className="step_one-single-content-account-name">
                  {accountName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </StyledStepOne>
  )
}