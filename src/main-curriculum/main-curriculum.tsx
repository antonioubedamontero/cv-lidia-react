import { useEffect, useState } from "react";

import {
  CustomAside,
  CustomFooter,
  CustomHeader,
  CustomMain,
} from "./components";
import type { PersonalInfoResponse } from "./interfaces";
import { getPersonalInfo } from "./endpoints";

export const MainCurriculum = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoResponse | null>(
    null
  );

  useEffect(() => {
    getPersonalInfo().then((resp: PersonalInfoResponse) => {
      setPersonalInfo(resp);
    });
  }, []);

  return (
    <>
      {personalInfo && <CustomHeader name={personalInfo.name} />}

      <div className="flex flex-col md:flex-row">
        <div className="bg-orange-50 md:basis-1/4 md:border-r-2 md:border-r-gray-100">
          <CustomAside />
        </div>
        <div className="border-t-2 border-t-gray-100 md:basis-3/4 md:border-0">
          <CustomMain />
        </div>
      </div>

      {personalInfo && <CustomFooter name={personalInfo.name} />}
    </>
  );
};
