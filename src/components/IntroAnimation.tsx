
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoGP from "../assets/logo-gp.png";
import "./IntroAnimation.css";

const STORAGE_KEY = "gp-intro-seen-v1";
const INTRO_DURATION = 2700;

function shouldPlayIntro() {
  if (typeof window === "undefined") return false;

  try {
    const alreadySeen =
      window.sessionStorage.getItem(STORAGE_KEY) === "1";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    return !alreadySeen && !reduceMotion;
  } catch {
    return false;
  }
}

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(
    shouldPlayIntro
  );

  const finishIntro = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Continua normalmente se o armazenamento estiver bloqueado.
    }

    setShowIntro(false);
  };

  useEffect(() => {
    if (!showIntro) return;

    const timer = window.setTimeout(() => {
      finishIntro();
    }, INTRO_DURATION);

    return () => window.clearTimeout(timer);
  }, [showIntro]);

  const rays = Array.from({ length: 12 }, (_, index) => index);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="gp-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.45, ease: "easeOut" },
          }}
          aria-label="Animação de abertura GP"
        >
          {/* FUNDO DE ENERGIA */}
          <div className="gp-intro-background" />

          {/* ANÉIS DE TRANSFORMAÇÃO */}
          <div className="gp-energy-ring gp-ring-one" />
          <div className="gp-energy-ring gp-ring-two" />
          <div className="gp-energy-ring gp-ring-three" />

          {/* RAIOS VERDES */}
          <div className="gp-rays">
            {rays.map((index) => (
              <span
                key={index}
                className="gp-ray"
                style={{
                  transform: `rotate(${index * 30}deg)`,
                  animationDelay: `${0.7 + index * 0.035}s`,
                }}
              />
            ))}
          </div>

          {/* RELÂMPAGOS */}
          <svg
            className="gp-lightning"
            viewBox="0 0 1000 700"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter
                id="gp-lightning-glow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  stdDeviation="7"
                  result="blur"
                />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g
              filter="url(#gp-lightning-glow)"
              fill="none"
              stroke="#80ff3b"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline
                className="gp-bolt gp-bolt-one"
                points="0,65 180,150 135,210 350,265 500,350"
              />

              <polyline
                className="gp-bolt gp-bolt-two"
                points="1000,70 800,160 850,215 620,280 500,350"
              />

              <polyline
                className="gp-bolt gp-bolt-three"
                points="0,630 190,525 155,465 390,400 500,350"
              />

              <polyline
                className="gp-bolt gp-bolt-four"
                points="1000,640 800,520 845,445 610,390 500,350"
              />

              <polyline
                className="gp-bolt gp-bolt-five"
                points="500,0 455,105 545,170 475,255 500,350"
              />

              <polyline
                className="gp-bolt gp-bolt-six"
                points="500,700 545,595 460,530 525,440 500,350"
              />
            </g>
          </svg>

          {/* PARTÍCULAS */}
          <div className="gp-particles" aria-hidden="true">
            {Array.from({ length: 16 }, (_, index) => (
              <span
                key={index}
                className="gp-particle"
                style={{
                  left: `${(index * 37 + 13) % 100}%`,
                  top: `${(index * 23 + 17) % 100}%`,
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            ))}
          </div>

          {/* EMBLEMA GP */}
          <div className="gp-logo-container">
            <div className="gp-logo-aura" />

            <img
              src={logoGP}
              alt="Emblema GP"
              className="gp-intro-logo"
            />

            <div className="gp-logo-orbit" />
          </div>

          {/* TEXTO DE ATIVAÇÃO */}
          <div className="gp-intro-caption">
            <span className="gp-caption-line" />
            <span>INICIANDO SISTEMA GP</span>
            <span className="gp-caption-line" />
          </div>

          {/* CLARÃO FINAL */}
          <div className="gp-final-flash" />

          {/* BOTÃO PARA PULAR */}
          <button
            type="button"
            className="gp-skip-button"
            onClick={finishIntro}
          >
            Pular animação →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
