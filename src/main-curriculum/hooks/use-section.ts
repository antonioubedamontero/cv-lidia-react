import { useEffect, useState } from "react";

import type { CurriculumSectionResponse } from "../interfaces";
import {
  getAboutMeSection,
  getSections,
  getSoftSkillsSection,
} from "../endpoints";

export const useSection = (sectionName: string) => {
  const [sectionsData, setSectionsData] = useState<
    CurriculumSectionResponse[] | null
  >(null);

  useEffect(() => {
    let endpoints = getSections;

    switch (sectionName) {
      case "about-me":
        endpoints = getAboutMeSection;
        break;
      case "soft-skills":
        endpoints = getSoftSkillsSection;
        break;
      default:
        endpoints = getSections;
    }

    endpoints().then((sections) => {
      setSectionsData([...sections]);
    });
  }, [sectionName]);

  return {
    sectionsData,
  };
};
