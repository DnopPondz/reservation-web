export const adminUsers = [
  {
    id: "USR-001",
    name: "Amelia Hart",
    email: "amelia@horizonbooking.com",
    role: "admin",
    createdAt: "2023-11-20",
  },
  {
    id: "USR-002",
    name: "Luca Jensen",
    email: "luca.jensen@example.com",
    role: "user",
    createdAt: "2024-03-11",
  },
  {
    id: "USR-003",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    role: "user",
    createdAt: "2024-05-08",
  },
];

export const adminBookings = [
  {
    id: "BKG-3081",
    guest: "Luca Jensen",
    service: "Executive Suite",
    date: "2025-02-22",
    time: "18:00",
    status: "pending",
  },
  {
    id: "BKG-3082",
    guest: "Priya Sharma",
    service: "Spa Therapy",
    date: "2025-02-18",
    time: "09:00",
    status: "approved",
  },
  {
    id: "BKG-3083",
    guest: "Amelia Hart",
    service: "Conference Hall",
    date: "2025-02-25",
    time: "08:00",
    status: "pending",
  },
];

export const adminServices = [
  {
    id: "room-deluxe",
    name: "Deluxe Room",
    price: 180,
    active: true,
  },
  {
    id: "room-suite",
    name: "Executive Suite",
    price: 320,
    active: true,
  },
  {
    id: "spa-therapy",
    name: "Spa Therapy",
    price: 95,
    active: false,
  },
];

export const adminPayments = [
  {
    id: "PAY-771",
    bookingId: "BKG-3081",
    method: "Bank Transfer",
    amount: 320,
    verified: false,
  },
  {
    id: "PAY-772",
    bookingId: "BKG-3082",
    method: "QR",
    amount: 95,
    verified: true,
  },
];
