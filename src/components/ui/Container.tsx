import { cn } from "@/lib/utils";

interface Container {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Container) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
