import React, {useCallback, useEffect} from "react";

import { ReactComponent as Play } from "../../../../../../../../Assets/svg/play.svg";
import { ReactComponent as Info } from "../../../../../../../../Assets/svg/info.svg";

export const handleIconsToRender = (frontendSlug) => {
      if (frontendSlug === "play") return <Play />;
      else if (frontendSlug === "info") return <Info />;
      else return null;
    };



export const handleActiveTrailer =  (activeCategory, setTrailerActive) => {
  const handleActiveTrailerCallback = useCallback(() => {
    setTrailerActive(false)

    let timeout = setTimeout(() => {
      setTrailerActive(true)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [activeCategory])

  useEffect(() => {
    handleActiveTrailerCallback()
  }, [handleActiveTrailerCallback])
}

export const matchObjectToRender = (categorizedActivePageContent, activeCategory) => categorizedActivePageContent?.find((el) => el?.frontendSlug === activeCategory)


  export const handleButtonActions = (frontendSlug, activeCategory, setContentBeingWatched, categorizedActivePageContent, setActiveContentModal) => {
    if (frontendSlug === "play")
      setContentBeingWatched(
        matchObjectToRender(categorizedActivePageContent, activeCategory)
          ?.contentData?.videoContent
      );
    else if (frontendSlug === "info")
      setActiveContentModal(
        matchObjectToRender(categorizedActivePageContent, activeCategory)?.contentData
      );
    else return null;
  };


