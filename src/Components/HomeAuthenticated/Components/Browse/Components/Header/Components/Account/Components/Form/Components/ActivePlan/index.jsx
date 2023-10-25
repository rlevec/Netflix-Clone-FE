import React, {useState} from "react";

import {ReactComponent as Checked} from "../../../../../../../../../../../../Assets/svg/checked.svg";

import {StyledActivePlan} from "./styledActivePlan.js";

import {useSelector} from "react-redux";

//import {usePostChangeUserActivePlanMutation} from "../../../../../../../../../../../../Redux/Slices/apiSlice.js";
import {usePostChangeUserActivePlanMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeActivePlan.js"

import {handleClick} from "./helpers.js";

export default function ActivePlan(props) {
  const {
    activeFormContent: {
      header,
      buttons,
      planHeader,
      tableContent
    },
    setActiveForm,
    setActiveFormContent,
    isFetchedUsersData,
    changeActivePlanFormAlert
  } = props

  const [changeActivePlan] = usePostChangeUserActivePlanMutation()

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [activePlan, setActivePlan] = useState(isFetchedUsersData[userEmail]?.activePlan || null)

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  return (
    <StyledActivePlan inactive={responseMessage?.success || responseMessage?.error}>
      <div className="active_plan-wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="active_plan-header">
          {activeLanguage === "English" ? header?.labelEng : header?.labelHr}
        </div>
        <div className="step_four-header-container">
          {planHeader?.map((el) => {
            const {frontendSlug, id, titleEng, titleHr} = el

            return (
              <div
                className={activePlan === frontendSlug ? "step_four-header-content-container-active" : "step_four-header-content-container"}
                key={id} onClick={() => setActivePlan(frontendSlug)}>
                {activeLanguage === "English" ? titleEng : titleHr}
              </div>
            )
          })}
        </div>
        <div className="step_four-table-container">
          {tableContent?.rows?.map((el) => {
            const {content, id} = el

            return (
              <div key={id} className="step_four-table-content-container">
                {content?.map((el) => {
                  const {frontendSlug, titleEng, titleHr, title, categorySlug} = el

                  let contentToRender

                  if (frontendSlug?.includes("checkMark")) contentToRender =
                    <div className={categorySlug === activePlan ? "svg-container-active" : "svg-container"}><Checked/>
                    </div>
                  else contentToRender = <div
                    className={activePlan === categorySlug ? "step_four-table-single-text-content-container-active" : "step_four-table-single-text-content-container"}>{(activeLanguage === "English" ? titleEng : titleHr) || title}</div>
                  return <div className="step_four-table-single-content-container"
                              key={frontendSlug}>{contentToRender}</div>
                })}
              </div>
            )
          })}
        </div>
        <div className="account_active-plan-buttons-container">
          {buttons?.map((el) => {
            const {
              id,
              frontendSlug,
              buttonTitleEng,
              buttonTitleHr
            } = el


            return (
              <div key={id} className={`${frontendSlug}Button-container`}>
                <button
                  onClick={() => handleClick(frontendSlug, setActiveForm, setActiveFormContent, changeActivePlan, userEmail, activeLanguage, activePlan, setActivePlan, isFetchedUsersData, changeActivePlanFormAlert, responseMessage, setResponseMessage)}
                  disabled={frontendSlug === "submit" ? !activePlan : false}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledActivePlan>
  )
}