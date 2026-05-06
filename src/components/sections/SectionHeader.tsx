import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowClassName?: string;
  heading: ReactNode;
  headingLevel?: "h1" | "h2" | "h3";
  headingClassName?: string;
  description?: string;
  descriptionClassName?: string;
  action?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  eyebrowClassName,
  heading,
  headingLevel = "h2",
  headingClassName,
  description,
  descriptionClassName,
  action,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      {eyebrow ? (
        <Eyebrow className={eyebrowClassName}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
          <Heading as={headingLevel} className={headingClassName}>
            {heading}
          </Heading>
          {description ? (
            <Text className={cn("mt-4", descriptionClassName)} variant="section">
              {description}
            </Text>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}
