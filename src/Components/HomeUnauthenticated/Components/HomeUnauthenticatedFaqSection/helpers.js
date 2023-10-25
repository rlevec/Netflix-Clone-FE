export const handleAccordionSecondAnswerDivIfExists = (answerEngTwo, answerHrTwo, activeLanguage)=> {
    if(answerEngTwo || answerHrTwo) {
        if(activeLanguage === "English") return answerEngTwo
        else return answerHrTwo
    }
    else return null
}