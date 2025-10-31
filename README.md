# Horizon Booking

A full-stack hotel and queue booking platform delivering a premium guest experience and an intuitive admin console. The project includes a Next.js front end and an Express + MongoDB back end with JWT authentication, payment slip verification, and queue-aware booking workflows.

## Project structure

```
reservation-web/
├── backend/              # Express API (Node.js, MongoDB, JWT)
├── public/               # Static assets
└── src/                  # Next.js App Router front end
```

## Front-end (Next.js)

The Next.js application lives in the `src/` directory and uses the App Router. Tailwind CSS powers the design system and all pages follow a modern hospitality-inspired theme.

### Available pages

| Route | Purpose |
| ----- | ------- |
| `/` | Landing page with hero, services, testimonials, and CTA |
| `/reservation` | Booking form with payment options and slip upload preview |
| `/history` | Booking history timeline with status badges |
| `/profile` | Profile management with avatar upload |
| `/about` | Company overview and milestones |
| `/contact` | Contact details, embedded map, and support form |
| `/login` | Email/password login (demo fallback) |
| `/register` | Guest registration (demo fallback) |
| `/admin` | Dashboard metrics, latest bookings, notifications |
| `/admin/users` | User management table |
| `/admin/bookings` | Booking approvals with inline status changes |
| `/admin/services` | Service catalogue with activation toggles |
| `/admin/payments` | Payment verification workflow |

### Running the front end

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the interface. Authentication flows use a demo fallback if the API is offline, allowing you to navigate client and admin experiences immediately.

## Back-end (Express + MongoDB)

The API server is contained in the `backend/` folder and provides the following capabilities:

- JWT-based authentication with cookie storage
- Secure password hashing with bcrypt
- CRUD endpoints for users, services, bookings, and payments
- Admin-only routes for booking approvals and payment verification
- Multer-powered slip uploads served from `/uploads`

### Environment variables

Copy `.env.example` to `.env` and update the values:

```bash
cd backend
cp .env.example .env
```

Key variables:

- `MONGO_URI` – MongoDB Atlas connection string
- `JWT_SECRET` – secret key for signing JWT tokens
- `FRONTEND_ORIGIN` – comma-separated list of allowed origins (e.g. `http://localhost:3000`)
- `CLOUDINARY_URL` – optional storage integration for file uploads

### Running the API

```bash
cd backend
npm install
npm run dev
```

The server listens on `http://localhost:5000` by default and exposes REST endpoints under `/api/*`.

## Connecting front end and back end

1. Start the back end (`npm run dev` inside `backend/`).
2. Start the front end (`npm run dev` from the project root).
3. Set the `NEXT_PUBLIC_API_URL` environment variable for the front end if the API is hosted on a different origin.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build of the front end |
| `npm run start` | Run the compiled Next.js app |
| `npm run lint` | Lint the Next.js project |
| `cd backend && npm run dev` | Start the Express API with file watching |

## Deployment

- **Frontend:** Vercel (Next.js App Router)
- **Backend:** Render or Railway (Node.js + Express)
- **Database:** MongoDB Atlas
- **Storage:** Cloudinary or Supabase for payment slips and profile photos

## License

MIT © Horizon Booking
