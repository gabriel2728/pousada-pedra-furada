import styles from "../styles/Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <a href="/dashboard">Dashboard</a>
      <a href="/tarefas">Tarefas</a>
      <a href="/quartos">Quartos</a>
      <a href="/usuarios">Usuários</a>
    </nav>
  );
}