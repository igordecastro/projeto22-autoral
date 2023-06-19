import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [date, setDate] = useState(" ");
  const [professional_id, setProfessional_id] = useState(" ");
  const [disable, setDisable] = useState(false);
  const router = useRouter();

  function makeAppointment(event: { preventDefault: () => void }) {
    event.preventDefault();
    setDisable(true);

    const token: string | undefined = localStorage.getItem('token')?.replaceAll('"','');
    
    axios
      .post(`http://localhost:4000/appointments`, { date, professional_id }, {headers: {"Authorization":`Bearer ${token}`}})
      .then(() => {
        alert("Agendamento realizado!")
        router.replace('/');
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
      <form onSubmit={makeAppointment} className="flex flex-col border-2 border-black p-3">
        <div className="mb-4">
          <label htmlFor="date">Data e horário:</label>
          <input
          placeholder="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          required
        />
        </div>
        <div className="mb-4">
          <label htmlFor="professional_id">ID do profissional:</label>
          <input
          placeholder="professional_id"
          type="professional_id"
          onChange={(e) => {
            setProfessional_id(e.target.value);
          }}
          required
        />
        </div>
        <button type="submit" disabled={disable} className="flex justify-center">
          Agendar
        </button>
      </form>
    </div>
  );
}
