'use client';
import React, { useEffect, useState } from "react";

export default function ContatoPage() {
    const [showStatic, setShowStatic] = useState(true);
    const [blink, setBlink] = useState(true);

    // Texto piscando
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink(prev => !prev);
        }, 500); // texto pisca a cada 0.5s
        return () => clearInterval(blinkInterval);
    }, []);

    // Interferência dura 3 segundos agora
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowStatic(false);
        }, 3000); // duração da interferência aumentada para 3s
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center">

            {/* Efeito de interferência */}
            {showStatic && (
                <div className="absolute inset-0 z-50 pointer-events-none animate-advanced-static"></div>
            )}

            {/* Texto central piscando */}
            <h2 className={`text-4xl font-orbitron text-blue-400 z-50 ${blink ? 'opacity-100' : 'opacity-30'} transition-opacity duration-300`}>
                sinal recebido ... decodificando conteúdo
            </h2>

            <style jsx>{`
        @keyframes advancedStatic {
          0% { background-position: 0 0; opacity: 0.8; }
          20% { background-position: 50% 20%; opacity: 1; }
          40% { background-position: 20% 50%; opacity: 0.7; }
          60% { background-position: 80% 10%; opacity: 0.9; }
          80% { background-position: 30% 60%; opacity: 0.8; }
          100% { background-position: 0 0; opacity: 0.9; }
        }

        .animate-advanced-static {
          width: 100%;
          height: 100%;
          background-color: black;
          background-image:
            repeating-linear-gradient(rgba(255,255,255,0.08) 0 2px, transparent 2px 4px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 70%);
          background-blend-mode: overlay;
          animation: advancedStatic 0.08s steps(2) infinite;
        }
      `}</style>
        </div>
    );
}