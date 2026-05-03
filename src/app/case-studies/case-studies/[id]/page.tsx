import { Metadata } from "next";
import { CaseStudyContent } from "@/components/resources/CaseStudyContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Case Study ${id} | B2B Sales Arrow Results`,
    description: `Explore the real-world results and enterprise impact delivered by B2B Sales Arrow.`,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <CaseStudyContent id={id} />;
}
