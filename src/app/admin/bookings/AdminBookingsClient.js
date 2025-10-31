"use client";

import { useMemo, useState } from "react";
import { BookingCalendar } from "@/components/admin/BookingCalendar";
import { adminBookings } from "@/data/admin";

export function AdminBookingsClient() {
  const [records] = useState(adminBookings);
  const sortedRecords = useMemo(
    () =>
      [...records].sort(
        (a, b) => new Date(a.checkIn).getTime() - new Date(b.checkIn).getTime()
      ),
    [records]
  );

  return <BookingCalendar bookings={sortedRecords} />;
}
