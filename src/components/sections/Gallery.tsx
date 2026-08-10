"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "./SectionLabel";
import Reveal from "@/components/animations/Reveal";

interface GalleryProps {
  src: string;
  alt: string;
  span: string;
}

const images = [
  {
    src: "/images/detail-headlight.jpg",
    alt: "Detalhe do farol LED",
    span: "lg:col-span-7",
  },
  {
    src: "/images/cockpit.jpg",
    alt: "Painel e cockpit",
    span: "lg:col-span-5",
  },
  {
    src: "/images/carbon-texture.jpg",
    alt: "Textura de fibra de carbono",
    span: "lg:col-span-4",
  },
  {
    src: "/images/hero-poster.jpg",
    alt: "Vista geral do carro",
    span: "lg:col-span-8",
  },
];

function GalleryImage({ src, alt, span }: GalleryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.08]);

  return (
    <div
      ref={ref}
      className={`relative aspect-4/5 overflow-hidden rounded-2xl bg-surface2 ${span}`}
    >
      <motion.div
        style={{ scale: shouldReduceMotion ? 1 : scale }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
      {/* <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent" /> */}
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="relative bg-background py-28 sm:py-36">
      <Container>
        <Reveal>
          <SectionLabel number="02" label="Galeria" />
        </Reveal>

        <Reveal delay={0.1} className="mt-6 max-w-2xl">
          <h2 className="font-display text-4xl italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Detalhes que só se revelam de perto.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {images.map((img) => (
            <GalleryImage key={img.src} {...img} />
          ))}
        </div>
      </Container>
    </section>
  );
}
