
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoGP from "../assets/logo-gp.png";
import "./IntroAnimation.css";

const STORAGE_KEY = "gp-intro-seen-v2";
const INTRO_DURATION = 2700;
const MAX_LOADING_TIME = 2500;

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);

  const finishIntro = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Continua normalmente.
    }

    setShowIntro(false);
  };

  // Carrega e decodifica a logo antes da animação
  useEffect(() => {
    let cancelled = false;
    let loadingTimer: number;

    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        return;
      }

      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        return;
      }
    } catch {
      return;
    }

    const image = new Image();

    // Evita bloquear a página se a imagem estiver lenta
    loadingTimer = window.setTimeout(() => {
      if (cancelled) return;

      cancelled = true;

      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Ignora bloqueio do armazenamento
      }
    }, MAX_LOADING_TIME);

    const startAnimation = async () => {
      try {
        if (image.decode) {
          await image.decode();
        }

        if (cancelled) return;

        window.clearTimeout(loadingTimer);
        setReady(true);
        setShowIntro(true);
      } catch {
        window.clearTimeout(loadingTimer);
      }
    };

    image.onload = () => {
      void startAnimation();
    };

    image.onerror = () => {
      window.clearTimeout(loadingTimer);
    };

    image.src = logoGP;

    if (image.complete && image.naturalWidth > 0) {
      void startAnimation();
    }

    return () => {
      cancelled = true;
      window.clearTimeout(loadingTimer);
      image.onload = null;
      image.onerror = null;
    };
  }, []);

  // Inicia a contagem somente quando a imagem está pronta
  useEffect(() => {
    if (!showIntro || !ready) return;

    const timer = window.setTimeout(() => {
      finishIntro();
    }, INTRO_DURATION);

    return () => window.clearTimeout(timer);
  }, [showIntro, ready]);

  const rays = Array.from(
    { length: 12 },
    (_, index) => index
  );

  return (
    <AnimatePresence>
      {showIntro && ready && (
        <motion.div
          className="gp-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          aria-label="Animação de abertura GP"
        >
          {/* FUNDO */}
          <div className="gp-intro-background" />

          {/* ANÉIS */}
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
                  animationDelay: `${
                    0.7 + index * 0.035
                  }s`,
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
            <g
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
          <div
            className="gp-particles"
            aria-hidden="true"
          >
            {Array.from(
              { length: 12 },
              (_, index) => (
                <span
                  key={index}
                  className="gp-particle"
                  style={{
                    left: `${
                      (index * 37 + 13) % 100
                    }%`,
                    top: `${
                      (index * 23 + 17) % 100
                    }%`,
                    animationDelay: `${
                      index * 0.1
                    }s`,
                  }}
                />
              )
            )}
          </div>

          {/* EMBLEMA */}
          <div className="gp-logo-container">
            <div className="gp-logo-aura" />

            <img
              src={logoGP}
              alt="Emblema GP"
              className="gp-intro-logo"
              decoding="async"
            />

            <div className="gp-logo-orbit" />
          </div>

          {/* TEXTO */}
          <div className="gp-intro-caption">
            <span className="gp-caption-line" />
            <span>INICIANDO SISTEMA GP</span>
            <span className="gp-caption-line" />
          </div>

          {/* EXPLOSÃO FINAL */}
          <div className="gp-final-flash" />

          {/* PULAR */}
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
