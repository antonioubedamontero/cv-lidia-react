import type { JSX } from "react";
import type { PersonalInfoResponse } from "../interfaces";

interface ContactInfoData {
  key: string;
  value: string | JSX.Element;
}

const defaultEmailSubject = "Oferta%20de%20trabajo";
const defaultEmailMessage = `Buenos días.%0D%0A%0D%0A
Mi nombre es [indica tu nombre], y quería contactar contigo para la siguiente oferta de trabajo:
%0D%0A%0D%0A[Indica las condiciones de la oferta].%0D%0A%0D%0A
Puedes contactar conmigo a través del número [indica tu número de teléfono] o la siguiente dirección de correo electrónico [indica tu dirección].%0D%0A%0D%0A
Un saludo,`;

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
      value: (
        <a
          className="text-blue-700"
          href={`tel:+34${personalInfo["phone"].replace(/ /g, "")}`}
        >
          {personalInfo["phone"]}
        </a>
      ),
    },
    email: {
      key: "Email",
      value: (
        <a
          className="text-blue-700"
          href={`mailto:${personalInfo["email"]}?subject=${defaultEmailSubject}&body=${defaultEmailMessage}`}
          target="_blank"
        >
          {`${personalInfo["email"]}`}
        </a>
      ),
    },
    address: {
      key: "Dirección",
      value: `${personalInfo.address.region}, ${personalInfo.address.city}`,
    },
  };
};
