
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  MonitorSmartphone,
  PackageSearch,
  Search,
  ShieldCheck,
  Smartphone,
  Truck,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import fotoPerfil from "./assets/perfil.png";

const CAMPO_PECAS_URL = "https://www.campopecas.com.br/";
const WHATSAPP_URL = "https://wa.me/5544999917358";

const techs = [
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MySQL",
  "Cypress",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/GabrielPdoCarmo",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-carmo-077801309/",
    icon: FaLinkedin,
  },
  {
    label: "E-mail",
    href: "mailto:gabrielcarmobr19@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    icon: FaWhatsapp,
  },
];

export default function PortfolioGabriel() {
  const [openProject, setOpenProject] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Tecnologias", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">

      {/* FUNDO */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[430px] w-[430px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute -right-40 top-[20%] h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[110px]" />
      </div>

      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">

          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 font-black text-cyan-300">
              GC
            </span>

            <span className="min-w-0">
              <span className="block truncate text-sm font-bold sm:text-base">
                Gabriel Pereira do Carmo
              </span>
              <span className="block text-xs text-slate-400">
                Desenvolvimento de Software
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-white/10 p-2.5 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-white/10 bg-slate-950 px-6 py-3 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-2 py-3 text-sm text-slate-200 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="relative z-10">

        {/* PÁGINA INICIAL - ESPAÇAMENTO CORRIGIDO PARA PC */}
        <section
          id="inicio"
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-wider text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              DESENVOLVIMENTO WEB, MOBILE & QA
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Transformando ideias em{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                soluções digitais.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Sou formando em TADS e mestrando em Ciência da Computação,
              com foco em Engenharia de Software. Atuo com desenvolvimento
              front-end, mobile, APIs, bancos de dados e testes automatizados,
              sempre com atenção à experiência do usuário e à qualidade
              do software.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Ver meus projetos
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 font-semibold transition hover:bg-white/10"
              >
                Falar comigo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CAMPO PEÇAS EM DESTAQUE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative w-full"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-slate-900/95 shadow-2xl">

              <div className="border-b border-white/10 bg-cyan-400/5 px-6 py-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  Projeto em destaque
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Sistema Web
                    </span>

                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                      CAMPO{" "}
                      <span className="text-cyan-300">
                        PEÇAS
                      </span>
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                      Venda e gestão de peças
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-3 text-cyan-300">
                    <Truck className="h-7 w-7" />
                  </div>
                </div>

                {/* ILUSTRAÇÃO DO SISTEMA */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                  <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
                    <div className="flex gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-400/70" />
                      <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                      <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    </div>

                    <span className="text-[10px] text-slate-400">
                      campopecas.com.br
                    </span>

                    <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="mb-4 flex items-center gap-2 text-cyan-300">
                      <PackageSearch className="h-5 w-5" />
                      <span className="text-sm font-extrabold">
                        CAMPO PEÇAS
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs text-slate-400">
                      <Search className="h-4 w-4" />
                      Buscar peças e produtos
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[
                        { icon: Layers3, name: "Catálogo" },
                        { icon: Search, name: "Busca" },
                        { icon: MonitorSmartphone, name: "Responsivo" },
                      ].map(({ icon: Icon, name }) => (
                        <div
                          key={name}
                          className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-center"
                        >
                          <Icon className="h-5 w-5 text-cyan-300" />
                          <span className="text-xs text-slate-300">
                            {name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Plataforma web com foco em organização, desempenho e
                  facilidade para encontrar produtos. Interface moderna,
                  responsiva e desenvolvida para proporcionar uma boa
                  experiência ao usuário.
                </p>

                {/* TECNOLOGIAS SEM API REST */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-cyan-400/15 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={CAMPO_PECAS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-4 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-300"
                >
                  Acessar Campo Peças
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="flex justify-center pb-4">
          <a
            href="#sobre"
            aria-label="Ir para Sobre"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>

        {/* SOBRE */}
        <section
          id="sobre"
          className="scroll-mt-24 mx-auto max-w-6xl px-5 py-12 sm:px-6"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-8 md:grid-cols-[260px_1fr]"
          >
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Sobre
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Quem sou eu
              </h2>

              <img
                src={fotoPerfil}
                alt="Foto de Gabriel Pereira do Carmo"
                className="mx-auto mt-6 h-52 w-52 rounded-full border-4 border-slate-900 object-cover shadow-xl shadow-cyan-900/30 ring-2 ring-cyan-400/25 md:mx-0"
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
              <p className="text-base leading-8 text-slate-300">
                Tenho foco em desenvolvimento de software,
                especialmente nas áreas de front-end, mobile e
                back-end. Também possuo experiência com QA e testes
                automatizados, o que fortalece minha visão sobre
                qualidade, usabilidade e funcionamento das aplicações.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Meu objetivo é construir soluções úteis, aplicar boas
                práticas e continuar evoluindo profissionalmente.
                Projetos como o{" "}
                <a
                  href={CAMPO_PECAS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan-300 underline underline-offset-4"
                >
                  Campo Peças
                </a>{" "}
                representam esse trabalho aplicado a necessidades reais.
              </p>
            </div>
          </motion.div>
        </section>

        {/* TECNOLOGIAS */}
        <section
          id="skills"
          className="scroll-mt-24 mx-auto max-w-6xl px-5 py-12 sm:px-6"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Skills
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Tecnologias que utilizo
            </h2>

            <p className="mt-3 text-slate-400">
              Ferramentas e tecnologias presentes nos meus estudos
              e projetos.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {techs.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.24,
                    delay: index * 0.025,
                  }}
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJETOS */}
        <section
          id="projetos"
          className="scroll-mt-24 mx-auto max-w-6xl px-5 py-12 sm:px-6"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Portfólio
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Projetos e experiências
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Trabalhos que mostram minha experiência com aplicações
              web, mobile e qualidade de software.
            </p>
          </motion.div>

          {/* CAMPO PEÇAS */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="relative mt-8 overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/15 via-slate-900 to-blue-950/40 p-7 sm:p-9"
          >
            <div className="relative grid items-center gap-8 md:grid-cols-2">

              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-200">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Projeto principal
                </span>

                <h3 className="mt-5 text-3xl font-black sm:text-4xl">
                  Campo{" "}
                  <span className="text-cyan-300">
                    Peças
                  </span>
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Sistema web voltado para venda e gestão de peças,
                  com foco em organização de produtos, listagem e
                  busca, performance e experiência do usuário.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-slate-950/50 px-3 py-1.5 text-xs font-medium text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={CAMPO_PECAS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Visitar Campo Peças
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-3">
                {[
                  {
                    icon: PackageSearch,
                    title: "Catálogo de produtos",
                    text: "Listagem e organização de peças",
                  },
                  {
                    icon: Search,
                    title: "Busca de produtos",
                    text: "Facilidade para encontrar peças",
                  },
                  {
                    icon: MonitorSmartphone,
                    title: "Interface responsiva",
                    text: "Experiência para computador e celular",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                  >
                    <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* OUTROS PROJETOS */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">

            {/* PETS UP */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <Smartphone className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-2xl font-black">
                Pets Up
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Aplicativo mobile para adoção de pets,
                conectando quem deseja adotar a pessoas
                que buscam um novo lar para seus animais.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>• Cadastro de usuários e animais</li>
                <li>• Filtros por espécie, raça e localização</li>
                <li>• Integração com API e banco de dados</li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["React Native", "Node.js", "TypeScript", "MySQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-cyan-400/15 bg-cyan-400/10 px-2.5 py-1.5 text-xs text-cyan-200"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="relative mt-6">
                <button
                  type="button"
                  onClick={() => setOpenProject(!openProject)}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950"
                >
                  Ver repositórios
                  <ChevronDown className={`h-4 w-4 transition-transform ${openProject ? "rotate-180" : ""}`} />
                </button>

                {openProject && (
                  <div className="absolute bottom-full left-0 z-20 mb-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl">
                    <a
                      href="https://github.com/GabrielPdoCarmo/TCC---Front"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-3 text-sm hover:bg-white/10"
                    >
                      Front-end
                    </a>

                    <a
                      href="https://github.com/GabrielPdoCarmo/TCC---Back"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-3 text-sm hover:bg-white/10"
                    >
                      Back-end
                    </a>
                  </div>
                )}
              </div>
            </motion.article>

            {/* QA E TESTES */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-2xl font-black">
                QA e Testes
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Experiência com testes manuais e automatizados
                para validar fluxos críticos e melhorar a
                qualidade do software.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>• Automação de testes</li>
                <li>• Validação de cenários críticos</li>
                <li>• Foco na confiabilidade das aplicações</li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Cypress", "TypeScript", "QA", "Testes Funcionais"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-cyan-400/15 bg-cyan-400/10 px-2.5 py-1.5 text-xs text-cyan-200"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-400">
                <ShieldCheck className="h-4 w-4" />
                Qualidade de software
              </div>
            </motion.article>
          </div>
        </section>

        {/* ESPECIALIDADES */}
        <section className="mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:px-6 md:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Desenvolvimento",
              text: "Interfaces web e mobile com foco em usabilidade, performance e organização.",
            },
            {
              icon: Database,
              title: "Back-end & Dados",
              text: "Desenvolvimento de sistemas, integração de serviços e bancos de dados.",
            },
            {
              icon: ShieldCheck,
              title: "Qualidade",
              text: "Testes funcionais e automatizados para aplicações mais confiáveis.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-4 text-lg font-bold">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </section>

        {/* CONTATO */}
        <section
          id="contato"
          className="scroll-mt-24 mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-6"
        >
          <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Contato
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Vamos conversar?
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              Busco oportunidades em desenvolvimento de software
              para aplicar meus conhecimentos, contribuir com
              projetos reais e evoluir profissionalmente.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "E-mail",
                  caption: "Enviar mensagem",
                  href: "mailto:gabrielcarmobr19@gmail.com",
                  icon: Mail,
                },
                {
                  label: "LinkedIn",
                  caption: "Meu perfil",
                  href: "https://www.linkedin.com/in/gabriel-carmo-077801309/",
                  icon: FaLinkedin,
                },
                {
                  label: "GitHub",
                  caption: "Meus códigos",
                  href: "https://github.com/GabrielPdoCarmo",
                  icon: FaGithub,
                },
                {
                  label: "WhatsApp",
                  caption: "(44) 99991-7358",
                  href: WHATSAPP_URL,
                  icon: FaWhatsapp,
                },
              ].map(({ label, caption, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900"
                >
                  <Icon className="h-8 w-8 text-cyan-300 transition group-hover:scale-110" />

                  <span className="font-semibold">{label}</span>

                  <span className="text-xs text-slate-400">
                    {caption}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="relative z-10 border-t border-white/10 px-5 py-7 text-center text-sm text-slate-500">
        © 2026 Gabriel Pereira do Carmo. Portfólio de desenvolvimento de software.
      </footer>
    </div>
  );
}
