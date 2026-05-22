'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Orbitron, Inter } from "next/font/google";
import ContatoTransition from "./components/ContatoTransition";
import { projetos } from "./data/projects";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function Home() {
  const [showTransition, setShowTransition] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);

  // controla botão voltar do navegador
  useEffect(() => {

    const handlePopState = () => {
      window.location.reload();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };

  }, []);

  const handleContatoClick = () => {

    window.history.pushState({ page: "contato" }, "", "#contato");

    setShowTransition(true);
    setShowContact(false);
    setShowProjects(false);
    setShowCertificates(false);

    setTimeout(() => {
      setShowTransition(false);
      setShowContact(true);
    }, 2000);
  };

  const handleProjectsClick = () => {

    window.history.pushState({ page: "projetos" }, "", "#projetos");

    setShowTransition(true);
    setShowContact(false);
    setShowProjects(false);
    setShowCertificates(false);

    setTimeout(() => {
      setShowTransition(false);
      setShowProjects(true);
    }, 2000);
  };

  const handleVoltarClick = () => {
    window.history.pushState({}, "", "/");

    setShowContact(false);
    setShowProjects(false);
    setShowCertificates(false);
    setShowTransition(false);
  };

  return (
    <main className="flex flex-col items-center justify-center bg-black text-white cursor-none relative overflow-hidden px-6 min-h-screen">

      {!showTransition && !showContact && !showProjects && !showCertificates && (
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
            <span className="relative z-10 mx-auto flex h-10 w-11 items-center justify-center">
              <span className="absolute top-2 h-5 w-10 rotate-45 border-2 border-current bg-black/80 group-hover:bg-blue-400" />
              <span className="absolute top-[18px] h-2 w-7 rounded-b-full border-x-2 border-b-2 border-current bg-black/80 group-hover:bg-blue-400" />
              <span className="absolute right-2 top-[17px] h-5 w-px bg-current" />
              <span className="absolute right-[5px] top-[35px] h-2 w-2 rounded-full bg-current" />
            </span>
          </motion.button>
        </>
      )}

      {showTransition && <ContatoTransition />}

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center space-y-12 z-50 bg-black/95 backdrop-blur-sm p-12 rounded-xl border border-blue-400 shadow-lg overflow-y-auto max-h-screen w-full"
        >
          <h2 className={`${orbitron.className} text-4xl md:text-5xl text-blue-400 mb-6 drop-shadow-md`}>
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
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
            className="px-10 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_#3b82f6] mt-6 font-semibold"
          >
            Voltar
          </button>
        </motion.div>
      )}

    </main>
  );
}
