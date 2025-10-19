import { instance } from "./axios-instance";

import type { PersonalInfoResponse } from "../interfaces";

export const getPersonalInfo = async (): Promise<PersonalInfoResponse> => {
  try {
    const response = await instance.get("/personal-info.json");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al recuperar información personal");
  }
};
