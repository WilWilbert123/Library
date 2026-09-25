"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Shield, MoreHorizontal } from "lucide-react";

export default function UsersPage() {
  const users = [
    { id: 1, name: "Admin User", email: "admin@library.local", role: "SUPER_ADMIN", status: "ACTIVE" },
    { id: 2, name: "Sarah Connor", email: "sconnor@library.local", role: "HEAD_LIBRARIAN", status: "ACTIVE" },
    { id: 3, name: "John Doe", email: "jdoe@library.local", role: "ASSISTANT_LIBRARIAN", status: "ACTIVE" },
    { id: 4, name: "Alice Smith", email: "asmith@library.local", role: "INVENTORY_STAFF", status: "INACTIVE" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">System Users & Roles</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage admin access, librarians, and RBAC permissions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Shield className="mr-2 h-4 w-4" /> Manage Roles</Button>
          <Button><UserPlus className="mr-2 h-4 w-4" /> Add User</Button>
        </div>
      </div>

      <div className="border border-slate-200 dark:border-slate-800 rounded-md bg-white dark:bg-slate-900 overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800/50 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-3 font-medium">Name & Email</th>
              <th className="px-6 py-3 font-medium">System Role</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-b border-slate-200 dark:border-slate-800">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900 dark:text-white">{u.name}</div>
                  <div className="text-slate-500 text-xs">{u.email}</div>
                </td>
                <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-400">{u.role}</td>
                <td className="px-6 py-4">
                  <Badge variant={u.status === 'ACTIVE' ? 'default' : 'secondary'}>{u.status}</Badge>
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
