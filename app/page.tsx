'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Orbitron, Inter } from "next/font/google";
import ContatoTransition from "./components/ContatoTransition";
import { projetos } from "./data/projects";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Java",
  "Python",
  "PostgreSQL",
  "UI responsiva",
];

type ViewMode = "home" | "transition" | "contact" | "projects";

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("home");

  useEffect(() => {
    const syncViewWithHash = () => {
      if (window.location.hash === "#contato") {
        setViewMode("contact");
        return;
      }

      if (window.location.hash === "#projetos") {
        setViewMode("projects");
        return;
      }

      setViewMode("home");
    };

    syncViewWithHash();
    window.addEventListener("popstate", syncViewWithHash);

    return () => {
      window.removeEventListener("popstate", syncViewWithHash);
    };
  }, []);

  const openSection = (section: "contact" | "projects", hash: "#contato" | "#projetos") => {
    window.history.pushState({ page: section }, "", hash);
    setViewMode("transition");

    window.setTimeout(() => {
      setViewMode(section);
    }, 2000);
  };

  const handleContatoClick = () => openSection("contact", "#contato");
  const handleProjectsClick = () => openSection("projects", "#projetos");

  const handleVoltarClick = () => {
    window.history.pushState({}, "", "/");
    setViewMode("home");
  };

  const showHome = viewMode === "home";
  const showTransition = viewMode === "transition";
  const showContact = viewMode === "contact";
  const showProjects = viewMode === "projects";

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-12 text-white cursor-none">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(96,165,250,0.12),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center justify-center">
        {showHome && (
          <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <section className="text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${inter.className} mb-5 inline-flex rounded-full border border-blue-400/50 bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-blue-200`}
              >
                Portfólio profissional
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${orbitron.className} mb-6 text-center text-5xl font-extrabold tracking-[0.22em] text-white drop-shadow-md md:text-7xl lg:text-left`}
              >
                BRUNO LEAL
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`${inter.className} mx-auto mb-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg lg:mx-0`}
              >
                Desenvolvedor Full Stack e estudante de Engenharia de Software, criando experiências web com foco em performance, identidade visual e resultado real para clientes.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.75, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className={`${inter.className} mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base lg:mx-0`}
              >
                Atuo em interfaces modernas, sistemas sob medida e soluções que conectam design, negócio e tecnologia. Este portfólio reúne projetos entregues, estudos aplicados e produtos em evolução.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              >
                <button
                  onClick={handleProjectsClick}
                  className="rounded-md border border-blue-400 px-10 py-4 font-semibold text-blue-400 shadow-lg transition-all duration-300 hover:bg-blue-400 hover:text-black hover:shadow-[0_0_40px_#3b82f6]"
                >
                  Ver projetos
                </button>

                <button
                  onClick={handleContatoClick}
                  className="rounded-md border border-white/20 px-10 py-4 font-semibold text-white/85 transition-all duration-300 hover:border-blue-300 hover:text-blue-200"
                >
                  Entrar em contato
                </button>
              </motion.div>
            </section>

            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-blue-400/20 bg-white/5 p-7 shadow-[0_0_80px_rgba(59,130,246,0.12)] backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className={`${orbitron.className} text-2xl text-blue-300`}>
                  Perfil
                </h2>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-300">
                  Disponível
                </span>
              </div>

              <div className={`${inter.className} space-y-5 text-sm text-white/75 md:text-base`}>
                <p>
                  Experiência com sites institucionais, e-commerce, automações e aplicações interativas, sempre buscando clareza na interface e valor na entrega.
                </p>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/45">
                    Principais tecnologias
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-sm text-white/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
                  <div>
                    <p className="text-2xl font-semibold text-white">{projetos.length}+</p>
                    <p className="text-white/50">Projetos listados</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">Full Stack</p>
                    <p className="text-white/50">Atuação web e sistemas</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">UI + Código</p>
                    <p className="text-white/50">Visão estética e técnica</p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}

        {showTransition && <ContatoTransition />}

        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-50 flex max-h-screen flex-col items-center justify-center overflow-y-auto rounded-xl border border-blue-400 bg-black/95 p-8 shadow-lg backdrop-blur-sm md:p-12"
          >
            <h2 className={`${orbitron.className} mb-4 text-4xl text-blue-400 drop-shadow-md md:text-5xl`}>
              Vamos conversar
            </h2>

            <p className={`${inter.className} mb-8 max-w-2xl text-center text-white/65`}>
              Estou aberto a freelas, colaborações e oportunidades para construir produtos digitais com identidade forte e boa experiência de uso.
            </p>

            <div className={`grid w-full max-w-3xl gap-4 md:grid-cols-2 ${inter.className}`}>
              <a
                href="tel:+5515992773128"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-lg text-white/80 transition-all hover:border-blue-400/40 hover:text-blue-300"
              >
                +55 15 99277-3128
              </a>
              <a
                href="mailto:lealbruno759@gmail.com"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-lg text-white/80 transition-all hover:border-blue-400/40 hover:text-blue-300"
              >
                lealbruno759@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/brunolealx"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-lg text-white/80 transition-all hover:border-blue-400/40 hover:text-blue-300"
              >
                linkedin.com/in/brunolealx
              </a>
              <a
                href="https://instagram.com/lealcreativex"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-lg text-white/80 transition-all hover:border-blue-400/40 hover:text-blue-300"
              >
                @lealcreativex
              </a>
            </div>

            <p className="mt-8 text-sm italic text-white/45 md:text-base">
              Obrigado por visitar.
            </p>

            <button
              onClick={handleVoltarClick}
              className="mt-8 rounded-md border border-blue-400 px-10 py-4 font-semibold text-blue-400 shadow-lg transition-all duration-300 hover:bg-blue-400 hover:text-black hover:shadow-[0_0_40px_#3b82f6]"
            >
              Voltar
            </button>
          </motion.div>
        )}

        {showProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-50 flex max-h-screen w-full flex-col items-center space-y-8 overflow-y-auto rounded-xl border border-blue-400 bg-black/95 p-8 shadow-lg backdrop-blur-sm md:p-12"
          >
            <div className="text-center">
              <h2 className={`${orbitron.className} mb-4 text-4xl text-blue-400 drop-shadow-md md:text-5xl`}>
                Projetos
              </h2>
              <p className={`${inter.className} mx-auto max-w-3xl text-white/65`}>
                Seleção de trabalhos publicados e sistemas em desenvolvimento, com foco em experiência, solução prática e evolução técnica.
              </p>
            </div>

            <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projetos.map((projeto, index) => {
                const hasGithub = Boolean(projeto.github && projeto.github !== "#");
                const hasDemo = Boolean(projeto.demo && projeto.demo !== "#");

                return (
                  <div
                    key={index}
                    className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(29,78,216,0.3)]"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold">{projeto.nome}</h3>
                      {!hasGithub && !hasDemo && (
                        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-amber-300">
                          Em andamento
                        </span>
                      )}
                    </div>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {projeto.tech.split("•").map((t, i) => (
                        <span key={i} className="rounded-md bg-white/10 px-2 py-1 text-xs">
                          {t.trim()}
                        </span>
                      ))}
                    </div>

                    <p className="mb-6 flex-1 text-white/70">{projeto.descricao}</p>

                    <div className="mt-auto flex flex-wrap gap-3">
                      {hasGithub && (
                        <a
                          href={projeto.github}
                          className="rounded-md border border-blue-400 px-4 py-2 text-sm text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-black hover:shadow-[0_0_40px_#3b82f6]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}

                      {hasDemo && (
                        <a
                          href={projeto.demo}
                          className="rounded-md border border-blue-400 px-4 py-2 text-sm text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-black hover:shadow-[0_0_40px_#3b82f6]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver projeto
                        </a>
                      )}

                      {!hasGithub && !hasDemo && (
                        <span className="rounded-md border border-white/15 px-4 py-2 text-sm text-white/45">
                          Link em breve
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleVoltarClick}
              className="mt-2 rounded-md border border-blue-400 px-10 py-4 font-semibold text-blue-400 shadow-lg transition-all duration-300 hover:bg-blue-400 hover:text-black hover:shadow-[0_0_40px_#3b82f6]"
            >
              Voltar
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
