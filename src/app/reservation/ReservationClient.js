"use client";

import { ReservationForm } from "@/components/forms/ReservationForm";

export function ReservationClient() {
  const handleSubmit = () => new Promise((resolve) => setTimeout(resolve, 700));
  return <ReservationForm onSubmit={handleSubmit} />;
}
