"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import { Spec } from "./Spec";

const headline = "NOCTURNE";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const letter: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.85]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCanPlayVideo(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-svh w-full flex-col justify-between overflow-hidden bg-background"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY }}>
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          {canPlayVideo && (
            <>
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </>
          )}
        </video>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10 bg-background bg-radial-fade"
        style={{ opacity: overlayOpacity }}
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 flex h-full flex-col justify-between"
      >
        <Container className="pt-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span>Nocturne / Performance Concept</span>
            <span className="hidden sm:inline">Est. 2026</span>
          </motion.div>
        </Container>

        <Container>
          <div className="overflow-hidden">
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap font-display text-[16vw] font-medium italic leading-[0.85] tracking-tight text-foreground sm:text-[12vw] lg:text-[9vw]"
            >
              {headline.split("").map((char, i) => (
                <span key={i} className="overflow-hidden">
                  <motion.span variants={letter} className="inline-block">
                    {char}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
            className="mt-6 max-w-md font-body text-base text-muted sm:text-lg"
          >
            Engenharia noturna. Design que respira velocidade — um conceito de
            performance construído para viver entre o silêncio e a adrenalina.
          </motion.p>
        </Container>

        <Container className="pb-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
            className="flex flex-wrap items-end justify-between gap-8 border-t border-line pt-6"
          >
            <div className="flex gap-10">
              <Spec label="0–100 km/h" value={2.9} suffix="s" decimals={1} />
              <Spec label="Potência" value={680} suffix="cv" />
              <Spec label="Peso" value={1320} suffix="kg" />
            </div>

            <div className="flex flex-col items-end gap-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span>Role para explorar</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-accent"
              >
                ↓
              </motion.span>
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
