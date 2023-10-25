import React, {useState} from "react";
import {setActiveLanguage} from "../../Redux/Slices/activeLanguageSlice.js";
import {Link, useNavigate} from "react-router-dom";
import {routes} from "../../Routes/routes.js";
import {useSelector} from "react-redux";
import {StyledHeader} from "./styledHeader.js";
import {useDispatch} from "react-redux";

import {ReactComponent as Logo} from "../../Assets/svg/logo.svg";
import {ReactComponent as CarretUp} from "../../Assets/svg/carretUp.svg";
import {ReactComponent as CarretDown} from "../../Assets/svg/carretDown.svg";
import {ReactComponent as Globe} from "../../Assets/svg/globe.svg";

import {handleFullPrefix} from "./helpers.js";


import {useGetHeaderFormDataQuery} from "../../Redux/Injections/FormGetRequests/getHeaderForm.js"

export default function Header() {

  const {
    data: isFetchedHeaderFormData,
    isFetching: isFetchingHeaderFormData,
    isLoading: isLoadingHeaderFormData,
    isError: isErrorHeaderFormData
  } = useGetHeaderFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const geoLocationCountry = useSelector((state) => state?.geoLocation?.geoLocationInfo)?.country_name
  const deviceType = useSelector((state) => state?.device?.device)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [languageDropdownActive, setLanguageDropdownActive] = useState(false)

  if(isFetchingHeaderFormData ||isLoadingHeaderFormData) return  <div>LOADING</div>
  else if(isErrorHeaderFormData || !isFetchedHeaderFormData) return <div>ERROR</div>
  else {
    return (
      <StyledHeader className="styledComponents-header" languageDropdownActive={languageDropdownActive}>
        <Link className="header_logo-container" to={routes?.clientRoutes?.root}>
          <Logo/>
        </Link>
        <div className="header_custom-select-sign-in-container">
          <div className="header_custom-select-container">
            <div className="header_custom-select-active"
                 onClick={() => setLanguageDropdownActive(!languageDropdownActive)}>
              <div className="header_custom-select-active-svg-container">
                <Globe/></div>
              <div
                className="header_custom-selected-language">{deviceType === "phonePortrait" ? activeLanguage?.slice(0, 2) : activeLanguage}</div>
              <div
                className="header_custom-select-active-svg-container">{languageDropdownActive ?
                <CarretUp/> : <CarretDown/>}</div>
            </div>
            {languageDropdownActive && (
              <div className="header_custom-select-dropdown">
                {isFetchedHeaderFormData?.unauthenticated?.customInput?.options?.filter((el) => activeLanguage !== el?.title)?.map((el) => {
                  const {value, title} = el

                  return (
                    <div
                      className="header_custom-select-dropdown-title-container"
                      key={value} onClick={() => {
                      dispatch(setActiveLanguage({activeLanguage: title}));
                      setLanguageDropdownActive(false);
                    }}>
                      <div>{deviceType === "phonePortrait" ? title?.slice(0, 2) : title}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
          <div className="header_sign-in-container">
              <button onClick={() => navigate(`../${handleFullPrefix(activeLanguage, geoLocationCountry)}/${routes?.clientRoutes?.staticLoginRoute}`, {replace: false})}>{activeLanguage === "English" ? isFetchedHeaderFormData?.unauthenticated?.signInButton?.titleEng : isFetchedHeaderFormData?.unauthenticated?.signInButton?.titleHr}</button>
          </div>
        </div>
      </StyledHeader>
    )
  }
}