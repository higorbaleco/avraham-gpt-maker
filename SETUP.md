# Setup & Development Guide

## Environment Setup

### 1. Clone Repository
```bash
git clone https://github.com/higorbaleco/avraham-gpt-maker.git
cd avraham-gpt-maker
```

### 2. Install Dependencies
```bash
# Global pnpm (if not installed)
npm install -g pnpm@latest

# Install project dependencies
pnpm install
```

### 3. Database Setup

#### Local PostgreSQL
```bash
# macOS
brew install postgresql
brew services start postgresql

# Create development database
createdb gpt_maker_dev

# Set connection string
export DATABASE_URL="postgresql://localhost/gpt_maker_dev"
```

#### Docker (Alternative)
```bash
docker run -d \
  --name gpt-maker-postgres \
  -e POSTGRES_DB=gpt_maker_dev \
  -e POSTGRES_PASSWORD=dev \
  -p 5432:5432 \
  postgres:15

# Connection string
export DATABASE_URL="postgresql://postgres:dev@localhost:5432/gpt_maker_dev"
```

#### Cloud (Production)
- **Supabase**: https://supabase.com → Create project → Copy connection string
- **AWS RDS**: Create database → Copy endpoint
- **Azure Database**: Create Postgres server → Copy connection string

### 4. OAuth Configuration

#### GitHub OAuth
1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill form:
   - **Application name**: Avraham GPT Maker (dev)
   - **Homepage URL**: http://localhost:3000
   - **Authorization callback URL**: http://localhost:3000/api/auth/callback/github
4. Copy `Client ID` and `Client Secret`

#### Google OAuth
1. Go to https://console.cloud.google.com
2. Create new project (or select existing)
3. Enable "Google+ API"
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URI: http://localhost:3000/api/auth/callback/google
6. Copy `Client ID` and `Client Secret`

### 5. Environment Variables

Create `.env.local` in project root:

```bash
# Database
DATABASE_URL="postgresql://localhost/gpt_maker_dev"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="$(openssl rand -base64 32)"

# GitHub OAuth
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"

# Google OAuth
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# GPT Maker API (if using external)
GPT_MAKER_API_KEY="your_api_key"
GPT_MAKER_API_URL="https://api.gptmaker.ai"

# Optional: Job Queue
PG_BOSS_DB_URL="postgresql://localhost/gpt_maker_dev"

# Logging
LOG_LEVEL="debug"
NODE_ENV="development"
```

**IMPORTANT**: Never commit `.env.local` to git. It's in `.gitignore` by default.

### 6. Database Migrations

```bash
# Run all pending migrations
pnpm run db:migrate

# Generate new migration
pnpm run db:generate "feature_name"

# Reset database (development only!)
pnpm run db:reset
```

### 7. Start Development Server

```bash
# Terminal 1: Next.js dev server
pnpm run dev

# Terminal 2 (optional): Database visualizer
pnpm run db:studio

# Terminal 3 (optional): Job queue worker
pnpm run worker
```

Open browser to http://localhost:3000

## Development Workflow

### Project Structure
- `apps/dashboard` - Next.js 14 app (pages, API routes, layouts)
- `packages/contracts` - Zod schemas for validation
- `packages/data` - Database queries & Drizzle ORM
- `packages/domain` - Business logic (auth service, etc.)
- `packages/ui` - React components and utilities
- `db/schema` - Drizzle schema definitions

### Common Commands

```bash
# Type checking
pnpm run type-check

# Linting
pnpm run lint
pnpm run lint --fix    # Auto-fix

# Testing
pnpm run test
pnpm run test --watch

# Build
pnpm run build

# Format code
pnpm run format

# View TypeScript errors across workspace
pnpm run tsc --noEmit
```

### Making a Change

1. Create feature branch
```bash
git checkout -b feature/my-feature
```

2. Edit code in `apps/dashboard` or `packages/`
3. Test locally: `pnpm run dev`
4. Type check: `pnpm run type-check`
5. Commit and push
```bash
git add .
git commit -m "feat: describe what you did"
git push origin feature/my-feature
```

6. Open PR on GitHub

## Debugging

### Next.js Debug Mode
```bash
DEBUG=* pnpm run dev
```

### Database Queries
Enable SQL logging in `.env.local`:
```bash
DATABASE_LOG_LEVEL="query"
```

### Browser DevTools
- React DevTools: https://chromewebstore.google.com/detail/react-developer-tools
- Redux DevTools: https://chromewebstore.google.com/detail/redux-devtools

### VS Code Configuration

Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

## Testing

### Unit Tests
```bash
pnpm run test
```

### Integration Tests
```bash
pnpm run test:integration
```

### E2E Tests (Playwright)
```bash
pnpm run test:e2e
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Or use different port
PORT=3001 pnpm run dev
```

### Database Connection Failed
```bash
# Check if PostgreSQL is running
psql --version
psql -U postgres -d postgres

# Test connection string
echo "SELECT 1" | psql "$DATABASE_URL"
```

### Module Not Found Errors
```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### TypeScript Errors After Dependency Update
```bash
pnpm run type-check
# Fix errors or update types
pnpm add -D @types/missing-package
```

## Next Steps

1. ✅ Setup complete? Start dev server: `pnpm run dev`
2. 📝 Read [ARCHITECTURE.md](./docs/ARCHITECTURE.md) to understand design decisions
3. 🔐 Review [AUTH.md](./docs/AUTH.md) for security considerations
4. 🚀 Check [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for production deployment
5. 💬 Join the team Slack/Discord for questions

---

**Need Help?**
- Check existing GitHub issues
- Review [docs/](./docs/) folder
- Contact: higorbaleco@gmail.com
