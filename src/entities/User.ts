import getAgeFromBirthday from "../helpers/getAgeFromBirthday";

export default class User {
  constructor(public name: string, public birthday: Date) {}

  public getAge = () => {
    return getAgeFromBirthday(this.birthday);
  };
}
