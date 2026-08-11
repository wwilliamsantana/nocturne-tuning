"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-background py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Nocturne / Fale com nossa oficina
          </span>

          <h2 className="mt-6 font-display text-4xl italic leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Seu carro pode render mais.
          </h2>

          <p className="mx-auto mt-6 max-w-md text-base text-muted sm:text-lg">
            Cada preparação é avaliada individualmente. Fale com a gente e
            descubra o que é possível fazer com o seu.
          </p>

          <motion.a
            href="#contato"
            whileHover="hover"
            className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full border border-line px-8 py-4 font-mono text-sm uppercase tracking-[0.15em] text-foreground"
          >
            <motion.span
              variants={{ hover: { x: "0%" } }}
              initial={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-accent"
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Solicitar orçamento
            </span>
            <motion.span
              variants={{ hover: { x: 4 } }}
              className="relative z-10 transition-colors duration-300 group-hover:text-white"
            >
              →
            </motion.span>
          </motion.a>
        </Reveal>
      </Container>
    </section>
  );
}
