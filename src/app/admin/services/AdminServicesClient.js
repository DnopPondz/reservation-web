"use client";

import { useMemo, useState } from "react";
import { AdminTable } from "@/components/admin/AdminTable";
import { adminServices } from "@/data/admin";

export function AdminServicesClient() {
  const [records, setRecords] = useState(adminServices);
  const columns = useMemo(
    () => [
      { header: "Service ID", accessor: "id" },
      { header: "Name", accessor: "name" },
      {
        header: "Rate",
        accessor: "price",
        render: (value) => `$${value}`,
      },
      {
        header: "Active",
        accessor: "active",
        render: (value) => (
          <span className={`text-xs font-semibold uppercase ${value ? "text-teal-600" : "text-slate-500"}`}>
            {value ? "Enabled" : "Disabled"}
          </span>
        ),
      },
    ],
    []
  );

  const actions = useMemo(
    () => [
      {
        label: "Toggle",
        onClick: (row) =>
          setRecords((prev) => prev.map((item) => (item.id === row.id ? { ...item, active: !item.active } : item))),
      },
      {
        label: "Edit",
        onClick: (row) => alert(`Edit ${row.name}`),
      },
    ],
    []
  );

  return (
    <AdminTable
      title="Service catalogue"
      description="Activate, deactivate, or update pricing for rooms and experiences."
      columns={columns}
      data={records}
      onAction={actions}
    />
  );
}
