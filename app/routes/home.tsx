import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job " },
  ];
}

export default function Home() {
  return <main>
    <Navbar/>
    <section className="bg-[url('/images/bg-main.svg')] bg-cover">
      <div className="main-section">
        <h1>Track Your Application & Resume Ratings </h1>
        <h2>Review your submission and check AI-powered feedback.</h2>
      </div>

    </section>

    {[]}
  </main>
}
