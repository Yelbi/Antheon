'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PREGUNTAS, PERSONALIDADES } from '@/data/quiz';
import { getFlor } from '@/data/flores';
import styles from '@/styles/tu-flor.module.css';

type Phase = 'intro' | 'quiz' | 'result';

export default function TuFlorQuiz() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [resultado, setResultado] = useState<string | null>(null);

  const handleOpcion = (idx: number) => {
    if (selectedOption !== null) return;

    const opcion = PREGUNTAS[currentQ].opciones[idx];
    setSelectedOption(idx);

    const newScores = { ...scores };
    opcion.flores.forEach((slug) => {
      newScores[slug] = (newScores[slug] ?? 0) + 1;
    });

    setTimeout(() => {
      if (currentQ < PREGUNTAS.length - 1) {
        setScores(newScores);
        setCurrentQ((q) => q + 1);
        setSelectedOption(null);
      } else {
        const winner = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
        setResultado(winner);
        setScores(newScores);
        setPhase('result');
      }
    }, 600);
  };

  const handleReset = () => {
    setPhase('intro');
    setCurrentQ(0);
    setScores({});
    setSelectedOption(null);
    setResultado(null);
  };

  /* ── Introducción ─────────────────────────────────────────── */
  if (phase === 'intro') {
    return (
      <div className={styles.page}>
        <div className={styles.introWrap}>
          <div className={styles.introBadge}>
            <span className={styles.introBadgeDot} />
            Quiz de personalidad floral
          </div>
          <h1 className={styles.introTitle}>¿Cuál es tu flor?</h1>
          <p className={styles.introDesc}>
            Responde 10 preguntas sobre tu manera de sentir, amar y ver el mundo.
            Al final descubrirás qué flor refleja mejor tu esencia.
          </p>
          <button className={styles.introBtn} onClick={() => setPhase('quiz')}>
            Descubrir mi flor
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  /* ── Resultado ────────────────────────────────────────────── */
  if (phase === 'result' && resultado) {
    const flor = getFlor(resultado);
    const personalidad = PERSONALIDADES[resultado] ?? '';
    const nombre = flor?.nombre ?? resultado;
    const poster = flor?.poster ?? '/img/Generales/Galeria/Rosas.jpg';

    return (
      <div className={styles.resultLayout}>
        {/* Imagen */}
        <div className={styles.resultImage}>
          <Image
            src={poster}
            alt={nombre}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 900px) 100vw, 55vw"
            priority
          />
          <div className={styles.resultImageOverlay} />
        </div>

        {/* Info */}
        <div className={styles.resultInfo}>
          <div className={styles.resultInner}>
            <div className={styles.resultBadge}>
              <span className={styles.resultBadgeDot} />
              Tu flor
            </div>
            <p className={styles.resultPreTitle}>Has descubierto que eres</p>
            <div className={styles.resultDivider} />
            <h2 className={styles.resultNombre}>{nombre}</h2>
            <p className={styles.resultPersonalidad}>{personalidad}</p>
            <div className={styles.resultActions}>
              {flor && (
                <Link href={`/flores/${flor.slug}`} className={styles.resultCta}>
                  Conocer más sobre {nombre}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
              <button className={styles.resultReset} onClick={handleReset}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7a6 6 0 1 0 1.2-3.6M1 1v3.5h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Repetir quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Quiz ─────────────────────────────────────────────────── */
  const pregunta = PREGUNTAS[currentQ];
  const progreso = ((currentQ + 1) / PREGUNTAS.length) * 100;

  return (
    <div className={styles.page}>
      <div className={styles.quizContainer}>
        {/* Progreso */}
        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progreso}%` }} />
          </div>
          <span className={styles.progressLabel}>
            {currentQ + 1}&nbsp;/&nbsp;{PREGUNTAS.length}
          </span>
        </div>

        {/* Pregunta */}
        <div key={currentQ} className={styles.questionCard}>
          <p className={styles.questionNumber}>Pregunta {currentQ + 1}</p>
          <h2 className={styles.questionText}>{pregunta.pregunta}</h2>

          <div className={styles.options}>
            {pregunta.opciones.map((opcion, idx) => (
              <button
                key={idx}
                className={[
                  styles.optionBtn,
                  selectedOption === idx ? styles.optionSelected : '',
                  selectedOption !== null && selectedOption !== idx ? styles.optionDimmed : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handleOpcion(idx)}
                disabled={selectedOption !== null}
              >
                <span className={styles.optionLetter}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className={styles.optionText}>{opcion.texto}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
