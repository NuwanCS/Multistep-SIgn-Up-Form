import { ReactElement, useState } from "react";

export const UseMultiStepForm = (step: ReactElement[]) => {
    const [currentStep, setCurrentStep] = useState(0);

    return(
        currentStep
    )


}