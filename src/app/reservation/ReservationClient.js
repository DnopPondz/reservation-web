"use client";

import { ReservationForm } from "@/components/forms/ReservationForm";
import { useAuth } from "@/store/auth-context";
import { useBookings } from "@/store/booking-context";
import { services } from "@/data/services";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const resolveServiceName = (serviceId) =>
  services.find((service) => service.id === serviceId)?.name ?? "Selected service";

export function ReservationClient() {
  const { user } = useAuth();
  const { addBooking } = useBookings();

  const handleSubmit = async (formData) => {
    const guestName =
      user?.name || user?.username || user?.email || user?.profile?.name || "Guest";

    addBooking({
      guest: guestName,
      service: resolveServiceName(formData.serviceId),
      checkIn: formData.checkInDate,
      checkInTime: formData.checkInTime,
      checkOut: formData.checkOutDate,
      checkOutTime: formData.checkOutTime,
      paymentMethod: formData.paymentMethod,
      note: formData.note,
    });

    await delay(500);
  };

  return <ReservationForm onSubmit={handleSubmit} />;
}
