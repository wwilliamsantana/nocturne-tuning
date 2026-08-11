import Container from "@/components/ui/Container";

const links = {
  Marca: ["Sobre", "Nossa oficina", "Processo", "Garantia"],
  Serviços: [
    "Preparação de motor",
    "Suspensão e chassis",
    "Escapamento",
    "Remap/ECU",
  ],
  Contato: ["Orçamento", "Agendar visita", "Imprensa"],
};

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-line bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-display text-2xl italic text-foreground">
              Nocturne
            </span>
            <p className="mt-4 max-w-55 text-sm text-muted">
              Preparação automotiva de alta performance, sob medida.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {title}
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <span className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Nocturne Motors — Performance Concept
          </span>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-muted">
            <a href="#" className="hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground">
              YouTube
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
