import type { PersonalInfo } from "../interfaces";

interface Props {
  info: PersonalInfo;
}

export const CustomHeader = ({ info }: Props) => {
  console.log("personal info", info);

  return (
    <header className="bg-sky-600 p-4 border-b-2 border-b-gray-50">
      <h1 className=" text-white text-center text-xl font-bold">
        Curriculum Vitae {info.name}
      </h1>
    </header>
  );
};
