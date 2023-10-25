import React from "react";

import {StyledActive} from "./styledActive.js";
import {useSelector} from "react-redux";

import {handleValueToRender} from "./helpers.js";

export default function Active(props) {
  const {
    accountData,
    accountReadOnlyData,
    accountEditableData,
    setActiveDropdownForm,
    setActiveDropdownFormContent
  } = props

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)


  return (
    <StyledActive>
      <div className="active_wrapper">
        <div className="active_readOnly-container">
          {accountReadOnlyData?.map((el) => {
            const {
              id,
              frontendSlug,
              labelEng,
              labelHr,
              form
            } = el

            if (frontendSlug === "profileImage") {
              return <button onClick={() => {
                setActiveDropdownForm(frontendSlug)
                setActiveDropdownFormContent(form)
              }}>{activeLanguage === "English" ? labelEng : labelHr}</button>
            } else {
              return (
                <div className="active_readOnly-single-content-container" key={id}>
                  <div
                    className="active_readOnly-single-content-label">{activeLanguage === "English" ? labelEng : labelHr}:
                  </div>
                  <div
                    className="active_readOnly-single-content-value">{handleValueToRender(accountData[frontendSlug], activeLanguage)}</div>
                </div>
              )
            }

          })}
        </div>
        <div className="active_editable-container">
          {accountEditableData?.map((el) => {
            const {
              id,
              frontendSlug,
              labelEng,
              labelHr,
              form
            } = el

            if (frontendSlug === "profileImage") return null

            else {
              return (
                <div
                  className="active_editable-single-content-container"
                  key={id}
                  onClick={() => {
                    setActiveDropdownForm(frontendSlug)
                    setActiveDropdownFormContent(form)
                  }}
                >
                  <div
                    className="active_editable-single-content-label">{activeLanguage === "English" ? labelEng : labelHr}</div>
                </div>
              )
            }

          })}
        </div>
      </div>
    </StyledActive>
  )
}