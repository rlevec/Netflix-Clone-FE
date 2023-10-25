import {useCallback, useEffect} from "react";

const elements = ['download', 'circle', 'checkMark'];


//This useEffect hook sets up a timer that calls handleNextElement every 3000 milliseconds.
// The timer is cleared when the component unmounts. It depends on the sequenceIndex, so whenever sequenceIndex changes, the timer is updated.
export const useHandleSequenceTimerUpdate = (sequenceIndex, setSequenceIndex) => {
    const handleSequenceTimerUpdate = useCallback(() => {
        const timer = setTimeout(() => {
            //This function is responsible for advancing to the next element in the sequence.
            // It uses the modulo operator % to loop back to the beginning of the elements array once it reaches the end.
            setSequenceIndex((prevIndex) => (prevIndex + 1) % elements.length);
        }, 3000);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [sequenceIndex])

    useEffect(() => {
        handleSequenceTimerUpdate()
    }, [handleSequenceTimerUpdate])
}


//This useEffect hook updates the sequenceState based on the current sequenceIndex.
// It first initializes a new newSequenceState object with all flags set to false.
// Then, it uses the current element's key to set the corresponding flag to true.
export const useHandleSequenceStateUpdate = (sequenceIndex, setSequenceState) => {
    const handleSequenceStateUpdate = useCallback(() => {
        const newSequenceState = {
            download: false,
            circle: false,
            checkMark: false,
        };

        newSequenceState[elements[sequenceIndex]] = true;
        setSequenceState(newSequenceState);
    }, [sequenceIndex])

    useEffect(() => {
        handleSequenceStateUpdate()
    }, [handleSequenceStateUpdate])
}


// Handle content to display based on the active sequence state
export const handleMovieContentToDisplay = (sequenceState, activeLanguage, homeUnauthenticatedFormData) => {
    if (sequenceState?.download) return activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionThree?.movieContentStartEng : homeUnauthenticatedFormData?.fractionThree?.movieContentStartHr
    else if (sequenceState?.circle) return activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionThree?.movieContentEng : homeUnauthenticatedFormData?.fractionThree?.movieContentHr
    else if (sequenceState?.checkMark) return activeLanguage === "English" ? homeUnauthenticatedFormData?.fractionThree?.movieContentDoneEng : homeUnauthenticatedFormData?.fractionThree?.movieContentDoneHr
    else return undefined
}