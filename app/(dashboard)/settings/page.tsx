"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form State
  const [settings, setSettings] = useState({
    libraryName: "LuminaLibrary Main Branch",
    contactEmail: "admin@library.local",
    address: "123 University Avenue, Academic City",
    accessionPrefix: "ACC-2026-",
    maxBorrowDays: "14",
    maxRenewals: "2",
    finePerDay: "5.00"
  });

  const handleSave = () => {
    setIsSaving(true);
    setSaveSuccess(false);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Library Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Configure global application parameters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1 space-y-1">
          {[
            { id: "general", label: "General" },
            { id: "circulation", label: "Circulation Rules" },
            { id: "barcode", label: "Barcode & Printers" },
            { id: "notifications", label: "Notifications" }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md font-medium text-sm transition-colors",
                activeTab === tab.id 
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-8 min-h-[400px]">
          
          {/* General Tab */}
          {activeTab === "general" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-semibold border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">Institution Details</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="libraryName">Library Name</Label>
                    <Input id="libraryName" name="libraryName" value={settings.libraryName} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input id="contactEmail" name="contactEmail" value={settings.contactEmail} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" value={settings.address} onChange={handleChange} />
                </div>
              </div>

              <h3 className="text-lg font-semibold border-b border-slate-200 dark:border-slate-800 pb-2 mb-4 mt-8">Accession Formatting</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="accessionPrefix">Accession Prefix</Label>
                  <Input id="accessionPrefix" name="accessionPrefix" value={settings.accessionPrefix} onChange={handleChange} />
                  <p className="text-xs text-slate-500">Auto-generated accession numbers will use this prefix.</p>
                </div>
              </div>
            </div>
          )}

          {/* Circulation Tab */}
          {activeTab === "circulation" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-semibold border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">Default Circulation Rules</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="maxBorrowDays">Standard Loan Period (Days)</Label>
                    <Input id="maxBorrowDays" name="maxBorrowDays" type="number" value={settings.maxBorrowDays} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxRenewals">Max Renewals Allowed</Label>
                    <Input id="maxRenewals" name="maxRenewals" type="number" value={settings.maxRenewals} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="finePerDay">Fine Per Day ($)</Label>
                    <Input id="finePerDay" name="finePerDay" type="number" step="0.5" value={settings.finePerDay} onChange={handleChange} />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">These are default values. Specific borrower types (e.g. Faculty) can override these in Borrower Type settings.</p>
              </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {(activeTab === "barcode" || activeTab === "notifications") && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 flex items-center justify-center h-48 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg">
              <p className="text-slate-500 font-medium">Configuration options for {activeTab === "barcode" ? "Printers" : "Notifications"} will appear here.</p>
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800 mt-8">
            <div>
              {saveSuccess && (
                <span className="flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 animate-in fade-in">
                  <CheckCircle2 className="h-4 w-4 mr-1.5" />
                  Settings saved successfully!
                </span>
              )}
            </div>
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> 
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
