import { intervalToDuration } from "date-fns";
import DateHelper from "./dateHelper";
import ExceptionsConstants from "../exceptions/ExceptionsConstants";

export default function getAgeFromBirthday(birthday: Date): number {
  if (!birthday) throw ExceptionsConstants.USUARIO_SEM_DATA_NASCIMENTO;

  let duration = intervalToDuration({
    start: DateHelper.getDateNow(),
    end: birthday,
  });

  return duration.years;
}
