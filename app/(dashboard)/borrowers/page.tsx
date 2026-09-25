"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Plus, UserCircle, MoreHorizontal } from "lucide-react";

export default function BorrowersPage() {
  const [search, setSearch] = useState("");

  const borrowers = [
    { id: "1", name: "Juan Dela Cruz", type: "Student", std_id: "2023-00124", email: "juan.delacruz@university.edu", activeLoans: 2, status: "ACTIVE" },
    { id: "2", name: "Maria Santos", type: "Teacher", std_id: "EMP-0042", email: "msantos@university.edu", activeLoans: 5, status: "ACTIVE" },
    { id: "3", name: "Carlos Reyes", type: "Student", std_id: "2022-09412", email: "creyes@university.edu", activeLoans: 1, status: "EXPIRED" },
    { id: "4", name: "Ana Lopez", type: "Faculty", std_id: "EMP-0019", email: "alopez@university.edu", activeLoans: 0, status: "ACTIVE" },
    { id: "5", name: "Paolo Garcia", type: "Student", std_id: "2024-00111", email: "pgarcia@university.edu", activeLoans: 3, status: "SUSPENDED" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Borrowers</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage library members, students, and staff.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> Register Borrower</Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input placeholder="Search name, ID, email..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
      </div>

      <div className="border border-slate-200 dark:border-slate-800 rounded-md bg-white dark:bg-slate-900 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-3 font-medium">Borrower</th>
              <th className="px-6 py-3 font-medium">Type & ID</th>
              <th className="px-6 py-3 font-medium">Active Loans</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {borrowers.map((b) => (
              <tr key={b.id} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <UserCircle className="h-8 w-8 text-slate-400" />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">{b.name}</div>
                    <div className="text-slate-500 text-xs">{b.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-slate-900 dark:text-white">{b.type}</div>
                  <div className="text-slate-500 text-xs mt-1">{b.std_id}</div>
                </td>
                <td className="px-6 py-4 font-medium">{b.activeLoans}</td>
                <td className="px-6 py-4">
                  <Badge variant={b.status === 'ACTIVE' ? 'default' : b.status === 'SUSPENDED' ? 'destructive' : 'secondary'}>
                    {b.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
