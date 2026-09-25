"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftRight, Search, CheckCircle, AlertCircle, Clock } from "lucide-react";

export default function CirculationPage() {
  const recentTransactions = [
    { id: 1, type: "BORROW", book: "Clean Code", borrower: "Juan Dela Cruz", date: "Just now", status: "SUCCESS" },
    { id: 2, type: "RETURN", book: "Atomic Habits", borrower: "Maria Santos", date: "15 mins ago", status: "SUCCESS" },
    { id: 3, type: "RENEW", book: "1984", borrower: "Carlos Reyes", date: "2 hours ago", status: "SUCCESS" },
    { id: 4, type: "BORROW", book: "Design Patterns", borrower: "Ana Lopez", date: "3 hours ago", status: "FAILED - OVER LIMIT" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Circulation Desk</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Quick actions for borrowing, returning, and renewals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-lg">
              <ArrowLeftRight className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">Issue Loan (Borrow)</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Scan Borrower ID</label>
              <Input placeholder="Enter or scan borrower barcode..." className="text-lg py-6" autoFocus />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Scan Book Copy</label>
              <Input placeholder="Enter or scan book accession number..." className="text-lg py-6" />
            </div>
            <Button className="w-full py-6 text-lg">Process Loan</Button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-2 rounded-lg">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">Return Book</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Scan Book Copy</label>
              <Input placeholder="Enter or scan returning book..." className="text-lg py-6" />
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800 min-h-[110px] flex items-center justify-center text-slate-500">
              Waiting for scan...
            </div>
            <Button variant="secondary" className="w-full py-6 text-lg border border-slate-300">Process Return</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {recentTransactions.map(tx => (
                <tr key={tx.id} className="border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <td className="px-6 py-4 w-32">
                    <Badge variant={tx.type === 'BORROW' ? 'default' : tx.type === 'RETURN' ? 'outline' : 'secondary'}>
                      {tx.type}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 font-medium">{tx.book}</td>
                  <td className="px-6 py-4 text-slate-500">{tx.borrower}</td>
                  <td className="px-6 py-4 text-slate-400 flex items-center gap-1"><Clock className="h-3 w-3" /> {tx.date}</td>
                  <td className="px-6 py-4 text-right">
                    {tx.status.includes('FAILED') ? (
                      <span className="text-red-500 flex justify-end items-center text-xs font-medium"><AlertCircle className="h-3 w-3 mr-1" /> {tx.status}</span>
                    ) : (
                      <span className="text-emerald-500 flex justify-end items-center text-xs font-medium"><CheckCircle className="h-3 w-3 mr-1" /> {tx.status}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
