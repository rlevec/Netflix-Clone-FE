import React, {useState} from "react";

import {StyledGameHandleInfo} from "./styledGameHandleInfo.js";

import {useSelector} from "react-redux";

import {ReactComponent as Close} from "../../../../../../../../Assets/svg/close.svg";
import {ReactComponent as GameController} from "../../../../../../../../Assets/svg/game_controller.svg";

import {handleFilterContentByStep, handleMaxMinStepValue, handleSvgBySlug} from "./helpers.jsx";

export default function GameHandleInfo(props) {

  const {
    gameHandleModal: {
      buttons,
      content
    },
    setInfoModalOpen
  } = props

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

  const [currentStep, setCurrentStep] = useState(1)

  return (
    <StyledGameHandleInfo>
      <div className="gameHandleInfo_wrapper">
        <div
          className="gameHandleInfo_close-icon-container"
          onClick={() => setInfoModalOpen(false)}
        ><Close/>
        </div>
        <div className="gameHandleInfo_content-container">
          {currentStep === 1 &&
            handleFilterContentByStep(content, currentStep)?.map((el) => {
              const {
                avatarImage,
                descEng,
                descHr,
                gameName,
                headerTitleEng,
                headerTitleHr,
                id,
                name,
              } = el

              return (
                <div
                  key={id}
                     className="gameHandleInfo_content-step_1-container"
                >
                   <div className="gameHandleInfo_content-step-1-image-container">
                     <img src={avatarImage} alt="avatar_image"/>
                   </div>
                  <div className="gameHandleInfo_content-step-1-name-game-name-container">
                    <div className="gameHandleInfo_content-step-1-name">
                      {name}
                    </div>
                    <div className="gameHandleInfo_content-step-1-game-name-svg-container">
                      <div className="gameHandleInfo_content-step-1-svg-container"><GameController/></div>
                      <div className="gameHandleInfo_content-step-1-game-name-container">{gameName}</div>
                    </div>
                  </div>
                  <div className="gameHandleInfo_content-step-1-header-desc-container">
                    <div className="gameHandleInfo_content-step-1-header">
                      {activeLanguage === "English" ? headerTitleEng : headerTitleHr}
                    </div>
                    <div className="gameHandleInfo_content-step-1-desc">
                      {activeLanguage === "English" ? descEng : descHr}
                    </div>
                  </div>
                </div>
              )
            })
          }
          {currentStep === 2 &&
            handleFilterContentByStep(content, currentStep)?.map((el) => {
              const {
                descEng,
                descHr,
                headerTitleEng,
                headerTitleHr,
                id,
                imagesContent,
              } = el

              return (
                <div
                  key={id}
                  className="gameHandleInfo_content-step-2-container"
                >
                  <div className="gameHandleInfo_content-step-2-content-container">
                    {imagesContent?.map((el) => {
                      const {
                        id,
                        frontendSlug,
                        labelEng,
                        labelHr,
                      } = el

                      return (
                        <div key={id} className="gameHandleInfo_content-step-2-content">
                          <div className="gameHandleInfo_content-step-2-content-svg-container">{handleSvgBySlug(frontendSlug)}</div>
                            <div className="gameHandleInfo_content-step-2-content-label">{activeLanguage === "English" ? labelEng : labelHr}</div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="gameHandleInfo_content-step_2-header-desc-container">
                    <div className="gameHandleInfo_content-step_2-header">{activeLanguage === "English" ? headerTitleEng : headerTitleHr}</div>
                    <div className="gameHandleInfo_content-step_2-desc">{activeLanguage === "English" ? descEng : descHr}</div>
                  </div>
                </div>
              )
            })
          }
          {currentStep === 3 &&
            handleFilterContentByStep(content, currentStep)?.map((el) => {
              const {
                descEng,
                descHr,
                headerTitleEng,
                headerTitleHr,
                id,
                imagesContent
              } = el

              return (
                <div
                  key={id}
                  className="gameHandleInfo_content-step-3-container"
                >
                  <div className="gameHandleInfo_content-step-3-content-container">
                    {imagesContent?.map((el) => {
                      const {
                        id,
                        frontendSlug,
                        nick
                      } = el

                      return (
                        <div key={id} className="gameHandleInfo_content-step-3-content">
                          <div className={`gameHandleInfo_content-step-3-content-svg-container-${frontendSlug}`}>{handleSvgBySlug(frontendSlug)}</div>
                          <div className="gameHandleInfo_content-step-3-content-label">{nick}</div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="gameHandleInfo_content-step_3-header-desc-container">
                    <div className="gameHandleInfo_content-step_3-header">{activeLanguage === "English" ? headerTitleEng : headerTitleHr}</div>
                    <div className="gameHandleInfo_content-step_3-desc">{activeLanguage === "English" ? descEng : descHr}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="gameHandleInfo_buttons-fill-wrapper">
          <div className="gameHandleInfo_buttons-fill-container">
            <div className="gameHandleInfo_fill-mark-container">
              {handleMaxMinStepValue(content)?.stepsArray?.map((el) => {
                if(el === currentStep) return <div className="active-fill"></div>
                else return <div className="inactive-fill"></div>
              })}
            </div>
            <div className="gameHandleInfo_buttons-container">
              {buttons?.map((el) => {
                const {
                  frontendSlug,
                  id,
                  labelEng,
                  labelHr,
                } = el

                if (frontendSlug === "back") {
                  if (currentStep !== handleMaxMinStepValue(content)?.minValue) return <button onClick={() => setCurrentStep(currentStep - 1)} className={`button-${frontendSlug}`} key={id}>{activeLanguage === "English" ? labelEng : labelHr}</button>
                } else if (frontendSlug === "next") {
                  if (currentStep !== handleMaxMinStepValue(content)?.maxValue) return <button onClick={() => setCurrentStep(currentStep + 1)} className={`button-${frontendSlug}`} key={id}>{activeLanguage === "English" ? labelEng : labelHr}</button>
                } else if (frontendSlug === "done") {
                  if (currentStep === handleMaxMinStepValue(content)?.maxValue) return <button onClick={() => setInfoModalOpen(false)} key={id} className={`button-${frontendSlug}`}>{activeLanguage === "English" ? labelEng : labelHr}</button>
                } else return null
              })}
            </div>
          </div>
        </div>
      </div>
    </StyledGameHandleInfo>
  )
}