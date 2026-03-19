export default function Login() {
  return (
    <div>
      <h1>Login</h1>

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Senha" />
      <br /><br />

      <a href="/dashboard">
        <button>Entrar</button>
      </a>
    </div>
  );
}