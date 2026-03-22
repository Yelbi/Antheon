'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from '@/styles/detalle.module.css';

interface FlorDetalle {
  nombre: string;
  nombreCientifico: string;
  categoria: string;
  origen: string;
  estacion: string;
  genero: string;
  familia: string;
  description: string;
  simbolismo: string;
  usos: string;
  cuidados: string;
  peligrosa: boolean;
  slug: string;
}

interface Props {
  flor: FlorDetalle;
  slideImages: [string, string, string];
  anterior: { slug: string; nombre: string } | null;
  siguiente: { slug: string; nombre: string } | null;
}

const ANIM_SPD = 750;
const N_SLIDES = 3;

export default function FlorSlider({ flor, slideImages, anterior, siguiente }: Props) {
  const [curSlide, setCurSlide] = useState(1);
  const animatingRef = useRef(false);
  const curSlideRef = useRef(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const contRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const diffRef = useRef(0);
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => { curSlideRef.current = curSlide; }, [curSlide]);

  // ── Transforms ────────────────────────────────────────────
  const applyTransforms = useCallback((target: number, drag: number, animated: boolean) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const tr = animated ? `transform ${ANIM_SPD}ms ease-in-out` : 'none';

    slider.style.transition = tr;
    slider.style.transform = `translate3d(${-((target - 1) * 100) - drag / 30}%, 0, 0)`;

    slider.querySelectorAll<HTMLElement>('[data-p="bg"]').forEach((el) => {
      el.style.transition = tr;
      el.style.transform = `translate3d(${(target - 1) * 50 + drag / 60}%, 0, 0)`;
    });

    slider.querySelectorAll<HTMLElement>('[data-p="content"]').forEach((el) => {
      el.style.transition = tr;
      el.style.transform = animated
        ? 'translate3d(0, 0, 0)'
        : `translate3d(${drag / 15}px, 0, 0)`;
    });
  }, []);

  // ── Navigate ───────────────────────────────────────────────
  const navigateTo = useCallback((target: number) => {
    if (animatingRef.current) return;
    if (target < 1 || target > N_SLIDES) return;
    animatingRef.current = true;
    diffRef.current = 0;
    applyTransforms(target, 0, true);
    clearTimeout(animTimerRef.current);
    animTimerRef.current = setTimeout(() => {
      animatingRef.current = false;
      setCurSlide(target);
    }, ANIM_SPD);
  }, [applyTransforms]);

  // ── Keyboard ───────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') navigateTo(curSlideRef.current + 1);
      if (e.key === 'ArrowLeft') navigateTo(curSlideRef.current - 1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [navigateTo]);

  // ── Wheel ──────────────────────────────────────────────────
  useEffect(() => {
    const cont = contRef.current;
    if (!cont) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (animatingRef.current) return;
      if (e.deltaY > 0) navigateTo(curSlideRef.current + 1);
      else navigateTo(curSlideRef.current - 1);
    };
    cont.addEventListener('wheel', onWheel, { passive: false });
    return () => cont.removeEventListener('wheel', onWheel);
  }, [navigateTo]);

  // ── Drag ───────────────────────────────────────────────────
  const onDragStart = useCallback((clientX: number) => {
    if (animatingRef.current) return;
    startXRef.current = clientX;
    diffRef.current = 0;
    const slider = sliderRef.current;
    if (!slider) return;
    slider.style.transition = 'none';
    slider.querySelectorAll<HTMLElement>('[data-p]').forEach((el) => {
      el.style.transition = 'none';
    });
  }, []);

  const onDragMove = useCallback((clientX: number) => {
    const cur = curSlideRef.current;
    const diff = startXRef.current - clientX;
    if (cur === 1 && diff < 0) return;
    if (cur === N_SLIDES && diff > 0) return;
    diffRef.current = diff;
    applyTransforms(cur, diff, false);
  }, [applyTransforms]);

  const onDragEnd = useCallback(() => {
    if (animatingRef.current) return;
    const cur = curSlideRef.current;
    const diff = diffRef.current;
    const threshold = window.innerWidth * 0.2;
    if (diff >= threshold) navigateTo(cur + 1);
    else if (diff <= -threshold) navigateTo(cur - 1);
    else {
      animatingRef.current = true;
      applyTransforms(cur, 0, true);
      clearTimeout(animTimerRef.current);
      animTimerRef.current = setTimeout(() => { animatingRef.current = false; }, ANIM_SPD);
    }
  }, [navigateTo, applyTransforms]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    onDragStart(e.pageX);
    const onMove = (ev: MouseEvent) => onDragMove(ev.pageX);
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      onDragEnd();
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, [onDragStart, onDragMove, onDragEnd]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    onDragStart(e.touches[0].pageX);
    const onMove = (ev: TouchEvent) => onDragMove(ev.touches[0].pageX);
    const onEnd = () => {
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
      onDragEnd();
    };
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchend', onEnd);
  }, [onDragStart, onDragMove, onDragEnd]);

  useEffect(() => () => clearTimeout(animTimerRef.current), []);

  const { nombre, nombreCientifico, categoria, origen, estacion, genero,
          familia, description, simbolismo, usos, cuidados, peligrosa } = flor;

  const fichaItems = [
    { label: 'Nombre científico', value: nombreCientifico },
    { label: 'Categoría', value: categoria },
    { label: 'Género', value: genero },
    { label: 'Familia', value: familia },
    { label: 'Origen', value: origen },
    { label: 'Floración', value: estacion },
  ].filter((i) => i.value?.trim());

  const h = { onMouseDown: handleMouseDown, onTouchStart: handleTouchStart };

  return (
    <div ref={contRef} className={styles.cont}>
      <div ref={sliderRef} className={styles.slider}>

        {/* ══════════════════ SLIDE 1 — Presentación ════════════════ */}
        <div className={styles.slide} style={{ left: '0%' }} data-target="1" {...h}>
          {/* Fondo con degradado desde abajo */}
          <div
            data-p="bg"
            className={`${styles.darkbg} ${styles.darkbgHero}`}
            style={{ left: '0%', backgroundImage: `url('${slideImages[0]}')` }}
          />
          <div className={styles.slideCounter}>01 / 03</div>
          {/* Contenido anclado al fondo */}
          <div className={styles.slideInnerHero}>
            <div data-p="content" className={`${styles.content} ${styles.contentHero}`}>
              <div className={styles.heroTopRow}>
                <span className={styles.categoriaBadge}>
                  {peligrosa && <span className={styles.toxicDot} title="Tóxica" />}
                  {categoria}
                </span>
              </div>
              <h1 className={styles.slideNombre}>{nombre}</h1>
              {nombreCientifico && (
                <p className={styles.nombreCientifico}>{nombreCientifico}</p>
              )}
              {fichaItems.length > 0 && (
                <div className={styles.fichaGrid}>
                  {fichaItems.map((item) => (
                    <div key={item.label} className={styles.fichaItem}>
                      <span className={styles.fichaLabel}>{item.label}</span>
                      <span className={styles.fichaValor}>{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ══════════════════ SLIDE 2 — Descripción ═════════════════ */}
        <div className={styles.slide} style={{ left: '100%' }} data-target="2" {...h}>
          <div
            data-p="bg"
            className={`${styles.darkbg} ${styles.darkbgContent}`}
            style={{ left: '-50%', backgroundImage: `url('${slideImages[1]}')` }}
          />
          <div className={styles.slideCounter}>02 / 03</div>
          <div className={styles.slideInnerCenter}>
            <div data-p="content" className={`${styles.content} ${styles.contentCard}`}>
              <span className={styles.sectionLabel}>Descripción</span>
              <div className={styles.divider} />
              <p className={styles.bodyText}>{description}</p>
              {simbolismo && (
                <>
                  <span className={styles.sectionLabel} style={{ marginTop: 28 }}>Simbolismo</span>
                  <div className={styles.divider} />
                  <p className={styles.bodyText}>{simbolismo}</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ══════════════════ SLIDE 3 — Usos & Cuidados ════════════ */}
        <div className={styles.slide} style={{ left: '200%' }} data-target="3" {...h}>
          <div
            data-p="bg"
            className={`${styles.darkbg} ${styles.darkbgContent}`}
            style={{ left: '-100%', backgroundImage: `url('${slideImages[2]}')` }}
          />
          <div className={styles.slideCounter}>03 / 03</div>
          <div className={styles.slideInnerCenter}>
            <div data-p="content" className={`${styles.content} ${styles.contentCard}`}>
              {usos && (
                <>
                  <span className={styles.sectionLabel}>Usos</span>
                  <div className={styles.divider} />
                  <p className={styles.bodyText}>{usos}</p>
                </>
              )}
              {cuidados && (
                <>
                  <span className={styles.sectionLabel} style={{ marginTop: usos ? 28 : 0 }}>Cuidados</span>
                  <div className={styles.divider} />
                  <p className={styles.bodyText}>{cuidados}</p>
                </>
              )}
              {!usos && !cuidados && (
                <p className={styles.bodyText} style={{ opacity: 0.4, fontStyle: 'italic' }}>
                  Información no disponible.
                </p>
              )}
              <nav className={styles.slideNav}>
                {anterior && (
                  <Link href={`/flores/${anterior.slug}`} className={styles.navBtn}>
                    <span className={styles.navBtnLabel}>← Anterior</span>
                    <span className={styles.navBtnNombre}>{anterior.nombre}</span>
                  </Link>
                )}
                {siguiente && (
                  <Link href={`/flores/${siguiente.slug}`} className={styles.navBtn}>
                    <span className={styles.navBtnLabel}>Siguiente →</span>
                    <span className={styles.navBtnNombre}>{siguiente.nombre}</span>
                  </Link>
                )}
              </nav>
              <Link href="/galeria" className={styles.volver}>← Volver a la galería</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dots ─────────────────────────────────────────────── */}
      <ul className={styles.navDots}>
        {[1, 2, 3].map((i) => (
          <li
            key={i}
            className={`${styles.navDot} ${curSlide === i ? styles.navDotActive : ''}`}
            onClick={() => navigateTo(i)}
          />
        ))}
      </ul>

      {/* ── Side nav ─────────────────────────────────────────── */}
      <div className={`${styles.sideNav} ${styles.sideNavLeft}`} onClick={() => navigateTo(curSlide - 1)} />
      <div className={`${styles.sideNav} ${styles.sideNavRight}`} onClick={() => navigateTo(curSlide + 1)} />
    </div>
  );
}
