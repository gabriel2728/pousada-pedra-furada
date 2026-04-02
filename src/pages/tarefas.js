import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import styles from "../styles/pages.module.css";

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetch("/api/tarefas")
      .then((res) => res.json())
      .then((data) => setTarefas(data));
  }, []);

  return (
    <div className={styles.container}>
      <Menu />

      <h1>Tarefas</h1>
      <p>Cadastro e gerenciamento de tarefas</p>

      {/* 👇 LISTA DE TAREFAS */}
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>
    </div>
  );
}