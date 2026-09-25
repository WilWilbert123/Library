import { Search, User } from "lucide-react";

export function AppHeader() {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 shrink-0">
      
      {/* Search Placeholder */}
      <div className="flex items-center text-slate-400 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-1.5 w-64 text-sm">
        <Search className="h-4 w-4 mr-2" />
        Search...
      </div>

      <div className="flex items-center gap-4">
        {/* Profile Placeholder */}
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          <User className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}
