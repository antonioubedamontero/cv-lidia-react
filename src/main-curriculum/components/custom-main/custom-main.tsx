import { useSection } from "../../hooks";
import { SectionItem } from "./section-item";
import { getIconFromIconKey } from "../../helpers/icons";

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

      {softSkillsSection &&
        softSkillsSection?.map((sectionItemData) => {
          return (
            <section className="my-4">
              <h2 className="text-blue-700 my-4 flex gap-2 items-center text-2xl underline">
                {getIconFromIconKey(sectionItemData.icon)}
                <span>{sectionItemData.title}</span>
              </h2>
              <div className="flex gap-4 flex-wrap">
                {sectionItemData.content.map((hability) => {
                  return (
                    <div className="p-1 rounded-xl bg-indigo-400 text-white">
                      {hability}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
    </>
  );
};
