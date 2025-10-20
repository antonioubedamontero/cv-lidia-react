import { instance } from "./axios-instance";

import type { CurriculumSectionResponse } from "../interfaces";

export const getSoftSkillsSection = async (): Promise<
  CurriculumSectionResponse[]
> => {
  try {
    const response = await instance.get("/soft-skills.json");
    /* Only returns an object not an array */
    return [{ ...response.data }];
  } catch (error) {
    console.error(error);
    throw new Error("Error al recuperar soft skills");
  }
};
