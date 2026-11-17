
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoGP from "../assets/logo-gp.png";
import "./IntroAnimation.css";

const STORAGE_KEY = "gp-intro-seen-v3";
const INTRO_DURATION = 2700;

type IntroPhase = "loading" | "playing" | "hidden";

function getInitialPhase(): IntroPhase {
  if (typeof window === "undefined") return "hidden";

  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      return "hidden";
    }

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return "hidden";
    }

    return "loading";
  } catch {
    return "hidden";
  }
}

export default function IntroAnimation() {
  const [phase, setPhase] = useState<IntroPhase>(
    getInitialPhase
  );

  const finishIntro = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // O site continua funcionando.
    }

    setPhase("hidden");
  };

  // Carrega a imagem antes de iniciar.
  useEffect(() => {
    if (phase !== "loading") return;

    let cancelled = false;
    let started = false;

    const image = new Image();

    const timeout = window.setTimeout(() => {
      if (!cancelled) finishIntro();
    }, 3000);

    const start = async () => {
      if (started || cancelled) return;
      started = true;

      try {
        await image.decode();
      } catch {
        if (!image.naturalWidth) {
          if (!cancelled) finishIntro();
          return;
        }
      }

      if (cancelled) return;

      window.clearTimeout(timeout);
      setPhase("playing");
    };

    image.onload = () => {
      void start();
    };

    image.onerror = () => {
      if (!cancelled) finishIntro();
    };

    image.src = logoGP;

    if (image.complete && image.naturalWidth > 0) {
      void start();
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      image.onload = null;
      image.onerror = null;
    };
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;

    const timer = window.setTimeout(
      finishIntro,
      INTRO_DURATION
    );

    return () => window.clearTimeout(timer);
  }, [phase]);

  const rays = Array.from(
    { length: 8 },
    (_, index) => index
  );

  return (
    <AnimatePresence>
      {phase !== "hidden" && (
        <motion.div
          className="gp-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4 },
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Abertura do portfólio GP"
        >
          <div className="gp-intro-background" />

          {phase === "playing" && (
            <>
              {/* ÁREA CENTRAL DA TRANSFORMAÇÃO */}
              <div className="gp-stage">

                {/* ANÉIS VERDES */}
                <div className="gp-energy-ring gp-ring-one" />
                <div className="gp-energy-ring gp-ring-two" />
                <div className="gp-energy-ring gp-ring-three" />

                {/* RAIOS DE ENERGIA */}
                <div className="gp-rays">
                  {rays.map((index) => (
                    <span
                      key={index}
                      className="gp-ray-wrapper"
                      style={{
                        transform: `rotate(${index * 45}deg)`,
                      }}
                    >
                      <span
                        className="gp-ray"
                        style={{
                          animationDelay:
                            `${0.55 + index * 0.05}s`,
                        }}
                      />
                    </span>
                  ))}
                </div>

                {/* RELÂMPAGOS PRÓXIMOS À LOGO */}
                <svg
                  className="gp-lightning"
                  viewBox="0 0 400 400"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="#87ff42"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline
                      className="gp-bolt gp-bolt-one"
                      points="0,70 75,120 55,155 140,180"
                    />

                    <polyline
                      className="gp-bolt gp-bolt-two"
                      points="400,70 325,120 345,155 260,180"
                    />

                    <polyline
                      className="gp-bolt gp-bolt-three"
                      points="0,330 75,280 55,245 140,220"
                    />

                    <polyline
                      className="gp-bolt gp-bolt-four"
                      points="400,330 325,280 345,245 260,220"
                    />
                  </g>
                </svg>

                {/* EMBLEMA GP */}
                <div className="gp-logo-container">
                  <div className="gp-logo-aura" />

                  <img
                    src={logoGP}
                    alt="Emblema GP"
                    className="gp-intro-logo"
                    draggable={false}
                  />
                </div>

              </div>

              {/* TEXTO */}
              <div className="gp-intro-caption">
                INICIANDO SISTEMA GP
              </div>

              {/* CLARÃO FINAL */}
              <div className="gp-final-flash" />
            </>
          )}

          {phase === "loading" && (
            <div className="gp-loading">
              Preparando transformação GP...
            </div>
          )}

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
