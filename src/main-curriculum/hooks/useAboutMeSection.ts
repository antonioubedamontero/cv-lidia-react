import { useEffect, useState } from "react";

import type { CurriculumSectionResponse } from "../interfaces";
import { getAboutMeSection } from "../endpoints";

export const useAboutMeSection = () => {
  const [aboutMeSection, setAboutMeSection] =
    useState<CurriculumSectionResponse | null>(null);

  useEffect(() => {
    getAboutMeSection().then((resp: CurriculumSectionResponse) => {
      setAboutMeSection(resp);
    });
  }, []);

  return {
    aboutMeSection,
  };
};
