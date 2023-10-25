import React from "react";

import Unallowed from "./Components/Unallowed/index.jsx";


import {useSelector} from "react-redux";
import Allowed from "./Components/Allowed/index.jsx";


export default function ProfileTransfer(props) {
  const {
    editableProfileImages,
    isFetchedProfileTransferFormData: {
      allowed,
      unAllowed
    },
    isFetchedUsersData,
    profileImages,
    setActiveSubComponent
  } = props


  const userEmail = useSelector((state) => state?.userMail?.userMail)


  if (!isFetchedUsersData[userEmail]?.profileTransfer) return <Unallowed unAllowed={unAllowed} setActiveSubComponent={setActiveSubComponent}/>
  else return <Allowed allowed={allowed} editableProfileImages={editableProfileImages} isFetchedUsersData={isFetchedUsersData} profileImages={profileImages} setActiveSubComponent={setActiveSubComponent}/>
}