import Counter from "@/components/ui/Counter";

interface SpecProps {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
}

export function Spec({ label, value, suffix, decimals = 0 }: SpecProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-2xl text-foreground sm:text-3xl">
        <Counter value={value} suffix={suffix} decimals={decimals} />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
    </div>
  );
}
