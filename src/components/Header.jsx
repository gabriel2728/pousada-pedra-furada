import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Pousada Pedra Furada</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>
    </header>
  );
}