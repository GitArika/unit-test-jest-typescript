import User from "../entities/User";

export default function checkUserAdulthood(user: User): boolean {
  return user.getAge() >= 18;
}
