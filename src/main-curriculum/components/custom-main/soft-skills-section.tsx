import { getIconFromIconKey } from "../../helpers/icons";
import type { CurriculumSectionResponse } from "../../interfaces";

interface Props {
  softSkillsSection: CurriculumSectionResponse[];
}

export const SoftSkillsSection = ({ softSkillsSection }: Props) => {
  return softSkillsSection?.map((sectionItemData) => {
    return (
      <section key={sectionItemData.title} className="my-4">
        <h2 className="text-blue-700 my-4 flex gap-2 items-center text-2xl underline">
          {getIconFromIconKey(sectionItemData.icon)}
          <span>{sectionItemData.title}</span>
        </h2>
        <div className="flex gap-4 flex-wrap">
          {sectionItemData.content.map((hability) => {
            return (
              <div key={hability} className="p-1 rounded-xl bg-orange-200">
                {hability}
              </div>
            );
          })}
        </div>
      </section>
    );
  });
};
