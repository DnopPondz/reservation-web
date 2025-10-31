"use client";

import { useMemo, useState } from "react";
import { AdminTable } from "@/components/admin/AdminTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { adminBookings } from "@/data/admin";

export function AdminBookingsClient() {
  const [records, setRecords] = useState(adminBookings);
  const columns = useMemo(
    () => [
      { header: "Booking ID", accessor: "id" },
      { header: "Guest", accessor: "guest" },
      { header: "Service", accessor: "service" },
      {
        header: "Date",
        accessor: "date",
        render: (value, row) => `${new Date(value).toLocaleDateString()} • ${row.time}`,
      },
      {
        header: "Status",
        accessor: "status",
        render: (value) => <StatusBadge status={value} />,
      },
    ],
    []
  );

  const actions = useMemo(
    () => [
      {
        label: "Approve",
        onClick: (row) =>
          setRecords((prev) => prev.map((item) => (item.id === row.id ? { ...item, status: "approved" } : item))),
      },
      {
        label: "Reject",
        variant: "danger",
        onClick: (row) =>
          setRecords((prev) => prev.map((item) => (item.id === row.id ? { ...item, status: "rejected" } : item))),
      },
    ],
    []
  );

  return (
    <AdminTable
      title="Booking approvals"
      description="Review guest reservations and update queue statuses."
      columns={columns}
      data={records}
      onAction={actions}
    />
  );
}
