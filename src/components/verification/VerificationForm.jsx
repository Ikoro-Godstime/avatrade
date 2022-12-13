import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const VerificationForm = () => {
  const [formState, SetFormState] = useState({
    step: 1,
    issuedCountry: "",
    documentNumber: "",
    issuedDate: "",
    expiryDate: "",
    documentPhoto: "",
    docType: "National Id",
  });

  switch (formState.step) {
    case 1:
      return (
        <>
          <StepOne state={formState} action={SetFormState} />
        </>
      );
    case 2:
      return (
        <>
          <StepTwo state={formState} action={SetFormState} />
        </>
      );
    default:
      return;
  }
};

export default VerificationForm;
