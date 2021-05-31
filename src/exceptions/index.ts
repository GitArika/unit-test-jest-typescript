export default class Exceptions extends Error {
  constructor(public message: string, public status: number) {
    super();
  }
}
