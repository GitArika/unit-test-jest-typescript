import User from "../src/entities/User";
import DateHelper from "../src/helpers/dateHelper";
import ExceptionsConstants from "../src/exceptions/ExceptionsConstants";
import checkUserAdulthood from "../src/validations/checkUserAdulthood";

describe("Suite de testes do usuário", () => {
  let user: User;

  beforeAll(() => {
    DateHelper.getDateNow = jest.fn().mockReturnValue(new Date("05-21-2021"));
  });

  beforeEach(() => {
    user = new User("portal-empresas-user", new Date("05-21-2003"));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it(`1 - Usuário com 18 anos, deve retornar true na verificação de maioridade.`, () => {
    expect(checkUserAdulthood(user)).toBe(true);
  });

  it("2 - Usuário com 19 anos, deve retornar true na verificação de marioridade.", () => {
    user.birthday = new Date("05-21-2002");

    expect(checkUserAdulthood(user)).toBe(true);
  });

  it("3 - Usuário com 17 anos, deve retornar false na verificação de marioridade.", () => {
    user.birthday = new Date("05-21-2004");

    expect(checkUserAdulthood(user)).toBe(false);
  });

  it("4 - Usuário com 1 dia faltante para 18 anos, deve retornar false na verificação de marioridade.", () => {
    user.birthday = new Date("05-22-2003");

    expect(checkUserAdulthood(user)).toBe(false);
  });

  it("5 - Usuário com 18 anos e 1 dia, deve retornar true na verificação de marioridade.", () => {
    user.birthday = new Date("05-20-2003");

    expect(checkUserAdulthood(user)).toBe(true);
  });

  it("6 - Usuario com data de nascimento futura, deve retornar false na verificação de marioridade", () => {
    user.birthday = new Date("05-20-2022");

    expect(checkUserAdulthood(user)).toBe(false);
  });

  it("7 - Usuario sem data de nascimento, deve lançar uma exceção.", () => {
    delete user.birthday;

    expect(() => checkUserAdulthood(user)).toThrow(ExceptionsConstants.USUARIO_SEM_DATA_NASCIMENTO);
  });
});
