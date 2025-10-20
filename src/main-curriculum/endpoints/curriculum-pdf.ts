import { instance } from "./axios-instance";

export const getCurriculumPdf = async (): Promise<Blob> => {
  try {
    const response = await instance.get("/CV-Lidia-Gomez-Valdes.pdf", {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al recuperar el curriculum");
  }
};
