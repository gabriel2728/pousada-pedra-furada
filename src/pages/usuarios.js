import Menu from "../components/Menu";
import styles from "../styles/pages.module.css";

export default function Usuarios() {
  return (
    <div className={styles.container}>
      <Menu />
      <h1>Usuários</h1>
      <p>Cadastro e gerenciamento de usuários</p>
    </div>
  );
}