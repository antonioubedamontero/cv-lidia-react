import type { PersonalInfoResponse } from "../interfaces";

interface ContactInfoData {
  key: string;
  value: string;
}

export const getCandidateContactInfoMapped = (
  personalInfo: PersonalInfoResponse
): Record<string, ContactInfoData> => {
  return {
    name: {
      key: "Nombre",
      value: personalInfo["name"],
    },
    birthDate: {
      key: "Fecha de nacimiento",
      value: personalInfo["birthDate"],
    },
    phone: {
      key: "Teléfono",
      value: personalInfo["phone"],
    },
    email: {
      key: "Email",
      value: personalInfo["email"],
    },
    address: {
      key: "Dirección",
      value: `${personalInfo.address.region}, ${personalInfo.address.city}`,
    },
  };
};
