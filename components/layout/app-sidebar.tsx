"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BookOpen, LayoutDashboard, Copy, Users, FolderTree, 
  MapPin, Settings, ShieldCheck, ArrowLeftRight, BookMarked,
  Tags, Library, Search, FileBarChart2
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/catalog/books", icon: BookOpen, label: "Books Catalog" },
  { href: "/catalog/copies", icon: Copy, label: "Physical Copies" },
  { href: "/circulation", icon: ArrowLeftRight, label: "Circulation" },
  { href: "/borrowers", icon: Users, label: "Borrowers" },
  { href: "/inventory", icon: Search, label: "Inventory" },
  { href: "/locations", icon: MapPin, label: "Locations" },
  { href: "/users", icon: ShieldCheck, label: "System Users" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen flex flex-col shrink-0">
      
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 shrink-0 border-b border-slate-200 dark:border-slate-800">
        <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-2" />
        <span className="font-bold text-lg text-slate-900 dark:text-white">LuminaLibrary</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                <item.icon className={cn("h-4 w-4 mr-3", isActive ? "text-blue-600 dark:text-blue-500" : "")} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
