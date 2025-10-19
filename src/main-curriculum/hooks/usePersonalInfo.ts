import { useEffect, useState } from "react";

import type { PersonalInfoResponse } from "../interfaces";
import { getPersonalInfo } from "../endpoints";

export const usePersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoResponse | null>(
    null
  );

  useEffect(() => {
    getPersonalInfo().then((resp: PersonalInfoResponse) => {
      setPersonalInfo(resp);
    });
  }, []);

  return {
    personalInfo,
  };
};
