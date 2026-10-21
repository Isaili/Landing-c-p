import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { asset } from "../lib/asset";
import { ComingSoonBadge } from "./coming-soon-badge";
import { Reveal } from "./reveal";

interface FeatureBlockProps {
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  comingSoon?: boolean;
}

export function FeatureBlock({
  index,
  eyebrow,
  title,
  description,
  image,
  alt,
  comingSoon,
}: FeatureBlockProps) {
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className={cn(reversed && "md:order-2")}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="h-6 bg-leaf px-2.5 font-semibold text-white">
              {String(index + 1).padStart(2, "0")}
            </Badge>
            <span className="text-sm font-semibold tracking-wide text-leaf uppercase">
              {eyebrow}
            </span>
            {comingSoon && <ComingSoonBadge />}
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-coffee sm:text-3xl">{title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <Card
          className={cn(
            "gap-0 py-0 shadow-lg shadow-black/5",
            reversed && "md:order-1",
          )}
        >
          <Image
            src={asset(image)}
            alt={alt}
            width={560}
            height={420}
            loading="lazy"
            className="h-auto w-full"
          />
        </Card>
      </article>
    </Reveal>
  );
}
