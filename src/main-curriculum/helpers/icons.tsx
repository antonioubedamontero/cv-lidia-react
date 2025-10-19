import type { IconType } from "react-icons";
import { BsFillPersonBadgeFill } from "react-icons/bs";

export const icons: Record<string, IconType> = {
  personBadge: BsFillPersonBadgeFill,
};

export const getIconFromIconKey = (iconKey: string) => {
  if (!Object.hasOwn(icons, iconKey)) throw new Error("Icono no definido");

  const Icon = icons[iconKey];
  return <Icon />;
};
