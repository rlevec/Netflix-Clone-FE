import React from "react";

import {ReactComponent as CheckMark} from "../../../../../../../../../../Assets/svg/checked.svg";

import {StyledUnallowed} from "./styledUnallowed.js";

import {usePostUpdateUserProfileTransferMutation} from "../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeUpdateProfileTransfer.js"
import {useSelector} from "react-redux";

import {handleClick} from "./helpers.js";

export default function Unallowed(props) {

  const {
    setActiveSubComponent,
    unAllowed
  } = props


  const [updateProfileTransfer] = usePostUpdateUserProfileTransferMutation()

  const userEmail = useSelector((state) => state?.userMail?.userMail)
  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)


  return (
    <StyledUnallowed>
      <div className="profile_transfer-unallowed-wrapper">
        <div
          className="profile_transfer-unallowed-wrapper-header">{activeLanguage === "English" ? unAllowed?.header?.labelEng : unAllowed?.header?.labelHr}</div>
        <div className="profile_transfer-unallowed-wrapper-content">
          {unAllowed?.content?.map((el) => {
            const {
              id,
              labelEng,
              labelHr
            } = el

            return (
              <div className="profile_transfer-unallowed-wrapper-single-content">
                <div className="profile_transfer-unallowed-wrapper-single-content-svg-container">
                  <CheckMark/>
                </div>
                <div className="profile_transfer-unallowed-wrapper-single-content-desc">
                  {activeLanguage === "English" ? labelEng : labelHr}
                </div>
              </div>
            )
          })}
        </div>
        <div className="profile_transfer-unallowed-wrapper-buttons">
          {unAllowed?.buttons?.map((el) => {
            const {
              id,
              frontendSlug,
              labelEng,
              labelHr
            } = el

            return (
              <div className={`${frontendSlug}Button-container`}>
                <button
                  onClick={() => handleClick(frontendSlug, updateProfileTransfer, userEmail, activeLanguage, setActiveSubComponent)}>{activeLanguage === "English" ? labelEng : labelHr}</button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledUnallowed>
  )
}