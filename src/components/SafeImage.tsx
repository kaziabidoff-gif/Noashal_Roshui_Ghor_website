import { useState } from "react";
import { Lotus } from "./Motifs";
interface Props { src: string; alt: string; className?: string; eager?: boolean; }
/** Shows a Nakshi placeholder if the image file is missing, so layouts never break. */
export default function SafeImage({ src, alt, className = "", eager = false }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return (
    <div role="img" aria-label={alt} className={`nakshi-ph grid place-items-center ${className}`}><Lotus className="size-1/4 min-w-10 opacity-40" /></div>
  );
  return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" onError={() => setFailed(true)} className={className} />;
}
