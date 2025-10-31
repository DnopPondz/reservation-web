"use client";

import { useMemo, useState } from "react";
import { AdminTable } from "@/components/admin/AdminTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { adminUsers } from "@/data/admin";

export function AdminUsersClient() {
  const [records, setRecords] = useState(adminUsers);
  const columns = useMemo(
    () => [
      { header: "User ID", accessor: "id" },
      { header: "Full name", accessor: "name" },
      { header: "Email", accessor: "email" },
      {
        header: "Role",
        accessor: "role",
        render: (value) => <StatusBadge status={value} />,
      },
      {
        header: "Joined",
        accessor: "createdAt",
        render: (value) => new Date(value).toLocaleDateString(),
      },
    ],
    []
  );

  const actions = useMemo(
    () => [
      {
        label: "Promote",
        onClick: (row) => alert(`Promote ${row.name}`),
      },
      {
        label: "Remove",
        variant: "danger",
        onClick: (row) => setRecords((prev) => prev.filter((item) => item.id !== row.id)),
      },
    ],
    []
  );

  return (
    <AdminTable
      title="User management"
      description="View, edit, or remove hotel staff and guest accounts."
      columns={columns}
      data={records}
      onAction={actions}
    />
  );
}
