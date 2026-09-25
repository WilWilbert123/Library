import { DashboardStatCard } from "@/components/dashboard/dashboard-stat-card";
import { Book, Users, BookOpen, AlertCircle, Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Welcome back! Here's what's happening in your library today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full shadow-sm border border-slate-200 dark:border-slate-800">
          <Calendar className="h-4 w-4" />
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <DashboardStatCard
          title="Total Books"
          value="12,482"
          trend="+12 this month"
          trendUp={true}
          icon={Book}
          color="blue"
        />
        <DashboardStatCard
          title="Total Copies"
          value="18,764"
          trend="+24 this month"
          trendUp={true}
          icon={BookOpen}
          color="indigo"
        />
        <DashboardStatCard
          title="Available"
          value="15,230"
          trend="81% of total"
          icon={Book}
          color="emerald"
        />
        <DashboardStatCard
          title="Borrowed"
          value="2,842"
          trend="15% of total"
          icon={Users}
          color="amber"
        />
        <DashboardStatCard
          title="Overdue"
          value="124"
          trend="-8% this week"
          trendUp={false}
          icon={AlertCircle}
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-center items-center h-80">
          <p className="text-slate-500">Borrowing Trends Chart (Placeholder)</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-center items-center h-80">
          <p className="text-slate-500">Book Status Chart (Placeholder)</p>
        </div>
      </div>
    </div>
  );
}
