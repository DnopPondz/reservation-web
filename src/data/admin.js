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
    checkIn: "2025-02-20",
    checkInTime: "15:00",
    checkOut: "2025-02-23",
    checkOutTime: "11:00",
    status: "pending",
  },
  {
    id: "BKG-3082",
    guest: "Priya Sharma",
    service: "Spa Therapy",
    checkIn: "2025-02-18",
    checkInTime: "10:00",
    checkOut: "2025-02-18",
    checkOutTime: "18:00",
    status: "approved",
  },
  {
    id: "BKG-3083",
    guest: "Amelia Hart",
    service: "Conference Hall",
    checkIn: "2025-02-25",
    checkInTime: "08:00",
    checkOut: "2025-02-25",
    checkOutTime: "20:00",
    status: "pending",
  },
  {
    id: "BKG-3084",
    guest: "Ethan Brooks",
    service: "Deluxe Room",
    checkIn: "2025-02-15",
    checkInTime: "14:00",
    checkOut: "2025-02-18",
    checkOutTime: "12:00",
    status: "approved",
  },
  {
    id: "BKG-3085",
    guest: "Nina Alvarez",
    service: "Executive Suite",
    checkIn: "2025-02-27",
    checkInTime: "16:00",
    checkOut: "2025-03-02",
    checkOutTime: "11:30",
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
