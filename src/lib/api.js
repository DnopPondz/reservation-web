const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("auth-token") : null;
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Request failed");
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const api = {
  register: (payload) => request("/api/auth/register", { method: "POST", body: JSON.stringify(payload) }),
  login: (payload) => request("/api/auth/login", { method: "POST", body: JSON.stringify(payload) }),
  getProfile: () => request("/api/users/me"),
  updateProfile: (payload) =>
    request("/api/users/me", { method: "PUT", body: JSON.stringify(payload) }),
  listServices: () => request("/api/services"),
  createBooking: (payload) =>
    request("/api/bookings", { method: "POST", body: JSON.stringify(payload) }),
  listBookings: () => request("/api/bookings"),
  listAdminBookings: () => request("/api/admin/bookings"),
  updateBookingStatus: (id, status) =>
    request(`/api/admin/bookings/${id}`, { method: "PATCH", body: JSON.stringify({ status }) }),
  listUsers: () => request("/api/users"),
  updateUser: (id, payload) =>
    request(`/api/users/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteUser: (id) => request(`/api/users/${id}`, { method: "DELETE" }),
  listPayments: () => request("/api/payments"),
  verifyPayment: (id, payload) =>
    request(`/api/payments/${id}/verify`, { method: "POST", body: JSON.stringify(payload) }),
};
