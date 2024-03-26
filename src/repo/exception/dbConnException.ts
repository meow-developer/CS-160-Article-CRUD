export default class DbConnException extends Error {
  constructor(message: string) {
    super(message);
  }
}