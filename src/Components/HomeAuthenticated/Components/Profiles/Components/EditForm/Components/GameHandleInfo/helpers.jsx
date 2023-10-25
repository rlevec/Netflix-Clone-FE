import React from "react";

import {ReactComponent as GameController} from "../../../../../../../../Assets/svg/game_controller.svg";
import {ReactComponent as Invite} from "../../../../../../../../Assets/svg/invitation.svg";
import {ReactComponent as Online} from "../../../../../../../../Assets/svg/online.svg";
import {ReactComponent as Award} from "../../../../../../../../Assets/svg/award.svg";

export const handleFilterContentByStep = (content, currentStep) => content?.filter((item) => item?.step === currentStep)

export const handleMaxMinStepValue = (content) => {
  let stepsArray = []

  content?.forEach((el) => {
    const {
      step
    } = el

    stepsArray?.push(step)
  })


  const maxValue =  Math.max(...stepsArray)
  const minValue = Math.min(...stepsArray)

  return {maxValue, minValue, stepsArray}
}


export const handleSvgBySlug = (frontendSlug) => {
  if(frontendSlug === "play") return <GameController/>
  else if(frontendSlug === "invite") return <Invite/>
  else if(frontendSlug === "online") return <Online/>
  else if(frontendSlug?.includes("award")) return <Award/>
  else return null
}