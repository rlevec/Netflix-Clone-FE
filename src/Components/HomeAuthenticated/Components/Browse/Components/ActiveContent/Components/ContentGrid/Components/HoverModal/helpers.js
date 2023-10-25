export const handleIsInMyList = (
  frontendSlug,
  isFetchedUsersData,
  userEmail,
  activeAccountName
) => {
  const matchUserObject = isFetchedUsersData[userEmail];
  const matchActiveAccount = matchUserObject?.accounts?.find(
    (el) => el?.accountName === activeAccountName
  );
  const isInMyList = matchActiveAccount?.myList?.find(
    (el) => el?.frontendSlug === frontendSlug
  );

  return !!isInMyList;
};

export const handleIsInMyLikes = (
  frontendSlug,
  isFetchedUsersData,
  userEmail,
  activeAccountName
) => {
  const matchUserObject = isFetchedUsersData[userEmail];
  const matchActiveAccount = matchUserObject?.accounts?.find(
    (el) => el?.accountName === activeAccountName
  );
  const isInMyLikes = matchActiveAccount?.likedContent?.find(
    (el) => el?.frontendSlug === frontendSlug
  );

  return !!isInMyLikes;
};


  export const handleQuality = (isFetchedUsersData, userEmail) => {
    let activePlan = isFetchedUsersData[userEmail]?.activePlan;

    if (activePlan === "basic") return "HD";
    else if (activePlan === "standard") return "FHD";
    else if (activePlan === "premium") return "4K";
    else return null;
  };