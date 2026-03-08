"use client"

import { useEffect, useRef } from "react"

type Particle = {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    size: number
}

export default function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const particles = useRef<Particle[]>([])
    const mouse = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext("2d")!

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resize()
        window.addEventListener("resize", resize)

        const move = (e: MouseEvent) => {
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY

            // cria partículas no movimento
            for (let i = 0; i < 3; i++) {
                particles.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: (Math.random() - 0.5) * 1.5,
                    life: 1,
                    size: Math.random() * 4 + 2
                })
            }
        }

        window.addEventListener("mousemove", move)

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.current.forEach((p, index) => {
                p.x += p.vx
                p.y += p.vy
                p.life -= 0.02
                p.size *= 0.96

                if (p.life <= 0) {
                    particles.current.splice(index, 1)
                }

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(59,130,246,${p.life})`
                ctx.shadowColor = "#3b82f6"
                ctx.shadowBlur = 10
                ctx.fill()
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("mousemove", move)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 pointer-events-none z-50"
        />
    )
}