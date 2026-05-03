import { Metadata } from "next";
import { BlogPostContent } from "@/components/resources/BlogPostContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Blog Post ${id} | B2B Sales Arrow`,
    description: `Read our latest expert analysis and growth insights for enterprise B2B teams.`,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <BlogPostContent id={id} />;
}
