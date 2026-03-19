import Menu from "../components/Menu";
import styles from "../styles/pages.module.css";

export default function Tarefas() {
  return (
    <div className={styles.container}>
      <Menu />
      <h1>Tarefas</h1>
      <p>Cadastro e gerenciamento de tarefas</p>
    </div>
  );
}