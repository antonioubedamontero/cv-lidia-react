import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

import { useAboutMeSection } from "../../hooks";
import { getIconFromIconKey } from "../../helpers/icons";

export const AboutMeSection = () => {
  const { aboutMeSection } = useAboutMeSection();

  const [aboutMeIcon, setAboutMeIcon] = useState<string | null>(null);
  const [aboutMeTitle, setAboutMeTitle] = useState<string | null>(null);
  const [aboutMeContent, setAboutMeContent] = useState<string | null>(null);

  useEffect(() => {
    if (aboutMeSection?.icon) {
      setAboutMeIcon(aboutMeSection?.icon);
    } else {
      setAboutMeIcon(null);
    }
  }, [aboutMeSection?.icon]);

  useEffect(() => {
    setAboutMeTitle(aboutMeSection?.title ?? null);
  }, [aboutMeSection?.title]);

  useEffect(() => {
    setAboutMeContent((aboutMeSection?.content as string) ?? null);
  }, [aboutMeSection?.content]);

  return (
    <main className="p-4 bg-zinc-50">
      <section>
        {aboutMeIcon && aboutMeTitle && (
          <h2 className="text-blue-700 flex gap-2 items-center text-2xl underline">
            {getIconFromIconKey(aboutMeIcon)}
            <span>{aboutMeTitle}</span>
          </h2>
        )}

        {aboutMeContent && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(aboutMeContent),
            }}
          />
        )}
      </section>
    </main>
  );
};
