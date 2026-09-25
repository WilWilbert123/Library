import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface DashboardStatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
  icon: LucideIcon;
  color?: "blue" | "emerald" | "amber" | "red" | "indigo";
}

export function DashboardStatCard({
  title,
  value,
  trend,
  trendUp,
  icon: Icon,
  color = "blue",
}: DashboardStatCardProps) {
  const colorVariants = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    amber: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 flex flex-col transition-all hover:shadow-md">
      <div className="flex justify-between items-start">
        <div className={cn("p-2.5 rounded-lg", colorVariants[color])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{value}</h3>
      </div>
      {trend && (
        <div className="mt-4 flex items-center text-sm">
          {trendUp !== undefined && (
            <span className={cn(
              "flex items-center mr-1.5",
              trendUp ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
            )}>
              {trendUp ? <TrendingUp className="h-3.5 w-3.5 mr-1" /> : <TrendingDown className="h-3.5 w-3.5 mr-1" />}
            </span>
          )}
          <span className="text-slate-500 dark:text-slate-400">{trend}</span>
        </div>
      )}
    </div>
  );
}
