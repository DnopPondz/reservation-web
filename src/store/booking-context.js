"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { adminBookings as initialAdminBookings } from "@/data/admin";

const BookingContext = createContext(null);

const generateBookingId = (existing = []) => {
  let id;
  const usedIds = new Set(existing.map((booking) => booking.id));
  do {
    id = `BKG-${Math.floor(1000 + Math.random() * 9000)}`;
  } while (usedIds.has(id));
  return id;
};

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState(initialAdminBookings);

  const addBooking = (payload) => {
    let createdBooking = null;

    setBookings((previous) => {
      const id = payload?.id ?? generateBookingId(previous);
      createdBooking = {
        status: "pending",
        ...payload,
        id,
        createdAt: payload?.createdAt ?? new Date().toISOString(),
      };
      return [...previous, createdBooking];
    });

    return createdBooking;
  };

  const value = useMemo(
    () => ({
      bookings,
      addBooking,
    }),
    [bookings]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBookings() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookings must be used within a BookingProvider");
  }
  return context;
}
