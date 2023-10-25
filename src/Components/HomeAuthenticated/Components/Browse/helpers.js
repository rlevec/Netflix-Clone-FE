export const filterUserContentByCategory = (
  activeCategory,
  isFetchedWatchableContentFormData,
  activeAccountName,
  isFetchedUsersData,
  userEmail
) => {
  if (activeCategory === "shows" || activeCategory === "movies") {
    let wholeContentArr = [];

    Object.values(isFetchedWatchableContentFormData[activeCategory])?.forEach(
      (value) => wholeContentArr?.push(value)
    );
    return wholeContentArr;
  } else if (activeCategory === "home") {
    let wholeContentArr = [];

    Object.values(isFetchedWatchableContentFormData["movies"])?.forEach(
      (value) => wholeContentArr?.push(value)
    );
    Object.values(isFetchedWatchableContentFormData["shows"])?.forEach(
      (value) => wholeContentArr?.push(value)
    );
    return wholeContentArr;
  } else if (activeCategory === "newPopular") {
    let wholeContentArr = [];

    Object.values(isFetchedWatchableContentFormData["movies"])?.forEach(
      (value) => wholeContentArr?.push(value)
    );
    Object.values(isFetchedWatchableContentFormData["shows"])?.forEach(
      (value) => wholeContentArr?.push(value)
    );

    return wholeContentArr?.filter((el) => el?.isTrending);
  } else if (activeCategory === "myList") {

     const matchActiveUserAccount = isFetchedUsersData[userEmail]?.accounts?.find((el => el?.accountName === activeAccountName))

     return matchActiveUserAccount?.myList
  }
};
