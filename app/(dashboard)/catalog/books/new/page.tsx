import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewBookPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Add New Book</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Enter the details of the new book title.
        </p>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input placeholder="Book Title" />
            </div>
            <div className="space-y-2">
              <Label>ISBN</Label>
              <Input placeholder="ISBN-13" />
            </div>
          </div>
          <Button type="button">Save Book</Button>
        </form>
      </div>
    </div>
  );
}
