import { IoPerson } from "react-icons/io5";

import type { PersonalInfoResponse } from "../interfaces";
import { getCandidateContactInfoMapped } from "../helpers";
import { getIconFromIconKey } from "../helpers/icons";
import { getCurriculumPdf } from "../endpoints";
interface Props {
  personalInfo: PersonalInfoResponse;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const CustomAside = ({ personalInfo }: Props) => {
  const canditateContactInfo = getCandidateContactInfoMapped(personalInfo);
  const handleClick = async () => {
    const response = await getCurriculumPdf();

    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "curriculum.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <aside className="bg-orange-50 p-4 flex flex-col items-center gap-6 h-full">
      <h2 className="text-blue-700 text-xl underline md:self-start flex items-center gap-1">
        <IoPerson />
        <span>Datos de contacto</span>
      </h2>
      <img
        className="candidate-photo rounded-xl w-2/4 md:w-1/2"
        width="109"
        height="128"
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

      <button
        className="p-2 flex gap-2 justify-center items-center w-full rounded-xl cursor-pointer bg-sky-600 hover:bg-sky-500 text-white"
        onClick={handleClick}
      >
        <span>{getIconFromIconKey("downloadCV")}</span>
        <span>Descarga Curriculum</span>
      </button>
    </aside>
  );
};
