export interface LogoCloudProps {
  logos?: Array<{
    name: string;
    alt?: string;
  }>;
}

export function LogoCloud({ logos = [] }: LogoCloudProps) {
  if (logos.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
      {logos.map((logo) => (
        <div key={logo.name} className="flex items-center justify-center">
          <span className="font-heading text-xl font-bold tracking-tight text-brand-charcoal/70 uppercase">
            {logo.alt ?? logo.name}
          </span>
        </div>
      ))}
    </div>
  );
}
