
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
  Download,
  ExternalLink,
  Eye,
  FileText,
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

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import logoGP from "./assets/logo-gp.png";
import fotoPerfil from "./assets/perfil.png";
import "./App.css";

// LINKS
const CAMPO_PECAS_URL = "https://www.campopecas.com.br/";
const WHATSAPP_URL = "https://wa.me/5544999917358";
const CURRICULO_URL = "/curriculo-gabriel.pdf";

// TECNOLOGIAS

const techs = [
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MySQL",
  "Supabase",
  "Cypress",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "API REST",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// REDES SOCIAIS
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
    { label: "Currículo", href: "#curriculo" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="base-01">

      {/* FUNDO */}
      <div className="background-01">
        <div className="background-02" />
        <div className="background-03" />
      </div>

      {/* CABEÇALHO */}
      <header className="header-01">
        <div className="header-02">

          <a href="#inicio" className="header-03">
            <img
              src={logoGP}
              alt="Emblema GP - Gabriel Pereira"
              className="header-04"
            />

            <span className="header-05">
              <span className="header-06">
                Gabriel Pereira do Carmo
              </span>
              <span className="header-07">
                Desenvolvimento de Software
              </span>
            </span>
          </a>

          <nav className="header-08">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="header-09"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="header-10"
          >
            {mobileMenuOpen ? (
              <X className="header-11" />
            ) : (
              <Menu className="header-11" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="header-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="header-13"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="header-14">

        {/* APRESENTAÇÃO INICIAL */}
        <section id="inicio" className="hero-01">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="hero-02"
          >
            <div className="hero-03">
              <span className="hero-04" />
              DESENVOLVIMENTO WEB, MOBILE & QA
            </div>

            <h1 className="hero-05">
              Transformando ideias em{" "}
              <span className="hero-06">
                soluções digitais.
              </span>
            </h1>

            <p className="hero-07">
              Sou formado em Tecnologia em Análise e Desenvolvimento
              de Sistemas pelo Centro Universitário Integrado e
              mestrando em Engenharia de Software na UTFPR.
              Possuo experiência em QA, desenvolvimento front-end,
              mobile, APIs, bancos de dados e testes automatizados,
              sempre com foco em qualidade e experiência do usuário.
            </p>

            <div className="hero-08">
              <a href="#projetos" className="hero-09">
                Ver meus projetos
                <ArrowRight className="hero-10" />
              </a>

              <a href="#contato" className="hero-11">
                Falar comigo
                <ArrowUpRight className="hero-10" />
              </a>

              <a
                href={CURRICULO_URL}
                download="Curriculo_Gabriel_Pereira_do_Carmo.pdf"
                className="hero-12"
              >
                <Download className="hero-10" />
                Baixar currículo
              </a>
            </div>

            <div className="hero-13">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="hero-14"
                >
                  <Icon className="header-11" />
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
            className="featured-01"
          >
            <div className="featured-02" />

            <div className="featured-03">
              <div className="featured-04">
                <div className="featured-05">
                  <span className="featured-06" />
                  Projeto em destaque
                </div>
              </div>

              <div className="featured-07">
                <div>
                  <div className="featured-08">
                    <div>
                      <span className="featured-09">
                        Sistema Web
                      </span>

                      <h2 className="featured-10">
                        CAMPO{" "}
                        <span className="featured-11">
                          PEÇAS
                        </span>
                      </h2>

                      <p className="featured-12">
                        Venda e gestão de peças
                      </p>
                    </div>

                    <div className="featured-13">
                      <Truck className="featured-14" />
                    </div>
                  </div>

                  <p className="featured-15">
                    Sistema web desenvolvido para uma loja de
                    autopeças, com catálogo de produtos, páginas
                    de detalhes e funcionalidades de gerenciamento.
                    O projeto prioriza organização, usabilidade
                    e uma interface responsiva.
                  </p>

                  <div className="featured-16">
                    {[
                      "React",
                      "TypeScript",
                      "Node.js",
                      "Supabase",
                      "Vercel",
                      "Render",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="featured-17"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={CAMPO_PECAS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="featured-18"
                  >
                    Acessar Campo Peças
                    <ArrowUpRight className="header-11" />
                  </a>
                </div>

                {/* ILUSTRAÇÃO DO SISTEMA */}
                <div className="featured-19">
                  <div className="featured-20">
                    <div className="featured-21">
                      <span className="featured-22" />
                      <span className="featured-23" />
                      <span className="featured-24" />
                    </div>

                    <span className="featured-25">
                      campopecas.com.br
                    </span>

                    <ExternalLink className="featured-26" />
                  </div>

                  <div className="featured-27">
                    <div className="featured-28">
                      <PackageSearch className="header-11" />
                      <span className="featured-29">
                        CAMPO PEÇAS
                      </span>
                    </div>

                    <div className="featured-30">
                      <Search className="featured-31" />
                      Buscar por peças (Scania, Volvo e Carreta)
                    </div>

                    <div className="featured-32">
                      {[
                        { icon: Layers3, name: "Catálogo" },
                        { icon: Search, name: "Busca" },
                        { icon: MonitorSmartphone, name: "Responsivo" },
                      ].map(({ icon: Icon, name }) => (
                        <div key={name} className="featured-33">
                          <Icon className="featured-34" />
                          <span className="featured-35">
                            {name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="featured-36">
          <a
            href="#sobre"
            aria-label="Ir para Sobre"
            className="featured-37"
          >
            <ArrowDown className="featured-38" />
          </a>
        </div>

        {/* SOBRE */}
        <section id="sobre" className="about-01">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="about-02"
          >
            <div className="about-03">
              <p className="about-04">
                Sobre
              </p>

              <h2 className="about-05">
                Quem sou eu
              </h2>

              <img
                src={fotoPerfil}
                alt="Foto de Gabriel Pereira do Carmo"
                className="about-06"
              />
            </div>

            <div className="about-07">
              <p className="about-08">
                Sou formado em Tecnologia em Análise e
                Desenvolvimento de Sistemas pelo Centro
                Universitário Integrado e atualmente curso
                mestrado em Engenharia de Software na UTFPR.
              </p>

              <p className="about-09">
                Possuo experiência prática em QA, testes
                funcionais e automatizados com Cypress.
                Também desenvolvo aplicações web e mobile,
                buscando unir desenvolvimento de software,
                boas práticas e qualidade.
              </p>

              <p className="about-09">
                Entre meus projetos estão o{" "}
                <a
                  href={CAMPO_PECAS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="about-10"
                >
                  Campo Peças
                </a>{" "}
                e o aplicativo de adoção de animais Pets Up.
              </p>
            </div>
          </motion.div>
        </section>

        {/* TECNOLOGIAS */}
        <section id="skills" className="about-01">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="about-07"
          >
            <p className="about-04">Skills</p>

            <h2 className="about-05">
              Tecnologias que utilizo
            </h2>

            <p className="skills-01">
              Ferramentas e tecnologias presentes nos meus
              estudos e projetos.
            </p>

            <div className="skills-02">
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
                  className="skills-03"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="about-01">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="about-04">
              Portfólio
            </p>

            <h2 className="projects-01">
              Projetos e experiências
            </h2>

            <p className="projects-02">
              Trabalhos que mostram minha experiência com
              aplicações web, mobile e qualidade de software.
            </p>
          </motion.div>

          {/* CAMPO PEÇAS */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="projects-03"
          >
            <div className="projects-04">
              <div>
                <span className="projects-05">
                  <CheckCircle2 className="projects-06" />
                  Projeto principal
                </span>

                <h3 className="projects-07">
                  Campo{" "}
                  <span className="featured-11">
                    Peças
                  </span>
                </h3>

                <p className="projects-08">
                  Sistema web desenvolvido para uma loja de
                  autopeças, com catálogo de produtos, páginas
                  de detalhes e funcionalidades para gerenciamento
                  de produtos.
                </p>

                <div className="featured-16">
                  {[
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Supabase",
                    "Vercel",
                    "Render",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="projects-09"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={CAMPO_PECAS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-10"
                >
                  Visitar Campo Peças
                  <ArrowUpRight className="hero-10" />
                </a>
              </div>

              <div className="projects-11">
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
                  <div key={title} className="projects-12">
                    <div className="projects-13">
                      <Icon className="header-11" />
                    </div>

                    <div>
                      <p className="projects-14">
                        {title}
                      </p>
                      <p className="projects-15">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* OUTROS PROJETOS */}
          <div className="projects-16">

            {/* PETS UP */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="projects-17"
            >
              <div className="projects-18">
                <Smartphone className="projects-19" />
              </div>
            
<h3 className="projects-20">
  Pets Up (TCC)
</h3>

              <p className="projects-21">
                Aplicativo mobile para adoção de pets,
                conectando pessoas interessadas em adotar
                a quem procura um novo lar para seus animais.
              </p>

              <ul className="projects-22">
                <li>• Cadastro de usuários e animais</li>
                <li>• Filtros de busca e localização</li>
                <li>• Integração com API e banco de dados</li>
              </ul>

              
<div className="featured-16">
  {[
    "React Native",
    "TypeScript",
    "Node.js",
    "MySQL",
    "API REST",
  ].map((tech) => (
    <span
      key={tech}
      className="projects-23"
    >
      {tech}
    </span>
  ))}
</div>

              <div className="projects-24">
                <button
                  type="button"
                  aria-expanded={openProject}
                  onClick={() => setOpenProject(!openProject)}
                  className="projects-25"
                >
                  Ver repositórios
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openProject ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openProject && (
                  <div className="projects-26">
                    <a
                      href="https://github.com/GabrielPdoCarmo/TCC---Front"
                      target="_blank"
                      rel="noreferrer"
                      className="projects-27"
                    >
                      Front-end
                    </a>

                    <a
                      href="https://github.com/GabrielPdoCarmo/TCC---Back"
                      target="_blank"
                      rel="noreferrer"
                      className="projects-27"
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
              className="projects-17"
            >
              <div className="projects-18">
                <ShieldCheck className="projects-19" />
              </div>

              <h3 className="projects-20">
                QA e Testes
              </h3>

              <p className="projects-21">
                Experiência profissional em Qualidade de
                Software, com testes manuais e automatizados
                para validação de fluxos críticos.
              </p>

              <ul className="projects-22">
                <li>• Automação de testes com Cypress</li>
                <li>• Identificação e acompanhamento de falhas</li>
                <li>• Validação de sistemas antes da publicação</li>
              </ul>

              <div className="featured-16">
                {[
                  "Cypress",
                  "TypeScript",
                  "QA",
                  "Testes Funcionais",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="projects-23"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="projects-28">
                <ShieldCheck className="hero-10" />
                Experiência em qualidade de software
              </div>
            </motion.article>
          </div>
        </section>

        {/* ESPECIALIDADES */}
        <section className="specialties-01">
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
            <div key={title} className="specialties-02">
              <div className="specialties-03">
                <Icon className="projects-19" />
              </div>

              <h3 className="specialties-04">
                {title}
              </h3>

              <p className="specialties-05">
                {text}
              </p>
            </div>
          ))}
        </section>

        {/* CURRÍCULO */}
        <section id="curriculo" className="resume-01">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="resume-02"
          >
            <div className="header-14">
              <div className="resume-03">
                <FileText className="resume-04" />
              </div>

              <p className="resume-05">
                Minha trajetória profissional
              </p>

              <h2 className="projects-01">
                Meu Currículo
              </h2>

              <p className="resume-06">
                Conheça minha formação acadêmica,
                experiências profissionais, conhecimentos
                técnicos e projetos desenvolvidos na área
                de tecnologia.
              </p>

              <div className="resume-07">
                {[
                  "TADS - Integrado",
                  "Mestrado - UTFPR",
                  "Experiência em QA",
                  "Desenvolvimento de Software",
                ].map((item) => (
                  <span
                    key={item}
                    className="resume-08"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="resume-09">
                <a
                  href={CURRICULO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-10"
                >
                  <Eye className="header-11" />
                  Visualizar currículo
                </a>

                <a
                  href={CURRICULO_URL}
                  download="Curriculo_Gabriel_Pereira_do_Carmo.pdf"
                  className="resume-11"
                >
                  <Download className="header-11" />
                  Baixar currículo PDF
                </a>
              </div>

              <p className="resume-12">
                Documento em formato PDF
              </p>
            </div>
          </motion.div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="contact-01">
          <div className="contact-02">
            <p className="about-04">
              Contato
            </p>

            <h2 className="projects-01">
              Vamos conversar?
            </h2>

            <p className="contact-03">
              Busco oportunidades em desenvolvimento de software
              e qualidade para aplicar meus conhecimentos,
              contribuir com projetos reais e evoluir
              profissionalmente.
            </p>

            <div className="contact-04">
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
                  caption: "Enviar mensagem",
                  href: WHATSAPP_URL,
                  icon: FaWhatsapp,
                },
              ].map(({ label, caption, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="contact-05 group"
                >
                  <Icon className="contact-06" />

                  <span className="contact-07">
                    {label}
                  </span>

                  <span className="contact-08">
                    {caption}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="footer-01">
        © 2026 Gabriel Pereira do Carmo.
        Portfólio de desenvolvimento de software.
      </footer>
    </div>
  );
}
