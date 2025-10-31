"use client";

import { useMemo, useState } from "react";
import { AdminTable } from "@/components/admin/AdminTable";
import { adminPayments } from "@/data/admin";

export function AdminPaymentsClient() {
  const [records, setRecords] = useState(adminPayments);
  const columns = useMemo(
    () => [
      { header: "Payment ID", accessor: "id" },
      { header: "Booking", accessor: "bookingId" },
      { header: "Method", accessor: "method" },
      {
        header: "Amount",
        accessor: "amount",
        render: (value) => `$${value}`,
      },
      {
        header: "Verified",
        accessor: "verified",
        render: (value) => (
          <span className={`text-xs font-semibold uppercase ${value ? "text-teal-600" : "text-amber-600"}`}>
            {value ? "Approved" : "Pending"}
          </span>
        ),
      },
    ],
    []
  );

  const actions = useMemo(
    () => [
      {
        label: "Verify slip",
        onClick: (row) =>
          setRecords((prev) => prev.map((item) => (item.id === row.id ? { ...item, verified: true } : item))),
      },
    ],
    []
  );

  return (
    <AdminTable
      title="Payment verification"
      description="Review QR payments and bank transfer slips before approving bookings."
      columns={columns}
      data={records}
      onAction={actions}
    />
  );
}
