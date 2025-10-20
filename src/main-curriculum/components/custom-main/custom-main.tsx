import { useSection } from "../../hooks";
import { SectionItem } from "./section-item";
import { SoftSkillsSection } from "./soft-skills-section";

export const CustomMain = () => {
  const { sectionsData: aboutMeSectionData } = useSection("about-me");
  const { sectionsData: restOfSections } = useSection("rest-of-sections");
  const { sectionsData: softSkillsSection } = useSection("soft-skills");

  return (
    <>
      {aboutMeSectionData && (
        <SectionItem curriculumItem={aboutMeSectionData[0]} />
      )}

      {restOfSections &&
        restOfSections?.map((sectionItemData) => {
          return (
            <SectionItem
              key={sectionItemData.title}
              curriculumItem={sectionItemData}
            />
          );
        })}

      {softSkillsSection && (
        <SoftSkillsSection softSkillsSection={softSkillsSection} />
      )}
    </>
  );
};
