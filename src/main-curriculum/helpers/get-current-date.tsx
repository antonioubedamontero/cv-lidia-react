import { DateTime } from "luxon";

export const getCurrentYear = () => DateTime.now().toFormat("yyyy");
