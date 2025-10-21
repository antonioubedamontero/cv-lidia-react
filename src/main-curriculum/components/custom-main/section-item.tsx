import React from "react";

import DOMPurify from "dompurify";

import { getIconFromIconKey } from "../../helpers/icons";
import type { CurriculumSectionResponse } from "../../interfaces";

interface Props {
  curriculumItem: CurriculumSectionResponse;
}

export const SectionItem = React.memo(({ curriculumItem }: Props) => {
  return (
    <>
      {curriculumItem && (
        <section className="my-4">
          {curriculumItem.icon && curriculumItem.title && (
            <h2 className="text-blue-700 flex gap-2 items-center text-2xl underline">
              {getIconFromIconKey(curriculumItem.icon)}
              <span>{curriculumItem.title}</span>
            </h2>
          )}

          {curriculumItem.content.length === 1 ? (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(curriculumItem.content[0] as string),
              }}
            />
          ) : (
            <ul className="my-4 list-disc list-inside">
              {curriculumItem.content.map((contentItem) => {
                return (
                  <li
                    key={contentItem}
                    className="py-1"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(contentItem),
                    }}
                  />
                );
              })}
            </ul>
          )}
        </section>
      )}
    </>
  );
});
