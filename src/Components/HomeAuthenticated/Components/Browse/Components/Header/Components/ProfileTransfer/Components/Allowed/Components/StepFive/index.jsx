import React from "react";

import {StyledStepFive} from "./styledStepFive.js";
import {
  handleStateResetDueFormChange
} from "./helpers.js";
import {useSelector} from "react-redux";

import {ReactComponent as Lock} from "../../../../../../../../../../../../Assets/svg/lock.svg";

export default function StepFive(props) {
  const {
    formSelected,
    setFormSelected,
    renderContent,
    query,
    setQuery,
    fieldError,
    setFieldError
  } = props



  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  return (
    <StyledStepFive>
      <div className="step_five-wrapper">
        <div
          className="step_five-content-title">{activeLanguage === "English" ? renderContent[0]?.stepTitleEng : renderContent[0]?.stepTitleHr}</div>
        <div
          className="step_five-content-desc">{activeLanguage === "English" ? renderContent[0]?.stepDescEng : renderContent[0]?.stepDescHr}</div>
        <div className="step_five-content-info">
          <div
            className="step_five-info-one">{activeLanguage === "English" ? renderContent[0]?.stepInfoOneEng : renderContent[0]?.stepInfoOneHr}</div>
          <div
            className="step_five-info-two">{activeLanguage === "English" ? renderContent[0]?.stepInfoTwoEng : renderContent[0]?.stepInfoTwoHr}</div>
        </div>
        <div className="step_five-content-inputs">
          <div className="step_five-content-inputs-encryption-container">
            <div
              className="step_five-content-inputs-encryption-container-title">{activeLanguage === "English" ? renderContent[0]?.encryptionDescEng : renderContent[0]?.encryptionDescHr}</div>
            <div className="step_five-content-inputs-encryption-container-icon"><Lock/></div>
          </div>
          <div className="step_five-content-inputs-container">
            {
              renderContent[0]?.paymentMethodsInputSelection?.map((el) => {

                const {id, frontendSlug, paymentImages, placeholderEng, placeholderHr} = el

                return (
                  <div
                    key={id}
                    className={formSelected === frontendSlug ? "step_five-content-single-input-container active" : "step_five-content-single-input-container inactive"}
                    onClick={() => handleStateResetDueFormChange(frontendSlug, setFormSelected, query, setQuery, fieldError, setFieldError)}
                  >
                    <div className="step_five-content-single-input-images-title-container">
                      <div
                        className="step_five-content-single-input-title">{activeLanguage === "English" ? placeholderEng : placeholderHr}</div>
                      <div className="step_five-content-single-input-images-wrapper">
                        {paymentImages?.map((item) => {
                          const {id, image, alt} = item

                          return (
                            <div className="step_five-content-single-input-image-container" key={id}>
                              <img src={image} alt={alt}/>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </StyledStepFive>
  )
}