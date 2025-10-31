"use client";

import { useMemo, useState } from "react";

export function AdminTable({ title, description, columns, data, onAction }) {
  const [query, setQuery] = useState("");
  const filteredData = useMemo(() => {
    if (!query) return data;
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(query.trim().toLowerCase())
      )
    );
  }, [query, data]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
        </div>
        <input
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 sm:w-64"
        />
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
          <thead className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">
            <tr>
              {columns.map((column) => (
                <th key={column.accessor} className="px-4 py-3 font-semibold">
                  {column.header}
                </th>
              ))}
              {onAction && <th className="px-4 py-3 font-semibold">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 dark:divide-slate-800 dark:text-slate-200">
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={columns.length + (onAction ? 1 : 0)} className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  No records found.
                </td>
              </tr>
            )}
            {filteredData.map((row) => (
              <tr key={row.id} className="transition hover:bg-slate-50/60 dark:hover:bg-slate-800/60">
                {columns.map((column) => (
                  <td key={column.accessor} className="px-4 py-3 align-top">
                    {column.render ? column.render(row[column.accessor], row) : row[column.accessor]}
                  </td>
                ))}
                {onAction && (
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {onAction.map((action) => (
                        <button
                          key={action.label}
                          onClick={() => action.onClick(row)}
                          className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                            action.variant === "danger"
                              ? "border-rose-500/40 bg-rose-500/10 text-rose-600 hover:border-rose-500 hover:bg-rose-500/20"
                              : "border-teal-500/40 bg-teal-500/10 text-teal-600 hover:border-teal-500 hover:bg-teal-500/20"
                          }`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
