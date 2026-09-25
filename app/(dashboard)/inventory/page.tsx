"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ScanBarcode, AlertTriangle, CheckCircle, MapPin } from "lucide-react";

export default function InventoryPage() {
  const discrepancyData = [
    { id: 1, accession: "ACC-2026-0034", title: "Effective Java", expected: "Rack 04 / Shelf 01", scanned: "Rack 02 / Shelf 03", status: "MISPLACED" },
    { id: 2, accession: "ACC-2026-0112", title: "Introduction to Algorithms", expected: "Rack 01 / Shelf 02", scanned: "-", status: "MISSING" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Inventory Management</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Start scanning sessions and audit library assets.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white"><ScanBarcode className="mr-2 h-4 w-4" /> Start New Session</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 border-l-4 border-l-blue-500">
          <p className="text-sm font-medium text-slate-500">Active Session</p>
          <h3 className="text-lg font-bold mt-1">Computer Science Section</h3>
          <div className="mt-4 w-full bg-slate-100 rounded-full h-2.5 dark:bg-slate-800">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">450 / 1,000 scanned (45%)</p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Missing</p>
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold mt-1">12</h3>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Misplaced</p>
            <MapPin className="h-5 w-5 text-amber-500" />
          </div>
          <h3 className="text-2xl font-bold mt-1">8</h3>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-medium">Active Discrepancies</h3>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-3 font-medium">Book</th>
              <th className="px-6 py-3 font-medium">Expected Location</th>
              <th className="px-6 py-3 font-medium">Scanned Location</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {discrepancyData.map(d => (
              <tr key={d.id} className="border-b border-slate-200 dark:border-slate-800 last:border-0">
                <td className="px-6 py-4">
                  <div className="font-medium">{d.title}</div>
                  <div className="text-xs text-slate-500">{d.accession}</div>
                </td>
                <td className="px-6 py-4 text-slate-500">{d.expected}</td>
                <td className="px-6 py-4 font-medium">{d.scanned}</td>
                <td className="px-6 py-4">
                  <Badge variant={d.status === 'MISSING' ? 'destructive' : 'secondary'}>{d.status}</Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="outline" size="sm">Resolve</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
