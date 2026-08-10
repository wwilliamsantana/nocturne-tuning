import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface GalleryProps {
  src: string;
  alt: string;
  span: string;
}

export function GalleryImage({ src, alt, span }: GalleryProps) {
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
    </div>
  );
}
