# Cridora India

Monorepo: **Django API** (`backend/`) and **React + Vite** marketing + dashboards (`frontend/`).

## Frontend

```powershell
cd frontend
npm ci
npm run dev
```

- Dev server: Vite prints the URL (often [http://127.0.0.1:5173](http://127.0.0.1:5173); another port is used if that one is busy).
- Local API URL is set in `frontend/.env.development` (`VITE_API_BASE_URL=http://127.0.0.1:8000`). Override with `frontend/.env.local` if needed.

- Sign in with seeded accounts (see `backend/README.md`): match the **account type** tab to the user’s role. **Django admin** (users, profiles): `http://127.0.0.1:8000/admin/` as `django_admin@cridora.test`.

Layout:

- `frontend/src/app/` — entry, router, shell `App`.
- `frontend/src/features/` — domain slices (`auth`, `marketing`, `consumer`, `merchant`, `admin`).
- `frontend/src/shared/` — UI primitives, layout chrome, global styles, config, `lib/` (API helpers).

Imports use the `@/` alias → `src/`.

## Backend

See [`backend/README.md`](backend/README.md).

Quick start:

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_demo_accounts
python manage.py runserver
```

- API: `http://127.0.0.1:8000/api/v1/`
- `GET /api/v1/health/` — liveness
- `POST /api/v1/auth/login/` — JSON email + password (+ optional `expected_role`)
- `GET /api/v1/auth/me/` — session (`Authorization: Token …`)

Seeded users and **Django admin** login: [`backend/README.md`](backend/README.md).

Development uses `CORS_ALLOW_ALL_ORIGINS`; production settings require `DJANGO_ENV=production` and env vars in `config/settings/production.py`.

## Documentation

Product direction: [`docs/PRODUCT_ARCHITECTURE.md`](docs/PRODUCT_ARCHITECTURE.md).
