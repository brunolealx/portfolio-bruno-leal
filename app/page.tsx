'use client';

import { useState } from "react";
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

  const handleContatoClick = () => {
    setShowTransition(true);
    setShowContact(false);
    setShowProjects(false);

    setTimeout(() => {
      setShowTransition(false);
      setShowContact(true);
    }, 2000);
  };

  const handleProjectsClick = () => {
    setShowTransition(true);
    setShowContact(false);
    setShowProjects(false);

    setTimeout(() => {
      setShowTransition(false);
      setShowProjects(true);
    }, 2000);
  };

  const handleVoltarClick = () => {
    setShowContact(false);
    setShowProjects(false);
    setShowTransition(false);
  };

  return (
    <main className="flex flex-col items-center justify-center bg-black text-white cursor-none relative overflow-hidden px-6 min-h-screen">

      {/* Conteúdo inicial */}
      {!showTransition && !showContact && !showProjects && (
        <>
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${orbitron.className} text-6xl md:text-7xl font-extrabold tracking-[0.35em] mb-6 text-center text-white drop-shadow-md`}
          >
            BRUNO LEAL
          </motion.h1>

          {/* Legenda do título */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${inter.className} text-base md:text-lg text-white/80 mb-12 text-center max-w-2xl leading-relaxed`}
          >
            Desenvolvedor Full Stack & Estudante de Engenharia de Software
          </motion.p>

          {/* Botões */}
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
        </>
      )}

      {/* Efeito de interferência */}
      {showTransition && <ContatoTransition />}

      {/* Seção de contato */}
      {showContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center space-y-6 md:space-y-8 z-50 bg-black/95 backdrop-blur-sm p-12 rounded-xl border border-blue-400 shadow-lg overflow-y-auto max-h-screen"
        >
          <h2 className={`${orbitron.className} text-4xl md:text-5xl text-blue-400 mb-6 drop-shadow-md`}>Meus Contatos</h2>

          <div className={`flex flex-col items-center space-y-4 md:space-y-5 text-center ${inter.className} text-white/80`}>
            <p className="text-lg md:text-xl hover:text-blue-400 transition-colors cursor-default"> +55 15 99277-3128</p>
            <p className="text-lg md:text-xl hover:text-blue-400 transition-colors cursor-default"> lealbruno759@gmail.com</p>
            <p className="text-lg md:text-xl hover:text-blue-400 transition-colors cursor-default"> linkedin.com/in/brunolealx</p>
            <p className="text-lg md:text-xl hover:text-blue-400 transition-colors cursor-default"> @lealcreativex</p>
          </div>

          <p className="mt-8 text-sm md:text-base text-white/50 italic">Obrigado por visitar! 👾</p>

          <button
            onClick={handleVoltarClick}
            className="px-10 py-4 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_#3b82f6] mt-6 font-semibold"
          >
            Voltar
          </button>
        </motion.div>
      )}

      {/* Seção de projetos */}
      {showProjects && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center space-y-12 z-50 bg-black/95 backdrop-blur-sm p-12 rounded-xl border border-blue-400 shadow-lg overflow-y-auto max-h-screen w-full"
        >
          <h2 className={`${orbitron.className} text-4xl md:text-5xl text-blue-400 mb-6 drop-shadow-md`}>Projetos</h2>

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