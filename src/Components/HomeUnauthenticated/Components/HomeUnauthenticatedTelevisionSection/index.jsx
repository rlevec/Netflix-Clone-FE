import React from "react";

import {StyledHomeUnauthenticatedTelevisionSection} from "./styledHomeUnauthenticatedTelevisionSection.js";

import {useSelector} from "react-redux";

export default function HomeUnauthenticatedTelevisionSection(props) {
    const {homeUnauthenticatedFormData} = props

    const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

    return (
        <StyledHomeUnauthenticatedTelevisionSection className="styledComponent_homeUnauthenticatedTelevisionSection">
            <div className="home_unauthenticated-television-section-wrapper">
                <div className="home_unauthenticated-television-section-content-container">
                    <div className="home_unauthenticated-television-section-content-title">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionTwo?.headerEng : homeUnauthenticatedFormData?.fractionTwo?.headerHr}</div>
                    <div className="home_unauthenticated-television-section-content-subTitle">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionTwo?.subHeaderEng : homeUnauthenticatedFormData?.fractionTwo?.subHeaderHr}</div>
                </div>
                <div className="home_unauthenticated-television-section-media-container">
                    <div className="home_unauthenticated-television-section-media-image-container">
                        <img src={homeUnauthenticatedFormData?.fractionTwo?.image} alt={homeUnauthenticatedFormData?.fractionTwo?.imageAlt}/>
                    </div>
                    <div className="home_unauthenticated-television-section-media-video-container">
                        <video autoPlay muted loop>
                            <source src={homeUnauthenticatedFormData?.fractionTwo?.video} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </StyledHomeUnauthenticatedTelevisionSection>
    )
}