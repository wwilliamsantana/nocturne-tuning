"use client";

import Container from "@/components/ui/Container";

import Counter from "@/components/ui/Counter";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "./SectionLabel";

const specs = [
  { label: "Potência máxima", value: 680, suffix: " cv" },
  { label: "Torque", value: 780, suffix: " Nm" },
  { label: "0–100 km/h", value: 2.9, suffix: "s", decimals: 1 },
  { label: "Velocidade máxima", value: 340, suffix: " km/h" },
  { label: "Peso em ordem de marcha", value: 1320, suffix: " kg" },
  {
    label: "Relação peso/potência",
    value: 1.94,
    suffix: " kg/cv",
    decimals: 2,
  },
];

export default function Specs() {
  return (
    <section className="relative bg-surface py-28 sm:py-36">
      <Container>
        <Reveal>
          <SectionLabel number="01" label="Especificações" />
        </Reveal>

        <Reveal delay={0.1} className="mt-6 max-w-2xl">
          <h2 className="font-display text-4xl italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Cada número existe por um motivo.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, i) => (
            <Reveal key={spec.label} delay={i * 0.08}>
              <div className="group flex h-full flex-col justify-between gap-8 bg-surface p-8 transition-colors hover:bg-surface-2 sm:p-10">
                <span className="font-mono text-4xl text-foreground sm:text-5xl">
                  <Counter
                    value={spec.value}
                    suffix={spec.suffix}
                    decimals={spec.decimals ?? 0}
                  />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  {spec.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
