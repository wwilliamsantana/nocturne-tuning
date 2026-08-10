import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export default function SectionLabel({
  number,
  label,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase",
        className,
      )}
    >
      <span className="text-accent">/</span>
      <span>{number}</span>
      <span className="h-px w-8 bg-line" />
      <span>{label}</span>
    </div>
  );
}
