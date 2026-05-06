"use client";

/* eslint-disable react-hooks/immutability */

import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: string;
}

const iconCache: Record<string, React.ComponentType<LucideProps>> = {};

const Icon = ({ name, ...props }: IconProps) => {
  const iconName = (
    name in dynamicIconImports ? name : "HelpCircle"
  ) as keyof typeof dynamicIconImports;

  if (!iconCache[iconName]) {
    iconCache[iconName] = dynamic(dynamicIconImports[iconName]);
  }

  const LucideIcon = iconCache[iconName];

  return <LucideIcon {...props} />;
};

export default Icon;
