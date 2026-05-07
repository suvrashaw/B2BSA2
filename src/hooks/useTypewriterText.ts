import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export type TypewriterPhrase = {
  id: string;
  text: string;
  color: string;
};

type UseTypewriterTextOptions = {
  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  wordHoldMs?: number;
  nextWordDelayMs?: number;
};

const defaultOptions = {
  typeSpeedMs: 34,
  deleteSpeedMs: 20,
  wordHoldMs: 820,
  nextWordDelayMs: 120,
} satisfies Required<UseTypewriterTextOptions>;

export function useTypewriterText(
  phrases: TypewriterPhrase[],
  options: UseTypewriterTextOptions = {}
) {
  const {
    typeSpeedMs,
    deleteSpeedMs,
    wordHoldMs,
    nextWordDelayMs,
  } = { ...defaultOptions, ...options };
  const prefersReducedMotion = usePrefersReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) {
      return;
    }

    if (prefersReducedMotion) {
      setDisplayedText(phrases[0].text);
      setPhraseIndex(0);
      setIsDeleting(false);
      return;
    }

    const activePhrase = phrases[phraseIndex];
    const isWordComplete = displayedText === activePhrase.text;
    const isWordCleared = displayedText.length === 0;
    const delay = isWordComplete
      ? wordHoldMs
      : isWordCleared && isDeleting
        ? nextWordDelayMs
        : isDeleting
          ? deleteSpeedMs
          : typeSpeedMs;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isWordCleared) {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length);
        return;
      }

      const nextLength = displayedText.length + (isDeleting ? -1 : 1);
      setDisplayedText(activePhrase.text.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [
    deleteSpeedMs,
    displayedText,
    isDeleting,
    nextWordDelayMs,
    phraseIndex,
    phrases,
    prefersReducedMotion,
    typeSpeedMs,
    wordHoldMs,
  ]);

  return {
    activePhrase: phrases[phraseIndex] ?? null,
    displayedText,
    prefersReducedMotion,
  };
}
