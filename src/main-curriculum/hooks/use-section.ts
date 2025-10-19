import { useEffect, useState } from "react";

import type { CurriculumSectionResponse } from "../interfaces";
import { getAboutMeSection, getSections } from "../endpoints";

export const useSection = (sectionName: string) => {
  const [sectionsData, setSectionsData] = useState<
    CurriculumSectionResponse[] | null
  >(null);

  useEffect(() => {
    const endpoints =
      sectionName === "about-me" ? getAboutMeSection : getSections;

    endpoints().then((sections) => {
      setSectionsData([...sections]);
    });
  }, []);

  return {
    sectionsData,
  };
};
