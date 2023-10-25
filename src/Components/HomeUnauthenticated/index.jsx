import React from "react";

import {StyledHomeUnauthenticated} from "./styledHomeUnauthenticated.js";

import {useGetHomepageUnauthenticatedFormDataQuery} from "../../Redux/Injections/FormGetRequests/getHomepageUnauthenticatedFormData.js"
import {useGetUsersQuery} from "../../Redux/Injections/UserGetRequest/getUsersData.js"

import HomeUnauthenticatedHeader from "./Components/HomeUnauthenticatedHeader/index.jsx";
import HomeUnauthenticatedTelevisionSection from "./Components/HomeUnauthenticatedTelevisionSection/index.jsx";
import HomeUnauthenticatedPhoneSection from "./Components/HomeUnauthenticatedPhoneSection/index.jsx";
import HomeUnauthenticatedUniversalDevicesSection
  from "./Components/HomeUnauthenticatedUniversalDevicesSection/index.jsx";
import HomeUnauthenticatedKidsSection from "./Components/HomeUnauthenticatedKidsSection/index.jsx";
import HomeUnauthenticatedFaqSection from "./Components/HomeUnauthenticatedFaqSection/index.jsx";

import {renderBorder, useHandlePrefixRouteNavigator} from "./helpers.jsx";

import Footer from "../Footer/index.jsx";


export default function HomeUnauthenticated() {
  const {
    data: isFetchedHomepageUnauthenticatedFormData,
    isFetching: isFetchingHomepageUnauthenticatedFormData,
    isLoading: isLoadingHomepageUnauthenticatedFormData,
    isError: isErrorHomepageUnauthenticatedFormData
  } = useGetHomepageUnauthenticatedFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })


  const {
    data: isFetchedUsers,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
    isError: isErrorUsers
  } = useGetUsersQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  useHandlePrefixRouteNavigator()


  if (isFetchingHomepageUnauthenticatedFormData || isLoadingHomepageUnauthenticatedFormData || isFetchingUsers || isLoadingUsers) return <div>LOADING</div>
  else if (isErrorHomepageUnauthenticatedFormData || !isFetchedHomepageUnauthenticatedFormData || isErrorUsers || !isFetchedUsers) return <div>SERVER
    ERROR</div>
  else {
    return (
      <StyledHomeUnauthenticated className="styledComponent_homeUnauthenticated">
        <div className="home_unauthenticated-wrapper">
          <HomeUnauthenticatedHeader
            homeUnauthenticatedFormData={isFetchedHomepageUnauthenticatedFormData}
            isFetchedUsers={isFetchedUsers}
          />
          {renderBorder()}
          <HomeUnauthenticatedTelevisionSection homeUnauthenticatedFormData={isFetchedHomepageUnauthenticatedFormData}/>
          {renderBorder()}
          <HomeUnauthenticatedPhoneSection homeUnauthenticatedFormData={isFetchedHomepageUnauthenticatedFormData}/>
          {renderBorder()}
          <HomeUnauthenticatedUniversalDevicesSection
            homeUnauthenticatedFormData={isFetchedHomepageUnauthenticatedFormData}/>
          {renderBorder()}
          <HomeUnauthenticatedKidsSection homeUnauthenticatedFormData={isFetchedHomepageUnauthenticatedFormData}/>
          {renderBorder()}
          <HomeUnauthenticatedFaqSection homeUnauthenticatedFormData={isFetchedHomepageUnauthenticatedFormData} isFetchedUsers={isFetchedUsers}/>
          {renderBorder()}
          <Footer/>
        </div>
      </StyledHomeUnauthenticated>
    )
  }
}