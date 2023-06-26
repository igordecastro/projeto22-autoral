import axios from "axios";
import { Inter } from "next/font/google";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router: NextRouter = useRouter();
  const [professionals, setProfessionals] = useState<
    {
      id: number;
      specialty: string;
      name: string;
      phone_number: number;
      public_schedule: { date: string }[];
    }[]
  >([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/professionals")
      .then((ans) => {
        setProfessionals(ans.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="flex items-center justify-around fixed top-0 left-0 bg-slate-500 w-full text-white h-12">
        <img src="/logo.png" alt="Clínica" className="h-full w-auto" />
        <h1>Clínica Estética</h1>
        <div
          className="border-2 rounded-lg flex items-center w-9"
          onClick={() => router.replace("/sign-in")}
        >
          <img src="/person-outline.svg" alt="Login" />
          <p className="ml-2">Login</p>
        </div>
      </div>
      <div className="flex flex-col m-auto bg-white rounded shadow-md justify-around h-80vh">
        {professionals.length > 0 &&
          professionals.map((p, index) =>
            p.name && p.specialty && p.phone_number && p.public_schedule ? (
              <About key={index} {...p} />
            ) : null
          )}
      </div>
    </main>
  );
}

function About(p: {
  id: number;
  specialty: string;
  name: string;
  phone_number: number;
  public_schedule: { date: string }[];
}) {
  const router: NextRouter = useRouter();

  return (
    <div className="mx-12 rounded border-2 inline-block">
      <div className="p-2">
        <h3 className="text-left">{p.name}</h3>
        <div className="bg-current separator h-0.5 w-full" />

        <h4 className="text-left">{p.specialty}</h4>
        <div className="bg-current separator h-0.5 w-full" />

        <div className="flex overflow-scroll">
          <p>Próximos horários disponíveis: </p>
          {p.public_schedule.map((s) => {
            const date = new Date(s.date);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            return (
              <button
                onClick={() =>
                  router.push({
                    pathname: "/appointments",
                    query: {
                      id: p.id,
                      date: generateTimestamp(hours, minutes, seconds),
                    },
                  })
                }
                className="m-auto"
              >
                {s.date.slice(11, 16)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function generateTimestamp(hour: number, minute: number, second: number) {
  const date: Date = new Date();
  date.setHours(hour, minute, second);

  const timestamp: string = date.toISOString();

  return timestamp;
}
