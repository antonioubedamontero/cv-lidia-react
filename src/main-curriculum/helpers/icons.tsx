import type { IconType } from "react-icons";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

export const icons: Record<string, IconType> = {
  personBadge: BsFillPersonBadgeFill,
  academicTraining: IoSchoolSharp,
  workExperience: FaBriefcase,
  volunteering: MdVolunteerActivism,
  softSkills: GiSkills,
};

export const getIconFromIconKey = (iconKey: string) => {
  if (!Object.hasOwn(icons, iconKey)) throw new Error("Icono no definido");

  const Icon = icons[iconKey];
  return <Icon />;
};
