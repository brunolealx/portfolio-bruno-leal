'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Orbitron, Inter } from "next/font/google";
import { projetos } from "./data/projects";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // controla botão voltar do navegador sem recarregar a página
  useEffect(() => {

    const handlePopState = () => {
      setShowCertificates(false);
      setShowAbout(false);

      if (window.location.hash === "#contato") {
        setShowContact(true);
        setShowProjects(false);
        return;
      }

      if (window.location.hash === "#projetos") {
        setShowProjects(true);
        setShowContact(false);
        return;
      }

      if (window.location.hash === "#sobre") {
        setShowAbout(true);
        setShowContact(false);
        setShowProjects(false);
        return;
      }

      setShowContact(false);
      setShowProjects(false);
    };

    handlePopState();
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };

  }, []);

  const handleContatoClick = () => {

    window.history.pushState({ page: "contato" }, "", "#contato");

    setShowContact(true);
    setShowProjects(false);
    setShowCertificates(false);
    setShowAbout(false);
  };

  const handleProjectsClick = () => {

    window.history.pushState({ page: "projetos" }, "", "#projetos");

    setShowProjects(true);
    setShowContact(false);
    setShowCertificates(false);
    setShowAbout(false);
  };

  const handleAboutClick = () => {

    window.history.pushState({ page: "sobre" }, "", "#sobre");

    setShowAbout(true);
    setShowContact(false);
    setShowProjects(false);
    setShowCertificates(false);
  };

  const handleVoltarClick = () => {
    window.history.pushState({}, "", "/");

    setShowContact(false);
    setShowProjects(false);
    setShowCertificates(false);
    setShowAbout(false);
  };

  return (
    <main className="flex flex-col items-center justify-center bg-black text-white cursor-none relative overflow-hidden px-6 min-h-screen">

      {!showContact && !showProjects && !showCertificates && !showAbout && (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${orbitron.className} text-6xl md:text-7xl font-extrabold tracking-[0.35em] mb-6 text-center text-white drop-shadow-md`}
          >
            BRUNO LEAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${inter.className} text-base md:text-lg text-white/80 mb-12 text-center max-w-2xl leading-relaxed`}
          >
            Desenvolvedor Full Stack & Estudante de Engenharia de Software
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12"
          >
            <button
              onClick={handleProjectsClick}
              className="px-10 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_#3b82f6] font-semibold"
            >
              Projetos
            </button>

            <button
              onClick={handleContatoClick}
              className="px-10 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_#3b82f6] font-semibold"
            >
              Contato
            </button>

          </motion.div>

          <motion.button
            onClick={() => setShowCertificates(true)}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="fixed left-5 bottom-5 md:left-8 md:bottom-8 z-40 h-20 w-20 rounded-full border border-blue-400 bg-black/80 text-blue-300 shadow-[0_0_28px_rgba(59,130,246,0.65)] backdrop-blur-sm hover:bg-blue-400 hover:text-black hover:shadow-[0_0_50px_#3b82f6] transition-all duration-300 font-semibold group"
            aria-label="Abrir certificados"
            title="Certificados"
          >
            <span className="absolute inset-[-6px] rounded-full border border-blue-400/25 group-hover:border-blue-300/70" />
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-400/30 group-hover:bg-black/30" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-400/30 group-hover:bg-black/30" />
            <svg
              className="relative z-10 mx-auto h-12 w-12"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 25L32 13L56 25L32 37L8 25Z"
                fill="currentColor"
                fillOpacity="0.22"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M20 32V41C20 46 44 46 44 41V32"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M49 28V43"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M49 43C46.5 46 46.5 50 46.5 52H51.5C51.5 50 51.5 46 49 43Z"
                fill="currentColor"
              />
              <circle cx="32" cy="25" r="2.5" fill="currentColor" />
            </svg>
          </motion.button>

          <motion.button
            onClick={handleAboutClick}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="fixed right-5 top-5 md:right-8 md:top-8 z-40 h-20 w-20 rounded-full border border-blue-400 bg-black/80 text-blue-300 shadow-[0_0_28px_rgba(59,130,246,0.65)] backdrop-blur-sm hover:bg-blue-400 hover:text-black hover:shadow-[0_0_50px_#3b82f6] transition-all duration-300 font-semibold group"
            aria-label="Abrir sobre mim"
            title="Sobre mim"
          >
            <span className="absolute inset-[-6px] rounded-full border border-blue-400/25 group-hover:border-blue-300/70" />
            <span className="relative z-10 mx-auto block h-16 w-16 overflow-hidden rounded-full border border-blue-300/70 shadow-[0_0_18px_rgba(59,130,246,0.75)] transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/bruno-profile.jpeg"
                alt="Foto de Bruno Leal"
                fill
                sizes="64px"
                className="object-cover transition-transform duration-300 group-hover:scale-125"
                priority
              />
            </span>
          </motion.button>
        </>
      )}

      {showAbout && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center z-50 bg-black/95 backdrop-blur-sm p-6"
        >
          <div className="w-full max-w-3xl border border-blue-400 rounded-xl shadow-lg shadow-blue-500/20 bg-black overflow-hidden">
            <div className="flex items-center gap-2 border-b border-blue-400/30 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-blue-400/80" />
              <span className="h-3 w-3 rounded-full bg-blue-400/45" />
              <span className="h-3 w-3 rounded-full bg-blue-400/25" />
              <span className={`${orbitron.className} ml-3 text-sm uppercase tracking-[0.3em] text-blue-300`}>
                Sobre mim
              </span>
            </div>

            <div className="p-8 md:p-10">
              <h2 className={`${orbitron.className} text-3xl md:text-4xl text-blue-400 mb-6 text-center drop-shadow-md`}>
                Bruno Leal
              </h2>

              <div className={`${inter.className} space-y-5 text-white/75 text-base md:text-lg leading-relaxed`}>
                <p>
                  Sou desenvolvedor Full Stack e estudante de Engenharia de Software. Gosto de criar interfaces com identidade, sistemas úteis e soluções que resolvem problemas reais.
                </p>
                <p>
                  Tenho trabalhado com projetos web, e-commerce, automações e aplicações em evolução, usando tecnologias como Next.js, React, Java, Python e bancos de dados.
                </p>
                <p>
                  Meu foco é unir criatividade, código limpo e experiência de uso para transformar ideias em produtos digitais que funcionem bem e tenham personalidade.
                </p>
              </div>

              <button
                onClick={handleVoltarClick}
                className="w-full mt-8 px-10 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_#3b82f6] font-semibold"
              >
                Fechar
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {showCertificates && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center z-50 bg-black/95 backdrop-blur-sm p-6"
        >
          <div className="w-full max-w-2xl border border-blue-400 rounded-xl p-8 shadow-lg shadow-blue-500/20 bg-black">
            <h2 className={`${orbitron.className} text-3xl md:text-4xl text-blue-400 mb-6 text-center drop-shadow-md`}>
              Certificados
            </h2>

            <div className={`${inter.className} border border-white/10 rounded-xl p-6 text-center`}>
              <p className="text-lg md:text-xl text-white/80 mb-3">
                Meus certificados estão sendo organizados.
              </p>
              <p className="text-sm md:text-base text-white/50">
                Em breve esta sessão terá os certificados com links, imagens ou PDFs.
              </p>
            </div>

            <button
              onClick={() => setShowCertificates(false)}
              className="w-full mt-8 px-10 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_#3b82f6] font-semibold"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      )}

      {showContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center space-y-6 md:space-y-8 z-50 bg-black/95 backdrop-blur-sm p-12 rounded-xl border border-blue-400 shadow-lg overflow-y-auto max-h-screen"
        >
          <h2 className={`${orbitron.className} text-4xl md:text-5xl text-blue-400 mb-6 drop-shadow-md`}>
            Meus Contatos
          </h2>

          <div className={`flex flex-col items-center space-y-4 md:space-y-5 text-center ${inter.className} text-white/80`}>
            <p className="text-lg md:text-xl hover:text-blue-400 transition-colors cursor-default">+55 15 99277-3128</p>
            <p className="text-lg md:text-xl hover:text-blue-400 transition-colors cursor-default">lealbruno759@gmail.com</p>
            <p className="text-lg md:text-xl hover:text-blue-400 transition-colors cursor-default">linkedin.com/in/brunolealx</p>
            <p className="text-lg md:text-xl hover:text-blue-400 transition-colors cursor-default">@lealcreativex</p>
          </div>

          <p className="mt-8 text-sm md:text-base text-white/50 italic">
            Obrigado por visitar! 👾
          </p>

          <button
            onClick={handleVoltarClick}
            className="px-10 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_#3b82f6] mt-6 font-semibold"
          >
            Voltar
          </button>
        </motion.div>
      )}

      {showProjects && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center z-50 bg-black/95 backdrop-blur-sm p-6"
        >
          <div className="w-full max-w-6xl max-h-[88vh] overflow-y-auto border border-blue-400 rounded-xl p-6 md:p-10 shadow-lg shadow-blue-500/20 bg-black">
            <h2 className={`${orbitron.className} text-4xl md:text-5xl text-blue-400 mb-8 text-center drop-shadow-md`}>
              Projetos
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {projetos.map((projeto, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-6 flex flex-col hover:shadow-[0_0_20px_rgba(29,78,216,0.3)] hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4">{projeto.nome}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {projeto.tech.split("•").map((t, i) => (
                      <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-md">
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/70 mb-6 flex-1">{projeto.descricao}</p>

                  <div className="flex gap-3 mt-auto">
                    {projeto.github && (
                      <a
                        href={projeto.github}
                        className="text-sm text-blue-400 border border-blue-400 px-4 py-2 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_40px_#3b82f6]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {projeto.demo && (
                      <a
                        href={projeto.demo}
                        className="text-sm text-blue-400 border border-blue-400 px-4 py-2 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_40px_#3b82f6]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Projeto
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleVoltarClick}
              className="w-full mt-8 px-10 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_#3b82f6] font-semibold"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      )}

    </main>
  );
}
