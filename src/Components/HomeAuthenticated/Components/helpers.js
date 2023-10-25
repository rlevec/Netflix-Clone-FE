import {useEffect} from "react";

export const useHandleResize = (mainRef, dimensions, setDimensions, setMainDivWidth) => {
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    if (mainRef) {
      if (mainRef.current?.clientWidth) setMainDivWidth(mainRef.current.clientWidth)
    }
  }, [dimensions?.width])
}

export const generateProfileImageSlug = (isFetchedUsersData, userEmail, initialProfileImages) => {
  if (isFetchedUsersData[userEmail]?.accounts?.length) {
    const numberOfAccounts = isFetchedUsersData[userEmail]?.accounts?.length
    return initialProfileImages[numberOfAccounts]?.frontendSlug
  } else return initialProfileImages[0]?.frontendSlug
}


export const generateProfileImage = (isFetchedUsersData, userEmail, initialProfileImages) => {
  if (isFetchedUsersData[userEmail]?.accounts?.length) {
    const numberOfAccounts = isFetchedUsersData[userEmail]?.accounts?.length
    return initialProfileImages[numberOfAccounts]?.image
  } else return initialProfileImages[0]?.image
}