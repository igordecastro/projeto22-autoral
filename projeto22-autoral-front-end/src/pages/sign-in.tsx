import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token: string | null = localStorage.getItem('token');
    }
  }, []);

  function login(event: { preventDefault: () => void }) {
    event.preventDefault();
    setDisable(true);

    axios
      .post(`http://localhost:4000/sign-in`, { email, password })
      .then((ans) => {
        localStorage.setItem("token", JSON.stringify(ans.data.token));
        router.replace("/");
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
      <form onSubmit={login} className="flex flex-col border-2 border-black p-3">
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
          Log In
        </button>
        <span onClick={() => router.replace("/")}>
          <br />
          First time? Create an account!
        </span>
      </form>
    </div>
  );
}
