"use client";

import { useMemo, useState } from "react";

const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const statusStyles = {
  pending: "bg-amber-100/70 text-amber-800 border border-amber-200",
  approved: "bg-emerald-100/70 text-emerald-800 border border-emerald-200",
  rejected: "bg-rose-100/70 text-rose-800 border border-rose-200",
  completed: "bg-slate-100 text-slate-700 border border-slate-200",
};

const parseDate = (value) => new Date(`${value}T00:00:00`);

const isSameDay = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const formatMonth = (date) =>
  date.toLocaleDateString(undefined, { month: "long", year: "numeric" });

function buildMonthMatrix(activeDate) {
  const start = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
  const end = new Date(activeDate.getFullYear(), activeDate.getMonth() + 1, 0);
  const daysInMonth = end.getDate();
  const startOffset = (start.getDay() + 6) % 7; // shift to Monday start
  const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7;
  const days = Array.from({ length: totalCells }, (_, index) => {
    const day = index - startOffset + 1;
    if (day < 1 || day > daysInMonth) return null;
    return new Date(activeDate.getFullYear(), activeDate.getMonth(), day);
  });

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
}

function getLegendChip(label, className) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${className}`}>
      {label}
    </span>
  );
}

export function BookingCalendar({ bookings }) {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const normalizedBookings = useMemo(
    () =>
      bookings.map((booking) => ({
        ...booking,
        checkInDate: parseDate(booking.checkIn),
        checkOutDate: parseDate(booking.checkOut),
      })),
    [bookings]
  );

  const monthMatrix = useMemo(() => buildMonthMatrix(currentDate), [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const { monthRangeStart, monthRangeEnd } = useMemo(() => {
    const start = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const end = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    return { monthRangeStart: start, monthRangeEnd: end };
  }, [currentDate]);

  const visibleBookings = useMemo(
    () =>
      normalizedBookings.filter(
        (booking) => booking.checkInDate <= monthRangeEnd && booking.checkOutDate >= monthRangeStart
      ),
    [normalizedBookings, monthRangeEnd, monthRangeStart]
  );

  return (
    <div className="space-y-6 rounded-2xl border border-slate-200/60 bg-white/60 p-6 shadow-sm backdrop-blur">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Booking calendar</h2>
          <p className="text-sm text-slate-600">
            ตรวจสอบสถานะการจอง, วันเช็คอิน และวันเช็คเอาต์ของแต่ละห้องได้อย่างชัดเจน
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            aria-label="Previous month"
          >
            <span aria-hidden>‹</span>
          </button>
          <div className="min-w-[140px] text-center text-sm font-medium text-slate-800">
            {formatMonth(currentDate)}
          </div>
          <button
            type="button"
            onClick={handleNextMonth}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            aria-label="Next month"
          >
            <span aria-hidden>›</span>
          </button>
        </div>
      </header>

      <section className="grid grid-cols-7 gap-px rounded-xl border border-slate-200 bg-slate-200 text-sm">
        {weekdayLabels.map((label) => (
          <div
            key={label}
            className="bg-slate-50 py-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            {label}
          </div>
        ))}
        {monthMatrix.flatMap((week, weekIndex) =>
          week.map((date, dayIndex) => {
            if (!date) {
              return <div key={`empty-${weekIndex}-${dayIndex}`} className="h-32 bg-white" />;
            }

            const dayBookings = visibleBookings.filter(
              (booking) => date >= booking.checkInDate && date <= booking.checkOutDate
            );

            return (
              <div
                key={`${date.toISOString()}-${weekIndex}-${dayIndex}`}
                className="flex h-32 flex-col gap-2 border-t border-slate-100 bg-white p-3"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>{date.getDate()}</span>
                  <span className="text-[10px] uppercase tracking-wide text-slate-400">
                    {date.toLocaleDateString(undefined, { weekday: "short" })}
                  </span>
                </div>
                <div className="space-y-1 overflow-y-auto">
                  {dayBookings.length === 0 ? (
                    <p className="text-[11px] text-slate-400">ว่าง</p>
                  ) : (
                    dayBookings.map((booking) => {
                      const statusClass = statusStyles[booking.status] ?? statusStyles.pending;
                      const isCheckIn = isSameDay(date, booking.checkInDate);
                      const isCheckOut = isSameDay(date, booking.checkOutDate);

                      return (
                        <article
                          key={`${booking.id}-${date.toISOString()}`}
                          className={`space-y-1 rounded-lg px-2 py-1 text-[11px] shadow-sm ${statusClass}`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium">{booking.service}</span>
                            <span className="whitespace-nowrap text-[10px] uppercase tracking-wide">
                              {booking.status}
                            </span>
                          </div>
                          <p className="text-slate-600">
                            {booking.guest}
                          </p>
                          <div className="flex flex-wrap items-center gap-1 text-[10px] text-slate-500">
                            {isCheckIn && (
                              <span className="rounded-full bg-white/70 px-2 py-0.5 font-medium text-emerald-600">
                                เช็คอิน {booking.checkInTime}
                              </span>
                            )}
                            {!isCheckIn && (
                              <span className="rounded-full bg-white/50 px-2 py-0.5">
                                อยู่ต่อ
                              </span>
                            )}
                            {isCheckOut && (
                              <span className="rounded-full bg-white/70 px-2 py-0.5 font-medium text-rose-600">
                                เช็คเอาต์ {booking.checkOutTime}
                              </span>
                            )}
                          </div>
                        </article>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })
        )}
      </section>

      <footer className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span className="font-medium text-slate-600">Legend:</span>
        {getLegendChip("Pending", statusStyles.pending)}
        {getLegendChip("Approved", statusStyles.approved)}
        {getLegendChip("Rejected", statusStyles.rejected)}
        {getLegendChip("Completed", statusStyles.completed)}
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-600">
          <span className="text-base leading-none">•</span> เช็คอิน
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-rose-600">
          <span className="text-base leading-none">•</span> เช็คเอาต์
        </span>
      </footer>
    </div>
  );
}
