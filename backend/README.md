# Backend (Django)

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_demo_accounts
python manage.py runserver
```

You can still run `createsuperuser` manually; seeding is enough for local UI + API tests.

## Seeded test accounts

Default password for all: **`CridoraDemo2026!`** (override: `python manage.py seed_demo_accounts --password 'YourPass'` or env `CRIDORA_SEED_PASSWORD`).

| Email | Profile role | Notes |
|--------|----------------|--------|
| `django_admin@cridora.test` | `admin` | **Django admin** at `/admin/` (`is_staff` + superuser) |
| `ops@cridora.test` | `admin` | **Web** ops console only (not staff) |
| `saver@cridora.test` | `consumer` | Saver dashboard |
| `jeweller@cridora.test` | `merchant_admin` | Jeweller workspace |
| `counter@cridora.test` | `merchant_staff` | Counter / staff jeweller UI |

On `/auth/login`, the **account type** tab must match the account’s role (API checks `expected_role`).

## Django admin (`/admin/`)

- URL: `http://127.0.0.1:8000/admin/`
- Username: full email, e.g. `django_admin@cridora.test`
- Password: same as seed default (unless you changed it)

## API (`/api/v1/`)

- **Health:** `GET /api/v1/health/`
- **Login (JSON):** `POST /api/v1/auth/login/` — body `{ "email", "password", "expected_role"?: "consumer"|"merchant_admin"|… }` — returns `token` + `user`
- **Register:** `POST /api/v1/auth/register/` — saver or jeweller
- **Logout:** `POST /api/v1/auth/logout/` — header `Authorization: Token <key>` (deletes token)
- **Me:** `GET /api/v1/auth/me/` — same header
- **Legacy:** `POST /api/v1/auth/token/` — DRF `username` / `password`

## Environment

- Development: `DJANGO_ENV` unset or `development` — SQLite, `DEBUG=True`, permissive CORS.
- Production: `DJANGO_ENV=production` plus `DJANGO_SECRET_KEY`, `DJANGO_ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS`, DB settings — see `config/settings/production.py`.
