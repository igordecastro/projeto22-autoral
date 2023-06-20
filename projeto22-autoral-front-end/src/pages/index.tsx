import axios from "axios";
import { Inter } from "next/font/google";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router: NextRouter = useRouter();
  const [professionals, setProfessionals] = useState<
    { specialty: string; name: string; phone_number: number }[]
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
        <div className="border-2 rounded-lg flex items-center w-9" onClick={() => router.replace('/sign-in')}>
          <img src="/person-outline.svg" alt="Login" />
          <p className="ml-2">Login</p>
        </div>
      </div>

      {professionals.length > 0 &&
        professionals.map((p, index) =>
          p.name && p.specialty && p.phone_number ? (
            <About key={index} {...p} />
          ) : null
        )}
    </main>
  );
}

function About(p: { specialty: string; name: string; phone_number: number }) {
  return (
    <div className="border-2 rounded-lg flex flex-col mt-12 justify-around items-center">
      <h3>{p.name}</h3>
      <h4>{p.specialty}</h4>
    </div>
  );
}
