import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Smartphone,
  Code2,
  Database,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import fotoPerfil from "./assets/perfil.png";

export default function PortfolioGabriel() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const techs = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "Cypress",
    "GitHub",
    "API REST",
  ];

  const projects = [
    {
      title: "Pets Up",
      description:
        "Aplicativo mobile voltado para adoção de pets, conectando pessoas interessadas em adotar com quem deseja encontrar um novo lar para seus animais.",
      stack: ["React Native", "Node.js", "TypeScript", "MySQL"],
      highlights: [
        "Cadastro de usuários e pets",
        "Filtros por espécie, raça e localização",
        "Integração entre app mobile e API",
        "Estrutura completa com banco de dados",
      ],
      icon: <Smartphone className="h-5 w-5" />,
      frontend: "https://github.com/GabrielPdoCarmo/TCC---Front",
      backend: "https://github.com/GabrielPdoCarmo/TCC---Back",
      code: "#",
    },
    {
      title: "Campo Peças 🚧 (Em desenvolvimento)",
      description:
        "Sistema web em desenvolvimento voltado para venda e gestão de peças, com foco em performance, usabilidade e organização de produtos.",
      stack: ["React", "TypeScript", "Node.js", "API REST"],
      highlights: [
        "Sistema em desenvolvimento contínuo",
        "Listagem e busca de produtos",
        "Interface moderna e responsiva",
        "Integração com back-end",
      ],
      icon: <Code2 className="h-5 w-5" />,
      link: "#",
      code: "#",
    },
    {
      title: "QA e Testes",
      description:
        "Experiência com testes funcionais e automatizados para validação de fluxos críticos e qualidade de software.",
      stack: ["Cypress", "TypeScript", "QA", "Testes Funcionais"],
      highlights: [
        "Automação de testes",
        "Validação de cenários críticos",
        "Foco em qualidade",
        "Apoio à confiabilidade do sistema",
      ],
      icon: <ShieldCheck className="h-5 w-5" />,
      link: "#",
      code: "#",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.12,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-extrabold tracking-wide">
              Gabriel Pereira do Carmo
            </p>
            <p className="text-sm text-slate-400">
              Desenvolvedor em formação
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#sobre" className="transition hover:text-cyan-300">
              Sobre
            </a>
            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>
            <a href="#projetos" className="transition hover:text-cyan-300">
              Projetos
            </a>
            <a href="#contato" className="transition hover:text-cyan-300">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Criando experiências{" "}
              <span className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                web e mobile
              </span>{" "}
              com foco em qualidade.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Sou formando em TADS e mestrando em Ciência da Computação, com foco em Engenharia de Software. Possuo experiência no desenvolvimento front-end, mobile, criação de APIs, banco de dados e testes automatizados. Busco transformar ideias em soluções funcionais, bem estruturadas e com excelente experiência de usuário.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-900/30 transition hover:-translate-y-0.5"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Falar comigo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-slate-300">

              {/* GITHUB */}
              <a
                href="https://github.com/GabrielPdoCarmo"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <FaGithub className="h-5 w-5 text-white transition group-hover:scale-110 group-hover:text-cyan-300" />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/gabriel-carmo-077801309/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <FaLinkedin className="h-5 w-5 text-white transition group-hover:scale-110 group-hover:text-cyan-300" />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:gabrielcarmobr19@gmail.com"
                className="group rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <Mail className="h-5 w-5 text-white transition group-hover:scale-110 group-hover:text-cyan-300" />
              </a>

            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-4xl-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Projeto em destaque
                    </p>
                    <h2 className="mt-1 text-3xl font-black text-cyan-300">
                      Pets Up
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Smartphone className="h-6 w-6" />
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-300">
                  Aplicativo de adoção de pets com cadastro de usuários,
                  cadastro de animais, filtros inteligentes e integração
                  completa com back-end.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">📱 Mobile</p>
                    <p className="mt-1 text-sm text-slate-400">
                      React Native com foco em experiência do usuário
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">⚙️ Back-end</p>
                    <p className="mt-1 text-sm text-slate-400">
                      API com Node.js, TypeScript
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">🗄️ Banco de dados</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Modelagem e persistência com MySQL
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["React Native", "Node.js", "MySQL"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="flex justify-center pb-6">
          <a
            href="#sobre"
            className="animate-bounce rounded-full border border-white/10 bg-white/5 p-3 text-slate-300"
          >
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>

        <section id="sobre" className="mx-auto max-w-6xl px-6 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-3"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Sobre
              </p>
              <h2 className="mt-3 text-3xl font-black">Quem sou eu</h2>

              {/* FOTO ABAIXO DO TÍTULO */}
              <div className="mt-6 flex justify-center md:justify-start">
                <img
                  src={fotoPerfil}
                  alt="Foto de Gabriel"
                  className="h-56 w-56 md:h-64 md:w-64 rounded-full border border-cyan-400/20 object-cover shadow-lg shadow-cyan-900/30"
                />
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-linear-to-br from-white/5 to-slate-900 p-8 md:col-span-2 shadow-xl shadow-cyan-900/10">
              <div>
                <div>
                  <p className="leading-8 text-slate-300 text-center md:text-left">
                    Tenho foco em desenvolvimento de software, especialmente nas
                    áreas de front-end, mobile e back-end. Também possuo experiência
                    com QA e testes automatizados, o que fortalece minha visão sobre
                    qualidade, usabilidade e funcionamento das aplicações.
                  </p>
                  <p className="mt-4 leading-8 text-slate-300">
                    Meu objetivo é atuar como desenvolvedor, contribuindo com
                    projetos reais, aplicando boas práticas e evoluindo
                    continuamente com aprendizado e consistência.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-4xl border border-white/10 bg-white/5 p-8"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Tecnologias que utilizo
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {techs.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-slate-950/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projetos" className="mx-auto max-w-6xl px-6 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Projetos
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Projetos e experiências
            </h2>
            <p className="mt-3 max-w-2xl text-slate-400">
              Uma seleção de trabalhos que demonstram meu perfil técnico,
              experiência prática e evolução como desenvolvedor.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={index}
                variants={fadeUp}
                className="group rounded-4xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    {project.icon}
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  {"frontend" in project && "backend" in project && (
                    <div className="relative">
                      <button
                        onClick={() =>
                          setOpenProject(openProject === index ? null : index)
                        }
                        className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                      >
                        Ver Repositórios
                      </button>

                      {openProject === index && (
                        <div className="absolute left-0 top-full z-20 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-xl">
                          <a
                            href={project.frontend}
                            target="_blank"
                            rel="noreferrer"
                            className="block px-4 py-3 text-sm text-white hover:bg-white/10"
                          >
                            Front-end
                          </a>
                          <a
                            href={project.backend}
                            target="_blank"
                            rel="noreferrer"
                            className="block px-4 py-3 text-sm text-white hover:bg-white/10"
                          >
                            Back-end
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-3"
          >
            <div className="rounded-4xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Desenvolvimento</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Construção de interfaces web e mobile com foco em organização,
                performance e experiência do usuário.
              </p>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Back-end & Dados</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Criação de APIs, integração com banco de dados e estruturação de
                sistemas completos com persistência de dados.
              </p>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Qualidade</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Experiência com testes automatizados e validação funcional para
                melhorar confiabilidade e qualidade do produto.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="overflow-hidden rounded-4xl border border-cyan-400/20 bg-linear-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-8"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Contato
            </p>
            <h2 className="mt-3 text-3xl font-black">Vamos conversar</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              Busco oportunidades na área de desenvolvimento para aplicar meus
              conhecimentos, evoluir profissionalmente e contribuir com soluções
              reais e de qualidade.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">

              {/* EMAIL */}
              <a
                href="mailto:gabrielcarmobr19@gmail.com"
                className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900/80"
              >
                <Mail className="h-8 w-8 text-cyan-300 transition group-hover:scale-110" />
                <p className="text-sm text-slate-400">Email</p>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/gabriel-carmo-077801309/"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900/80"
              >
                <FaLinkedin className="h-8 w-8 text-cyan-300 transition group-hover:scale-110" />
                <p className="text-sm text-slate-400">LinkedIn</p>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/GabrielPdoCarmo"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900/80"
              >
                <FaGithub className="h-8 w-8 text-cyan-300 transition group-hover:scale-110" />
                <p className="text-sm text-slate-400">GitHub</p>
              </a>

            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Gabriel Pereira do Carmo. Desenvolvido para destacar projetos,
        habilidades e oportunidades na área de tecnologia.
      </footer>
    </div>
  );
}