import Exceptions from "../index";

export default class ExceptionsConstants {
  public static readonly USUARIO_SEM_DATA_NASCIMENTO = new Exceptions(
    "Usuario não possuí data de nascimento",
    404
  );
}
