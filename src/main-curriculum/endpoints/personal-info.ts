import type { PersonalInfo } from "../interfaces";
import { instance } from "./axios-instance";

export const getPersonalInfo = async (): Promise<PersonalInfo> => {
  try {
    const response = await instance.get("/refs/heads/main/personal-info.json");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al recuperar información personal");
  }
};
