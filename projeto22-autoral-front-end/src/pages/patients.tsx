import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  
  function createPatient(event: { preventDefault: () => void }) {
    event.preventDefault();
    setDisable(true);
    axios
      .post(`http://localhost:4000/patients`, { email, password })
      .then(() => {
        window.alert('usuário criado com sucesso!')
        router.replace('/sign-in');
      })
      .catch((ans) => {
        console.log(ans);
        setDisable(false);
      });
  }

  return (
    <div
      className={
        "flex min-h-screen flex-col items-center justify-center h-full "
      }
    >
      <form onSubmit={createPatient} className="flex flex-col border-2 border-black p-3">
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Senha:</label>
          <input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        </div>
        <button type="submit" disabled={disable} className="flex justify-center">
          Signup
        </button>
        <span onClick={() => router.replace("/sign-in")}>
          <br />
          Already registered? Sign-in!
        </span>
      </form>
    </div>
  );
}
