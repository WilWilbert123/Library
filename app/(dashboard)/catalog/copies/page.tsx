"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Plus, Edit, Trash, MoreHorizontal, QrCode } from "lucide-react";

export default function CopiesPage() {
  const [search, setSearch] = useState("");

  const copies = [
    { id: "1", title: "Clean Code", accession: "ACC-2026-0001", barcode: "10000001", location: "Rack 04 / Shelf 03", status: "AVAILABLE", condition: "Good" },
    { id: "2", title: "Clean Code", accession: "ACC-2026-0002", barcode: "10000002", location: "Rack 04 / Shelf 03", status: "BORROWED", condition: "Good" },
    { id: "3", title: "Atomic Habits", accession: "ACC-2026-0003", barcode: "10000003", location: "Rack 02 / Shelf 01", status: "DAMAGED", condition: "Poor" },
    { id: "4", title: "Dune", accession: "ACC-2026-0004", barcode: "10000004", location: "Rack 07 / Shelf 02", status: "RESERVED", condition: "New" },
    { id: "5", title: "1984", accession: "ACC-2026-0005", barcode: "10000005", location: "Rack 05 / Shelf 01", status: "MISSING", condition: "Unknown" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Physical Copies</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage individual physical copies, barcodes, and conditions.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button><Plus className="mr-2 h-4 w-4" /> Add Copy</Button>
          <Button variant="secondary"><QrCode className="mr-2 h-4 w-4" /> Print Labels</Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input placeholder="Search by Accession, Barcode, or Book Title..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter Status</Button>
      </div>

      <div className="border border-slate-200 dark:border-slate-800 rounded-md bg-white dark:bg-slate-900 overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-3 font-medium">Accession / Barcode</th>
              <th className="px-6 py-3 font-medium">Book Title</th>
              <th className="px-6 py-3 font-medium">Location</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {copies.map((c) => (
              <tr key={c.id} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900 dark:text-white">{c.accession}</div>
                  <div className="text-slate-500 text-xs mt-1">{c.barcode}</div>
                </td>
                <td className="px-6 py-4 font-medium">{c.title}</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{c.location}</td>
                <td className="px-6 py-4">
                  <Badge variant={
                    c.status === 'AVAILABLE' ? 'default' : 
                    c.status === 'BORROWED' ? 'secondary' : 
                    c.status === 'DAMAGED' || c.status === 'MISSING' ? 'destructive' : 'outline'
                  }>
                    {c.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
