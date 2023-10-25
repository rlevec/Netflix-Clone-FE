import React, {useState} from "react";

import {StyledHomeAuthenticated} from "./styledHomeAuthenticated.js";

import Profiles from "./Components/Profiles/index.jsx";
import AddProfile from "./Components/AddProfile/index.jsx";
import Browse from "./Components/Browse/index.jsx";

import {useGetProfilesFormDataQuery} from "../../Redux/Injections/FormGetRequests/getProfilesFormData.js"
import {useGetUsersQuery} from "../../Redux/Injections/UserGetRequest/getUsersData.js"
import {useGetBrowseFormDataQuery} from "../../Redux/Injections/FormGetRequests/getBrowseFormData.js"
import {useGetAccountFormDataQuery} from "../../Redux/Injections/FormGetRequests/getAccountFormData.js"
import {useGetProfileTransferFormDataQuery} from "../../Redux/Injections/FormGetRequests/getProfileTransferFormData.js"
import {useGetWatchableContentFormDataQuery} from "../../Redux/Injections/FormGetRequests/getWatchableContentFormData.js"



export default function HomeAuthenticated() {

  const {
    data: isFetchedProfilesFormData,
    isFetching: isFetchingProfilesFormData,
    isLoading: isLoadingProfilesFormData,
    isError: isErrorSignProfilesFormData
  } = useGetProfilesFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  const {
    data: isFetchedUsersData,
    isFetching: isFetchingUsersData,
    isLoading: isLoadingUsersData,
    isError: isErrorUsersData
  } = useGetUsersQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  const {
    data: isFetchedBrowseData,
    isFetching: isFetchingBrowseFormData,
    isLoading: isLoadingBrowseFormData,
    isError: isErrorBrowseFormData
  } = useGetBrowseFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  const {
    data: isFetchedAccountFormData,
    isFetching: isFetchingAccountFormData,
    isLoading: isLoadingAccountFormData,
    isError: isErrorAccountFormData
  } = useGetAccountFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

  const {
    data: isFetchedProfileTransferFormData,
    isFetching: isFetchingProfileTransferFormData,
    isLoading: isLoadingProfileTransferFormData,
    isError: isErrorProfileTransferFormData
  } = useGetProfileTransferFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })

    const {
    data: isFetchedWatchableContentFormData,
    isFetching: isFetchingWatchableContentFormData,
    isLoading: isLoadingWatchableContentFormData,
    isError: isErrorWatchableContentFormData
  } = useGetWatchableContentFormDataQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: false,
    refetchOnReconnect: true
  })



  const [activeForm, setActiveForm] = useState("initialForm")

  const [browseProfileActive, setBrowseProfileActive] = useState(null)

  const [responseSuccessMessage, setResponseSuccessMessage] = useState(null)
  const [responseErrorMessage, setResponseErrorMessage] = useState(null)

  if (
    isFetchingProfilesFormData
    || isLoadingProfilesFormData
    || isFetchingUsersData
    || isLoadingUsersData
    || isFetchingBrowseFormData
    || isLoadingBrowseFormData
    || isLoadingAccountFormData
    || isFetchingAccountFormData
    || isFetchingProfileTransferFormData
    || isLoadingProfileTransferFormData
    || isLoadingWatchableContentFormData
    || isFetchingWatchableContentFormData
  ) return <div>LOADING</div>
  else if (
    isErrorSignProfilesFormData
    || !isFetchedProfilesFormData
    || isErrorUsersData
    || !isFetchedUsersData
    || isErrorBrowseFormData
    || !isFetchedBrowseData
    || isErrorAccountFormData
    || !isFetchedAccountFormData
    || isErrorProfileTransferFormData
    || !isFetchedProfileTransferFormData
    || isErrorWatchableContentFormData
    || !isFetchedWatchableContentFormData
  ) return <div>ERROR</div>
  else {
    return (
      <StyledHomeAuthenticated>
        {(activeForm === "initialForm" || activeForm === "editProfiles") &&
          <Profiles browseProfileActive={browseProfileActive}
                    setBrowseProfileActive={setBrowseProfileActive}
                    responseSuccessMessage={responseSuccessMessage}
                    responseErrorMessage={responseErrorMessage}
                    setResponseSuccessMessage={setResponseSuccessMessage}
                    setResponseErrorMessage={setResponseErrorMessage}
                    profileImagesContent={isFetchedProfilesFormData?.profileImagesContent}
                    profilesImages={isFetchedProfilesFormData?.editableProfileImages}
                    initialProfileImages={isFetchedProfilesFormData?.profileImages}
                    allProfilesData={isFetchedProfilesFormData?.initial}
                    editProfilesData={isFetchedProfilesFormData?.editable}
                    activeForm={activeForm}
                    setActiveForm={setActiveForm}
                    isFetchedUsersData={isFetchedUsersData}/>}
        {activeForm === "addProfileForm" && <AddProfile setResponseSuccessMessage={setResponseSuccessMessage}
                                                        setResponseErrorMessage={setResponseErrorMessage}
                                                        initialProfileImages={isFetchedProfilesFormData?.profileImages}
                                                        data={isFetchedProfilesFormData?.add}
                                                        setActiveForm={setActiveForm}
                                                        isFetchedUsersData={isFetchedUsersData}/>}
        {activeForm === "profileActive" && <Browse
          isFetchedProfileTransferFormData={isFetchedProfileTransferFormData}
          isFetchedWatchableContentFormData={isFetchedWatchableContentFormData}
          setActiveForm={setActiveForm}
          browseData={isFetchedBrowseData}
          browseProfileActive={browseProfileActive}
          setBrowseProfileActive={setBrowseProfileActive}
          isFetchedUsersData={isFetchedUsersData}
          editableProfileImages={isFetchedProfilesFormData?.editableProfileImages}
          profileImages={isFetchedProfilesFormData?.profileImages}
          isFetchedAccountFormData={isFetchedAccountFormData}
        />}
      </StyledHomeAuthenticated>
    )
  }
}