import Icon from "@/components/ui/Icon";
import { cn } from "@/lib";

export interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
  bg?: string;
  className?: string;
}

export function StatCard({
  value,
  label,
  icon,
  bg = "bg-brand-blue/10",
  className,
}: StatCardProps) {
  return (
    <div className={cn("flex flex-col items-start gap-2 rounded-2xl p-6", bg, className)}>
      {icon && (
        <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/50">
          <Icon name={icon} className="h-5 w-5 text-brand-blue" />
        </div>
      )}
      <span className="font-heading text-3xl font-bold text-brand-blue">{value}</span>
      <span className="text-sm font-medium text-gray-600">{label}</span>
    </div>
  );
}
