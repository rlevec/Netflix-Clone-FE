export const handleIsInMyList = (
    frontendSlug,
    isFetchedUsersData,
    userEmail,
    activeAccountName
  ) => {
    const matchUserObject = isFetchedUsersData?.[userEmail];
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
      const matchUserObject = isFetchedUsersData?.[userEmail];
      const matchActiveAccount = matchUserObject?.accounts?.find(
        (el) => el?.accountName === activeAccountName
      );
      const isInMyLikes = matchActiveAccount?.likedContent?.find(
        (el) => el?.frontendSlug === frontendSlug
      );

      return !!isInMyLikes;
    };


    export const generateDataByGenre = (contentDataToRender, genres) => {
      let combinedContent = [];

      Object.values(contentDataToRender["movies"])?.forEach((val) =>
        combinedContent?.push(val)
      );
      Object.values(contentDataToRender["shows"])?.forEach((val) =>
        combinedContent?.push(val)
      );

      let filteredContent = [];

      combinedContent?.forEach((el) => {
        const { genres: combinedContentGenres } = el;

        combinedContentGenres?.forEach((genre) => {
          const { frontendSlug: genreSlug } = genre;

          const matchObject = genres?.find(
            (item) => item?.frontendSlug === genreSlug
          );

          if (matchObject) {
            filteredContent?.push(el);
          }
        });
      });

      const actualData = [];

      filteredContent?.forEach((content) => {
        const { frontendSlug: contentSlug } = content;

        const isDuplicate = actualData.some(
          (item) => item.frontendSlug === contentSlug
        );

        if (!isDuplicate) {
          actualData.push(content);
        }
      });

      return actualData;
    };


      export const handleQuality = (isFetchedUsersData, userEmail) => {
        let activePlan = isFetchedUsersData[userEmail]?.activePlan;

        if (activePlan === "basic") return "HD";
        else if (activePlan === "standard") return "FHD";
        else if (activePlan === "premium") return "4K";
        else return null;
      };