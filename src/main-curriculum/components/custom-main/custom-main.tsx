import { useSection } from "../../hooks";
import { SectionItem } from "./section-item";

export const CustomMain = () => {
  const { sectionsData: aboutMeSectionData } = useSection("about-me");
  const { sectionsData: restOfSections } = useSection("rest-of-sections");

  return (
    <>
      {aboutMeSectionData && (
        <SectionItem curriculumItem={aboutMeSectionData[0]} />
      )}

      {restOfSections?.map((sectionItemData) => {
        return (
          <SectionItem
            key={sectionItemData.title}
            curriculumItem={sectionItemData}
          />
        );
      })}
    </>
  );
};
