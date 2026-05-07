import { Fragment } from "react";

import { GradientText } from "@/components/ui/GradientText";
import { Heading } from "@/components/ui/Heading";

interface CmsHeadingData {
  text: string;
  highlight?: string;
  highlightVariant?: "blue" | "red";
}

interface CmsHeadingRendererProps {
  data: CmsHeadingData;
  level: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export function CmsHeadingRenderer({ data, level, className }: CmsHeadingRendererProps) {
  const { text, highlight, highlightVariant = "blue" } = data;

  if (!highlight || !text.includes(highlight)) {
    return (
      <Heading as={level} className={className}>
        {text}
      </Heading>
    );
  }

  const parts = text.split(highlight);

  return (
    <Heading as={level} className={className}>
      {parts.map((part, index) => (
        <Fragment key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 ? (
            <GradientText variant={highlightVariant}>{highlight}</GradientText>
          ) : null}
        </Fragment>
      ))}
    </Heading>
  );
}
