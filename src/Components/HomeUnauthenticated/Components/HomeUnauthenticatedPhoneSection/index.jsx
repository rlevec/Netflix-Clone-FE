import React, {useState} from "react";

import {StyledHomeUnauthenticatedPhoneSection} from "./styledHomeUnauthenticatedPhoneSection.js";

import {ReactComponent as Download} from "../../../../Assets/svg/download.svg";
import {ReactComponent as CheckMark} from "../../../../Assets/svg/checkMark.svg";

import {useSelector} from "react-redux";

import {useHandleSequenceTimerUpdate, useHandleSequenceStateUpdate, handleMovieContentToDisplay} from "./helpers.js";


export default function HomeUnauthenticatedPhoneSection(props) {
    const {homeUnauthenticatedFormData} = props


    const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

    const [sequenceIndex, setSequenceIndex] = useState(0);
    const [sequenceState, setSequenceState] = useState({
        download: false,
        circle: false,
        checkMark: false,
    });

    useHandleSequenceTimerUpdate(sequenceIndex, setSequenceIndex)

    useHandleSequenceStateUpdate(sequenceIndex, setSequenceState)

    return (
        <StyledHomeUnauthenticatedPhoneSection>
            <div className="home_unauthenticated-phone-section-wrapper">
                <div className="home_unauthenticated-phone-section-media-container">
                    <div className="home_unauthenticated-phone-section-media-image-container">
                        <img className="media-image" src={homeUnauthenticatedFormData?.fractionThree?.image}
                             alt={homeUnauthenticatedFormData?.fractionTwo?.imageAlt}/>
                        <div className="home_unauthenticated-phone-section-media-movie-image-content-wrapper">
                            <div className="home_unauthenticated-phone-section-media-movie-image-content-container">
                                <img className="movie-media-img"
                                     src={homeUnauthenticatedFormData?.fractionThree?.imageMovie}
                                     alt={homeUnauthenticatedFormData?.fractionThree?.imageAlt}/>
                                <div className="home_unauthenticated-phone-section-media-movie-content-container">
                                    <div
                                        className="home_unauthenticated-phone-section-media-movie-content-title">{homeUnauthenticatedFormData?.fractionThree?.movieTitle}</div>
                                    <div
                                        className="home_unauthenticated-phone-section-media-movie-content-subtitle">{handleMovieContentToDisplay(sequenceState, activeLanguage, homeUnauthenticatedFormData)}</div>
                                </div>
                            </div>
                            <div className="home_unauthenticated-phone-section-media-movie-image-svg-container">
                                {sequenceState?.download && <Download/>}
                                {sequenceState?.circle && <div className="loader"></div>}
                                {sequenceState?.checkMark && <CheckMark/>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_unauthenticated-phone-section-content-container">
                    <div
                        className="home_unauthenticated-phone-section-content-title">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionThree?.headerEng : homeUnauthenticatedFormData?.fractionThree?.headerHr}</div>
                    <div
                        className="home_unauthenticated-phone-section-content-subTitle">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionThree?.subHeaderEng : homeUnauthenticatedFormData?.fractionThree?.subHeaderHr}</div>
                </div>
            </div>
        </StyledHomeUnauthenticatedPhoneSection>
    )
}