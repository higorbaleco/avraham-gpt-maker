# Avraham GPT Maker Dashboard

> AI-powered system builder for creating, configuring, and managing AI workflows. Multi-tenant, scalable, production-ready.

## 🎯 Project Status

**Phase 1 (Wave 1)**: ✅ Complete
- Database schema (PostgreSQL + Drizzle)
- Authentication (OAuth + JWT)
- Job queue (pg-boss)
- API client for GPT Maker
- Dashboard mockups

**Phase 2**: 🚀 Ready for execution
- Frontend implementation
- API integrations
- Worker processes
- Testing & deployment

## 📦 What's in This Repo

```
├── apps/                    # Next.js + React frontend
│   └── dashboard/          # Main dashboard app
├── packages/               # Shared code
│   ├── contracts/         # Zod schemas (auth, users, orgs)
│   ├── data/              # Database models & queries
│   ├── domain/            # Business logic
│   └── ui/                # React components
├── db/                     # Database
│   ├── schema/            # Drizzle ORM schema
│   └── migrations/        # SQL migrations
├── docs/                   # Documentation
├── GPT Maker Dashboard Mockups/  # Design files (.dc.html)
├── package.json           # Monorepo root
└── pnpm-workspace.yaml    # pnpm workspaces config
```

## 🔧 Quick Start

### Prerequisites
- Node.js 18+ (tested with 20.10+)
- pnpm 8+ (`npm install -g pnpm`)
- PostgreSQL 14+ (for local development)
- GitHub & Google OAuth apps configured

### Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Create environment variables
cp .env.example .env.local
# Edit .env.local with:
# - DATABASE_URL=postgresql://...
# - GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET
# - GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET
# - JWT_SECRET (generate: openssl rand -base64 32)

# 3. Setup database
pnpm run db:migrate

# 4. Start dev server
pnpm run dev
```

Open http://localhost:3000

## 🏗️ Architecture

### Database Schema
- **users**: Multi-tenant user accounts
- **organizations**: Team/org boundaries + Row-Level Security
- **sessions**: JWT token tracking
- **operations**: Async job tracking (paired with pg-boss)
- **audit_log**: Compliance & debugging

### Authentication Flow
1. **OAuth Entry**: GitHub or Google login → JWT token
2. **Session Storage**: Token stored in `sessions` table
3. **Middleware**: Every request validates JWT + org context
4. **RLS**: PostgreSQL row-level security enforces org isolation

### Job Queue
- **Library**: pg-boss
- **Pattern**: Operations table tracks jobs → pg-boss executes → Audit logs results
- **Use**: Long-running GPT Maker API calls, exports, bulk operations

## 📡 API Client

The `packages/ui/gpt-maker-client.ts` adapter provides:
- Catalog discovery (available operations/tools)
- Execution with error handling
- Polling for long-running tasks

```typescript
const client = new GPTMakerClient(accessToken);
const ops = await client.getOperationCatalog();
const result = await client.executeOperation('chat', { prompt: '...' });
```

## 🔐 Security

- ✅ HTTPS-only in production
- ✅ CORS properly scoped to trusted origins
- ✅ Row-level security in PostgreSQL
- ✅ OAuth token rotation ready
- ✅ Audit logs for compliance
- ✅ Environment variables for secrets (no hardcoded keys)

**Before production**: Review `SECURITY.md` and set up HTTPS, CORS, and rate limiting.

## 📊 Development Workflow

### Running Tests
```bash
pnpm run test
```

### Building for Production
```bash
pnpm run build
pnpm run start
```

### Database Migrations
```bash
pnpm run db:migrate       # Run pending migrations
pnpm run db:introspect    # Sync schema from DB
```

### Code Quality
```bash
pnpm run lint
pnpm run type-check
```

## 🚀 Deployment

- **Platform**: Vercel (recommended) or any Node.js host
- **Database**: Managed PostgreSQL (AWS RDS, Supabase, etc.)
- **Environment**: Set `NODE_ENV=production`
- **Secrets**: Use platform's secret manager (not `.env`)

See `docs/DEPLOYMENT.md` for detailed steps.

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit with clear messages: `git commit -m "feat: description"`
3. Push and open a PR to `main`
4. Squash merge once approved

## 📚 Documentation

- [Architecture](./docs/ARCHITECTURE.md) - System design & decisions
- [Database](./docs/DATABASE.md) - Schema reference & migrations
- [Authentication](./docs/AUTH.md) - OAuth + JWT flows
- [Deployment](./docs/DEPLOYMENT.md) - Production setup
- [API](./docs/API.md) - Endpoint reference

## 📝 License

MIT - See LICENSE file

## 👥 Support

Created by Higor (higorbaleco@gmail.com)

For questions or issues:
1. Check the docs/ folder
2. Review existing GitHub issues
3. Open a new issue with reproduction steps

---

**Last Updated**: Oct 14, 2026
**Repository**: https://github.com/higorbaleco/avraham-gpt-maker
