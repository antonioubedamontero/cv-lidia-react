import { CustomAside, CustomFooter, CustomHeader } from "./components";
import { CustomMain } from "./components/custom-main";
import { usePersonalInfo } from "./hooks";

export const MainCurriculum = () => {
  const { personalInfo } = usePersonalInfo();

  return (
    <>
      {personalInfo && <CustomHeader name={personalInfo.name} />}

      <div className="flex flex-col md:flex-row">
        <div className="md:basis-1/4 md:border-r-2 md:border-r-gray-100">
          {personalInfo && <CustomAside personalInfo={personalInfo} />}
        </div>
        <div className="px-4 border-t-2 border-t-gray-100 md:basis-3/4 md:border-0">
          <CustomMain />
        </div>
      </div>

      {personalInfo && <CustomFooter name={personalInfo.name} />}
    </>
  );
};
