import React from "react";

import {StyledStepFive} from "./styledStepFive.js";

import {useSelector} from "react-redux";

import {ReactComponent as Lock} from "../../../../../../Assets/svg/lock.svg";

import {handleStateResetDueFormChange} from "./helpers.js";

export default function StepFive(props) {
  const {
    data: {
      stepTitleEng,
      stepTitleHr,
      stepDescEng,
      stepDescHr,
      stepInfoOneEng,
      stepInfoOneHr,
      stepInfoTwoEng,
      stepInfoTwoHr,
      encryptionDescEng,
      encryptionDescHr,
      paymentMethodsInputSelection
    }, activeForm, setActiveForm, setQuery, query, setFieldError, fieldError
  } = props

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  return (
    <StyledStepFive>
      <div className="step_five-content-title">{activeLanguage === "English" ? stepTitleEng : stepTitleHr}</div>
      <div className="step_five-content-desc">{activeLanguage === "English" ? stepDescEng : stepDescHr}</div>
      <div className="step_five-content-info">
        <div className="step_five-info-one">{activeLanguage === "English" ? stepInfoOneEng : stepInfoOneHr}</div>
        <div className="step_five-info-two">{activeLanguage === "English" ? stepInfoTwoEng : stepInfoTwoHr}</div>
      </div>
      <div className="step_five-content-inputs">
        <div className="step_five-content-inputs-encryption-container">
          <div
            className="step_five-content-inputs-encryption-container-title">{activeLanguage === "English" ? encryptionDescEng : encryptionDescHr}</div>
          <div className="step_five-content-inputs-encryption-container-icon"><Lock/></div>
        </div>
        <div className="step_five-content-inputs-container">
          {
            paymentMethodsInputSelection?.map((el) => {
              const {id, frontendSlug, paymentImages, placeholderEng, placeholderHr} = el

              return (
                <div
                  key={id}
                  className={activeForm === frontendSlug ? "step_five-content-single-input-container active" : "step_five-content-single-input-container inactive"}
                  onClick={() => handleStateResetDueFormChange(frontendSlug, setActiveForm, query, setQuery, fieldError, setFieldError)}
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
    </StyledStepFive>
  )
}