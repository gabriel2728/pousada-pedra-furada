import { useRouter } from "next/router";

export default function Contato() {
  const router = useRouter();

  const voltarHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Contato</h1>
      <button onClick={voltarHome}>Voltar</button>
    </div>
  );
}