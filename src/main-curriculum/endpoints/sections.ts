import { instance } from "./axios-instance";

import type { CurriculumSectionResponse } from "../interfaces";

export const getSections = async (): Promise<CurriculumSectionResponse[]> => {
  try {
    const response = await instance.get("/sections.json");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al recuperar secciones");
  }
};
