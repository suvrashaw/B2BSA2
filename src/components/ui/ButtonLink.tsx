import type { ReactNode } from "react";

import Link from "next/link";

import { Button, type ButtonProps } from "@/components/ui/Button";

type ButtonLinkProps = Omit<ButtonProps, "onClick" | "type"> & {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export function ButtonLink({ href, external, children, ...props }: ButtonLinkProps) {
  if (external) {
    return (
      <Button asChild {...props}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
