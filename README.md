# Student Portfolio

A clean, professional portfolio web application built with React (frontend) and Express (backend), demonstrating real development practices including testing, linting, and CI/CD.

## Features

- Responsive, minimal dark-themed UI
- Pages: Home, About, Projects, Skills, Contact
- REST API with in-memory data (no database required)
- Contact form with client-side and server-side validation
- Component and API tests with Jest
- ESLint + Prettier for consistent code style
- GitHub Actions CI/CD pipeline

## Project Structure

```
portfolio/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── components/   # Navbar, Footer, ProjectCard
│   │   ├── pages/        # Home, About, Projects, Skills, Contact
│   │   └── styles/       # Global CSS
│   └── vite.config.js
├── backend/           # Express API
│   └── src/
│       ├── routes/       # projects.js, contact.js
│       ├── data/         # projects.js (in-memory data)
│       └── index.js
├── tests/
│   ├── backend/          # API tests (supertest)
│   └── frontend/         # Component tests (React Testing Library)
├── .github/workflows/    # CI/CD pipeline
├── .env.example
└── README.md
```

## Setup

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/username/portfolio.git
cd portfolio

# Install all dependencies
npm run install:all

# Copy env file
cp .env.example .env
```

**Run in development:**

Open two terminals:

```bash
# Terminal 1 — backend (http://localhost:5000)
npm run dev:backend

# Terminal 2 — frontend (http://localhost:5173)
npm run dev:frontend
```

## Testing

Tests live in `tests/` and use Jest.

```bash
# Run all tests
npm test

# Backend only
npm run test:backend

# Frontend only
npm run test:frontend
```

- Backend tests use `supertest` to hit the Express API directly
- Frontend tests use `@testing-library/react` to render and assert on components

## Linting

ESLint is configured separately for frontend and backend.

```bash
npm run lint:frontend
npm run lint:backend
```

Prettier config is in `frontend/.prettierrc`. Run it with:

```bash
npx prettier --write frontend/src
```

## Build

```bash
npm run build
```

Outputs to `frontend/dist/`.

## CI/CD

GitHub Actions runs on every push to `main` or `develop` and on pull requests to `main`.

Pipeline steps:
1. Install dependencies (root, frontend, backend)
2. Lint frontend and backend
3. Run backend tests
4. Run frontend tests
5. Build frontend

See `.github/workflows/ci.yml` for the full config.

## API Endpoints

| Method | Endpoint         | Description              |
|--------|-----------------|--------------------------|
| GET    | /api/health     | Health check             |
| GET    | /api/projects   | List all projects        |
| GET    | /api/projects/:id | Get project by ID      |
| POST   | /api/contact    | Submit contact form      |

### Contact POST body

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Your message"
}
```
