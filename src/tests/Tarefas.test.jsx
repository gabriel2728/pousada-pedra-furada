import { render, screen } from "@testing-library/react";
import Tarefas from "../pages/tarefas";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);
describe("Página Tarefas", () => {
  it("deve renderizar o título Tarefas", () => {
    render(<Tarefas />);
    
    expect(
  screen.getByRole("heading", { name: "Tarefas" })
 ).toBeInTheDocument();
  });

  it("deve renderizar a descrição da página", () => {
    render(<Tarefas />);
    
    expect(
      screen.getByText("Cadastro e gerenciamento de tarefas")
    ).toBeInTheDocument();
  });
});

it("deve renderizar tarefas vindas da API", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, titulo: "Limpar quarto 101" },
          { id: 2, titulo: "Trocar lençóis" },
        ]),
    })
  );

  render(<Tarefas />);

  expect(await screen.findByText("Limpar quarto 101")).toBeInTheDocument();
  expect(await screen.findByText("Trocar lençóis")).toBeInTheDocument();
});