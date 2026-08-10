"use client";

import Container from "@/components/ui/Container";
import SectionLabel from "./SectionLabel";
import Reveal from "@/components/animations/Reveal";
import { GalleryImage } from "./GalleryImage";

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
