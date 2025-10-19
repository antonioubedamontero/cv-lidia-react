import { instance } from "./axios-instance";

import type { CurriculumSectionResponse } from "../interfaces";

export const getAboutMeSection = async (): Promise<
  CurriculumSectionResponse[]
> => {
  try {
    const response = await instance.get("/about-me.json");
    const { icon, title, content } = response.data;
    return [
      {
        icon,
        title,
        content: [content],
      },
    ];
  } catch (error) {
    console.error(error);
    throw new Error("Error al recuperar información sobre mí");
  }
};
