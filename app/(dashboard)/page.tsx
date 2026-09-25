"use client";

import { DashboardStatCard } from "@/components/dashboard/dashboard-stat-card";
import { BookOpen, Copy, ArrowLeftRight, Users } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Welcome to the library management system.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardStatCard 
          title="Total Books"
          value="1,245"
          trend="+12 this month"
          trendUp={true}
          icon={BookOpen}
          color="blue"
        />
        <DashboardStatCard 
          title="Physical Copies"
          value="4,821"
          trend="+54 this month"
          trendUp={true}
          icon={Copy}
          color="indigo"
        />
        <DashboardStatCard 
          title="Active Loans"
          value="342"
          trend="8% of inventory"
          trendUp={false}
          icon={ArrowLeftRight}
          color="amber"
        />
        <DashboardStatCard 
          title="Registered Borrowers"
          value="8,924"
          trend="+120 this month"
          trendUp={true}
          icon={Users}
          color="emerald"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 min-h-[300px] flex items-center justify-center text-slate-500">
          Recent Activity Feed Placeholder
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 min-h-[300px] flex items-center justify-center text-slate-500">
          Quick Actions Placeholder
        </div>
      </div>
    </div>
  );
}
