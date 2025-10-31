const statusStyles = {
  pending: "border-amber-500/40 bg-amber-500/10 text-amber-600",
  approved: "border-teal-500/40 bg-teal-500/10 text-teal-600",
  rejected: "border-rose-500/40 bg-rose-500/10 text-rose-600",
  completed: "border-indigo-500/40 bg-indigo-500/10 text-indigo-600",
  admin: "border-sky-500/40 bg-sky-500/10 text-sky-600",
  user: "border-slate-200 bg-slate-100 text-slate-600",
};

export function StatusBadge({ status }) {
  const style = statusStyles[status] || "border-slate-200 bg-slate-100 text-slate-600";
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold capitalize ${style}`}>
      {status}
    </span>
  );
}
