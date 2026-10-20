import Image from "next/image";
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
      <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className={cn(reversed && "md:order-2")}>
          <p className="flex flex-wrap items-center gap-2 text-sm font-semibold tracking-wide text-clay-dark uppercase">
            <span
              aria-hidden="true"
              className="inline-flex size-7 items-center justify-center rounded-full bg-coffee text-xs text-cream"
            >
              {index + 1}
            </span>
            {eyebrow}
            {comingSoon && <ComingSoonBadge className="normal-case" />}
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-coffee sm:text-3xl">{title}</h3>
          <p className="mt-3 text-lg text-muted-foreground">{description}</p>
        </div>
        <div
          className={cn(
            "overflow-hidden rounded-3xl border bg-cream-deep",
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
        </div>
      </article>
    </Reveal>
  );
}
