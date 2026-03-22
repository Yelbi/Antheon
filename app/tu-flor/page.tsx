import type { Metadata } from "next";
import TuFlorQuiz from "./TuFlorQuiz";

export const metadata: Metadata = {
  title: "Tu Flor – Descubre qué flor eres",
  description:
    "Responde 10 preguntas y descubre qué flor refleja mejor tu personalidad. Quiz de personalidad floral en Antheon.",
};

export default function TuFlorPage() {
  return (
    <main>
      <TuFlorQuiz />
    </main>
  );
}
