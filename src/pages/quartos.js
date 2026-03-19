import Menu from "../components/Menu";
import styles from "../styles/pages.module.css";

export default function Quartos() {
  return (
    <div className={styles.container}>
      <Menu />
      <h1>Quartos</h1>
      <p>Visualização de quartos ocupados e disponíveis</p>
    </div>
  );
}