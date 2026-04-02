import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Reserva() {
  // 👇 estados (dados do formulário)
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");

  // 👇 função ao enviar
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Reserva feita!\nNome: ${nome}\nEmail: ${email}\nData: ${data}`);

    // limpar campos
    setNome("");
    setEmail("");
    setData("");
  };

  return (
    <main>
      <Header />

      <section style={{ padding: "40px", textAlign: "center" }}>
        <h1>Faça sua Reserva</h1>

        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          
          <div style={{ margin: "10px" }}>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div style={{ margin: "10px" }}>
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ margin: "10px" }}>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <button type="submit">Confirmar Reserva</button>

        </form>
      </section>

      <Footer />
    </main>
  );
}