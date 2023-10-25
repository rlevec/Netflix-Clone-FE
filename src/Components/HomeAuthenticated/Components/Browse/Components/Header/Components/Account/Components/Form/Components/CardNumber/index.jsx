import React, {useState} from "react";

import {StyledCardNumber} from "./styledCardNumber.js";

import {
  handleStateResetDueFormChange,
  handleClick
} from "./helpers.js";

import {useSelector} from "react-redux";

import FormData from "./Components/FormData/index.jsx";


export default function CardNumber(props) {

  const {
    activeFormContent: {
      buttons,
      header,
      activeForm: {
        activeFormCreditCardTitleEng,
        activeFormCreditCardTitleHr,
        activeFormInputs,
        activeFormButtons,
        paymentImages,
        paymentMethodsInputSelection,
      }
    },
    setActiveFormContent,
    isFetchedUsersData,
    changeCardNumberFormAlert,
    setActiveForm,
  } = props

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)


  const [query, setQuery] = useState({
    cardNumber: "",
    expirationDate: "",
    ccv: "",
    firstName: "",
    lastName: "",
  })
  const [fieldError, setFieldError] = useState({
    cardNumber: false,
    expirationDate: false,
    ccv: false,
    firstName: false,
    lastName: false,
  })

  const [activeCardForm, setActiveCardForm] = useState(null)
  const [nextStepInitiated, setNextStepInitiated] = useState(false)


  if (nextStepInitiated) {
    return <FormData
      isFetchedUsersData={isFetchedUsersData}
      changeCardNumberFormAlert={changeCardNumberFormAlert}
      setNextStepInitiated={setNextStepInitiated}
      activeFormCreditCardTitleEng={activeFormCreditCardTitleEng}
      activeFormCreditCardTitleHr={activeFormCreditCardTitleHr}
      activeFormInputs={activeFormInputs}
      paymentImages={paymentImages}
      activeCardForm={activeCardForm}
      query={query} setQuery={setQuery}
      fieldError={fieldError}
      setFieldError={setFieldError}
      activeFormButtons={activeFormButtons}
      setActiveFormContent={setActiveFormContent}
      setActiveForm={setActiveForm}
    />
  } else {
    return (
      <StyledCardNumber>
        <div className="account_card-number-wrapper">
          <div className="account_card-number-title">
            {activeLanguage === "English" ? header?.labelEng : header?.labelHr}
          </div>
          <div className="account_card-number-inputs">
            <div className="account_card-number-inputs-container">
              {
                paymentMethodsInputSelection?.map((el) => {
                  const {id, frontendSlug, paymentImages, placeholderEng, placeholderHr} = el

                  return (
                    <div
                      key={id}
                      className={activeCardForm === frontendSlug ? "account_card-number-single-input-container active" : "account_card-number-single-input-container inactive"}
                      onClick={() => handleStateResetDueFormChange(frontendSlug, setActiveCardForm, query, setQuery, fieldError, setFieldError)}
                    >
                      <div className="account_card-number-single-input-images-title-container">
                        <div
                          className="account_card-number-single-input-title">{activeLanguage === "English" ? placeholderEng : placeholderHr}</div>
                        <div className="account_card-number-single-input-images-wrapper">
                          {paymentImages?.map((item) => {
                            const {id, image, alt} = item

                            return (
                              <div className="account_card-number-single-input-image-container" key={id}>
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
          <div className="account_card-number-buttons-container">
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
                    onClick={() => handleClick(frontendSlug, setActiveFormContent, setActiveForm, setNextStepInitiated)}
                    disabled={frontendSlug === "next" ? (activeCardForm === null) : false}
                  >
                    {activeLanguage === "English" ? buttonTitleEng : buttonTitleHr}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </StyledCardNumber>
    )
  }
}