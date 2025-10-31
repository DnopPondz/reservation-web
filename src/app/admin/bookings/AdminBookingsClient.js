"use client";

import { useMemo } from "react";
import { BookingCalendar } from "@/components/admin/BookingCalendar";
import { useBookings } from "@/store/booking-context";

export function AdminBookingsClient() {
  const { bookings } = useBookings();
  const sortedRecords = useMemo(
    () =>
      [...bookings].sort(
        (a, b) => new Date(a.checkIn).getTime() - new Date(b.checkIn).getTime()
      ),
    [bookings]
  );

  return <BookingCalendar bookings={sortedRecords} />;
}
