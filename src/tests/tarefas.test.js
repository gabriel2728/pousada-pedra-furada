import { createMocks } from "node-mocks-http";
import handler from "../pages/api/tarefas";

describe("API de tarefas", () => {
  it("deve retornar lista de tarefas", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});

it("deve criar uma nova tarefa", async () => {
  const { req, res } = createMocks({
    method: "POST",
    body: {
      titulo: "Limpar quarto",
      descricao: "Trocar lençóis",
    },
  });

  await handler(req, res);

  expect(res._getStatusCode()).toBe(201);

  const data = JSON.parse(res._getData());

  expect(data.titulo).toBe("Limpar quarto");
});