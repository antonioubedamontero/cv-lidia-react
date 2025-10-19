import { IoPerson } from "react-icons/io5";

import type { PersonalInfoResponse } from "../interfaces";
import { getCandidateContactInfoMapped } from "../helpers";
interface Props {
  personalInfo: PersonalInfoResponse;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const CustomAside = ({ personalInfo }: Props) => {
  const canditateContactInfo = getCandidateContactInfoMapped(personalInfo);

  return (
    <aside className="bg-orange-50 p-4 flex flex-col items-center gap-6 h-full">
      <h2 className="text-blue-700 text-xl underline md:self-start flex items-center gap-1">
        <IoPerson />
        <span>Datos de contacto:</span>
      </h2>
      <img
        className="rounded-xl w-2/4 md:w-1/2"
        src={`${BASE_URL}/${personalInfo.photoUrl}`}
        alt="foto del candidato"
      />

      <ul className="list-disc list-inside">
        {Object.keys(canditateContactInfo).map((keyName: string) => {
          const { key, value } = canditateContactInfo[keyName];
          return (
            <li key={keyName} className="py-1">
              <strong>{key}:</strong>
              <br />
              <span>{value}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
