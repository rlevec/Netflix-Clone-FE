import React from "react";

import {useSelector} from "react-redux";

import {StyledHomeUnauthenticatedUniversalDevicesSection} from "./styledHomeUnauthenticatedUniversalDevicesSection.js";


export default function HomeUnauthenticatedUniversalDevicesSection(props) {
    const {homeUnauthenticatedFormData} = props

    const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)

    return (
        <StyledHomeUnauthenticatedUniversalDevicesSection className="styledComponent_homeUnauthenticatedUniversalDevicesSection">
            <div className="home_unauthenticated-universal-devices-section-wrapper">
                <div className="home_unauthenticated-universal-devices-section-content-container">
                    <div className="home_unauthenticated-universal-devices-section-content-title">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionFour?.headerEng : homeUnauthenticatedFormData?.fractionFour?.headerHr}</div>
                    <div className="home_unauthenticated-universal-devices-section-content-subTitle">{activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionFour?.subHeaderEng : homeUnauthenticatedFormData?.fractionFour?.subHeaderHr}</div>
                </div>
                <div className="home_unauthenticated-universal-devices-section-media-container">
                    <div className="home_unauthenticated-universal-devices-section-media-image-container">
                        <img src={homeUnauthenticatedFormData?.fractionFour?.image} alt={homeUnauthenticatedFormData?.fractionFour?.imageAlt}/>
                    </div>
                    <div className="home_unauthenticated-universal-devices-section-media-video-container">
                        <video autoPlay muted loop>
                            <source src={homeUnauthenticatedFormData?.fractionFour?.video} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </StyledHomeUnauthenticatedUniversalDevicesSection>
    )
}