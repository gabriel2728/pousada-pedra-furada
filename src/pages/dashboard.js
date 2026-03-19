import Menu from "../components/Menu";
import styles from "../styles/pages.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Menu />
      <h1>Dashboard</h1>
      <p>Bem-vindo ao sistema da Pousada Pedra Furada</p>
    </div>
  );
}