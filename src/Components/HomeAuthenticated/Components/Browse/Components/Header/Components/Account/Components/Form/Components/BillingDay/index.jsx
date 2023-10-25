import React, {useState} from "react";

import {StyledBillingDay} from "./styledBillingDay.js";

import {ReactComponent as CarretUp} from "../../../../../../../../../../../../Assets/svg/carretUp.svg";
import {ReactComponent as CarretDown} from "../../../../../../../../../../../../Assets/svg/carretDown.svg";

import {useSelector} from "react-redux";


import {usePostChangeUserBillingDayMutation} from "../../../../../../../../../../../../Redux/Injections/UserPostRequests/postUserChangeBillingDay.js"

import {handleClick, handleValueToRender} from "./helpers.js";


export default function BillingDay(props) {
  const {
    activeFormContent:{
      buttons,
      header,
      inputs
    },
    setActiveFormContent,
    setActiveForm,
    isFetchedUsersData,
    changeBillingDayFormAlert
  } = props

  const [changeBillingDay] = usePostChangeUserBillingDayMutation()


  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const [dropdownActive, setDropdownActive] = useState(false)

  const [valueForChange, setValueForChange] = useState(null)

  const [responseMessage, setResponseMessage] = useState({success: null, error: null})

  return (
    <StyledBillingDay inactive={responseMessage?.success || responseMessage?.error} valueForChange={valueForChange}>
      <div className="billing_day-wrapper">
        {responseMessage?.success && <div className="form-success">{responseMessage?.success}</div>}
        {responseMessage?.error && <div className="form-error">{responseMessage?.error}</div>}
        <div className="billing_day-title">
          {activeLanguage === "English" ? header?.labelEng : header?.labelHr}
        </div>
          <div className="billing_inputs-dropdown-container">
            <div className="billing_input-active-container" onClick={() => setDropdownActive(!dropdownActive)}>
              <div className="billing_input-value">{handleValueToRender(valueForChange, activeLanguage, inputs)}</div>
              <div className="billing_input-svg-container">{dropdownActive ? <CarretDown/> : <CarretUp/>}</div>
            </div>
            {dropdownActive && (
              <div className="billing_dropdown-container">
                {
                inputs?.options?.map((el) => {
                  const {
                    id,
                    value,
                    titleEng,
                    titleHr
                  } = el

                  return (
                    <div className="billing_dropdown-content" key={id} onClick={() => {setValueForChange(value); setDropdownActive(false)}}>
                      <div>{activeLanguage === "English" ? titleEng : titleHr}</div>
                    </div>
                  )
                })
              }
              </div>
            )}
          </div>
        <div className="billing_buttons-container">
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
                  onClick={() => handleClick(frontendSlug, setActiveForm, setActiveFormContent, changeBillingDay, userEmail, activeLanguage, valueForChange, setValueForChange, isFetchedUsersData, changeBillingDayFormAlert, responseMessage, setResponseMessage)}
                  disabled={frontendSlug === "submit" ? !valueForChange : false}
                  key={id}
                >
                  {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </StyledBillingDay>
  )
}