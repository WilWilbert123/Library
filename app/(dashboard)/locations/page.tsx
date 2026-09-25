"use client";

import { Button } from "@/components/ui/button";
import { Plus, MapPin, Search, Maximize2, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function LocationsPage() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row gap-4 justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Locations & Map</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Configure physical sections, racks, and library map.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Location</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-0">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-4 flex flex-col h-[600px]">
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input placeholder="Search location..." className="pl-9" />
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-1">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium rounded-md flex items-center cursor-pointer">
              <MapPin className="h-4 w-4 mr-2" /> Main Library
            </div>
            <div className="pl-6 space-y-1 mt-1">
              <div className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md cursor-pointer text-sm font-medium">1st Floor - Reference</div>
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-md cursor-pointer text-sm font-medium">2nd Floor - Gen. Circulation</div>
              <div className="pl-6 space-y-1 mt-1">
                <div className="p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded cursor-pointer text-sm text-slate-600 dark:text-slate-400">Computer Science</div>
                <div className="pl-6 space-y-1">
                  <div className="p-1 text-xs text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 rounded font-medium border border-blue-100 dark:border-blue-800/50 cursor-pointer">Rack 01</div>
                  <div className="p-1 text-xs text-slate-500 hover:text-slate-700 cursor-pointer">Rack 02</div>
                  <div className="p-1 text-xs text-slate-500 hover:text-slate-700 cursor-pointer">Rack 03</div>
                </div>
                <div className="p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded cursor-pointer text-sm text-slate-600 dark:text-slate-400">History</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[600px] relative">
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <Button variant="secondary" size="sm"><Settings className="h-4 w-4 mr-2" /> Edit Layout</Button>
            <Button variant="secondary" size="icon"><Maximize2 className="h-4 w-4" /></Button>
          </div>
          
          <div className="flex-1 p-8 flex items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] dark:opacity-20">
            <div className="absolute inset-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl flex items-center justify-center">
              <div className="text-center bg-white/80 dark:bg-slate-900/80 p-6 rounded-xl backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-sm">
                <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">2nd Floor - Computer Science</h3>
                <p className="text-sm text-slate-500 mt-2">Rack 01 selected. Interactive map rendering engine placeholder.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
