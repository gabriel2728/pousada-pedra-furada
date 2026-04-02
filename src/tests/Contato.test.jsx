import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contato from "../pages/contato";

// mock do router
const mockPush = jest.fn(); 

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: mockPush,
    };
  },
}));

describe("Página Contato", () => {
  it("deve renderizar o título Contato", () => {
    render(<Contato />);
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("deve redirecionar para home ao clicar no botão", async () => {
    render(<Contato />);

    const botao = screen.getByText("Voltar");

    await userEvent.click(botao);

    expect(mockPush).toHaveBeenCalledWith("/");  });
});