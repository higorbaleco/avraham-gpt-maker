# Phase 2 Brief - Avraham GPT Maker Dashboard

**For**: Next Agent (Claude)  
**Created**: Oct 14, 2026  
**Status**: Phase 1 Complete ✅ → Phase 2 Ready 🚀

---

## 🎯 Your Mission

Build the **frontend dashboard and API** for a multi-tenant AI system builder. Users will:
1. Log in with GitHub/Google
2. Discover available GPT Maker operations (AI tools/workflows)
3. Execute operations with a form interface
4. See results and track job status

**Timeline**: 4 weeks to production  
**Complexity**: Medium-High (React + Next.js + PostgreSQL)  
**Team**: You (solo or with other agents)

---

## 📦 What You'll Inherit

### Database ✅ (Already Done)
- PostgreSQL schema with users, orgs, sessions, operations
- Row-level security (RLS) enforcing org isolation
- Drizzle ORM migrations ready to run
- Audit logging for compliance

### Authentication ✅ (Already Done)
- OAuth (GitHub + Google) flow implemented
- JWT token generation & validation
- Auth middleware (`withAuth`, `withOrgContext`)
- Session storage & refresh logic

### Infrastructure ✅ (Already Done)
- pg-boss job queue configured
- GPT Maker API client adapter
- Monorepo (pnpm workspaces)
- TypeScript, ESLint, Prettier configured
- Design system mockups & tokens

---

## 🏗️ What You'll Build

### Week 1-2: Frontend
1. **Dashboard Layout** - Sidebar + main content area
2. **Auth UI** - Login page with OAuth buttons
3. **Operations Browser** - List/search operations and execute them

### Week 2-3: Backend API
1. **REST endpoints** - GET/POST operations, organizations, audit logs
2. **Job queue** - Integration with pg-boss for long-running tasks

### Week 3-4: Testing & Deployment
1. **Test coverage** - Unit, integration, E2E tests
2. **Production setup** - Environment config, security, monitoring

---

## 🗂️ Project Structure (What's Where)

```
root/
├── apps/
│   └── dashboard/              ← Main Next.js app (you'll add pages here)
│       ├── app/
│       │   ├── page.tsx        ← Home / dashboard
│       │   ├── auth/           ← Login pages
│       │   ├── api/            ← API endpoints (add yours here)
│       │   └── operations/     ← Operations browser
│       ├── components/         ← Shared UI components
│       └── lib/               ← Utilities
├── packages/
│   ├── contracts/             ← Zod schemas (validation)
│   ├── data/                  ← Database queries (Drizzle)
│   ├── domain/                ← Business logic (already has AuthService)
│   └── ui/                    ← React components + GPT Maker client
├── db/
│   └── schema/               ← Drizzle ORM schema (already complete)
└── docs/
    ├── ARCHITECTURE.md        ← Read this first
    ├── AUTH.md               ← Security considerations
    └── DEPLOYMENT.md         ← Production setup
```

---

## 🔑 Key Decisions Already Made

### Authentication
- **Pattern**: OAuth → JWT token stored in sessions table → Middleware validates
- **Providers**: GitHub + Google (add more in NextAuth.js config)
- **Session**: Database-backed (can resume sessions across restarts)

### Multi-Tenancy
- **Isolation**: Row-level security (RLS) in PostgreSQL
- **Context**: Every request includes `orgId` from JWT
- **Enforcement**: Middleware ensures org context, database enforces with RLS

### Job Queue
- **Library**: pg-boss (light-weight, PostgreSQL-backed)
- **Pattern**: Insert into `operations` table → pg-boss picks up → Returns job ID for polling

### Database
- **ORM**: Drizzle (type-safe, minimal overhead)
- **Migrations**: Scripted (pnpm run db:migrate)
- **Tools**: Drizzle Studio for local debugging (pnpm run db:studio)

---

## ⚡ Quick Start Commands

```bash
# 1. Install
pnpm install

# 2. Setup .env.local (ask for values if missing)
# DATABASE_URL, GITHUB_*, GOOGLE_*, JWT_SECRET, NEXTAUTH_SECRET

# 3. Run migrations
pnpm run db:migrate

# 4. Start dev
pnpm run dev

# 5. Type check (run often)
pnpm run type-check

# 6. Build & test
pnpm run build
pnpm run test
```

---

## 📋 First Task: Dashboard Layout (Week 1)

### Acceptance Criteria
- [ ] Dashboard renders at `/` (protected by auth)
- [ ] Sidebar with navigation (Home, Operations, Settings, Logout)
- [ ] Main content area shows authenticated user name
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] No TypeScript errors
- [ ] Matches Figma mockup styling

### What You Need
1. Understand `apps/dashboard/app/` structure (Next.js App Router)
2. Review `packages/ui/` for existing components
3. Check design tokens in `tailwind.config.ts`
4. Look at auth middleware in `packages/domain/AuthService.ts`

### Rough Outline
```tsx
// apps/dashboard/app/page.tsx
export default function Dashboard() {
  // Use getSession() or useSession() from next-auth
  // Render sidebar + main content
  // Link to operations, settings pages
}
```

### Design Reference
- Check `GPT Maker Dashboard Mockups/` folder for Figma exports
- Look for color palette, spacing, typography in design files
- Replicate layout using Tailwind CSS + design tokens

---

## 🧭 Navigation Across Codebase

### "How do I...?"

| Task | Answer |
|------|--------|
| Add a new page? | Create `app/page-name/page.tsx` (Next.js App Router) |
| Use database data? | Import from `packages/data/` and call query function |
| Validate form input? | Define Zod schema in `packages/contracts/`, use in form |
| Call GPT Maker API? | Use `packages/ui/gpt-maker-client.ts` |
| Protect a route? | Use `withAuth()` middleware in route handler |
| Ensure org isolation? | Use `withOrgContext()` middleware + RLS handles the rest |
| Add a component? | Create in `packages/ui/components/`, export from index |
| Run a long task? | Insert into `operations` table → pg-boss picks it up |
| Check database state? | Run `pnpm run db:studio` |

---

## 🔐 Security Checklist (Before Merging)

- [ ] No secrets in code or environment variables exposed
- [ ] API routes check `session` and `orgId`
- [ ] Database queries use org-filtered data
- [ ] CORS allows only trusted origins
- [ ] Rate limiting on API endpoints
- [ ] Audit log captures important mutations

---

## 🧪 Testing Strategy

### Unit Tests
- Business logic (domain/)
- Utility functions (packages/ui/utils/)

### Integration Tests
- API endpoints + database
- Example: POST /api/operations → checks database record created

### E2E Tests
- Full flow: Login → Browse operations → Execute → See result
- Use Playwright

### Coverage Target
- >80% for Phase 2

---

## 📞 When You're Stuck

1. **Architecture question?** → Read `docs/ARCHITECTURE.md`
2. **Need database reference?** → Check `db/schema/index.ts`
3. **How does auth work?** → Look at `packages/domain/AuthService.ts`
4. **API patterns?** → Review existing `apps/dashboard/app/api/` routes
5. **Component examples?** → Check `packages/ui/components/`

---

## 🚀 Definition of Done (Per Task)

For each feature to be "complete":
1. **Code**: Implemented and tested locally
2. **Types**: Zero TypeScript errors (`pnpm run type-check`)
3. **Tests**: Unit + integration tests passing
4. **Styling**: Matches design mockup
5. **Security**: No secrets exposed, auth/RLS working
6. **Docs**: README or inline comments if complex
7. **Git**: Clean commit history, descriptive messages

---

## 📌 Order of Execution

**Not flexible** (dependencies exist):
1. **Auth UI** first (users need to login)
2. **Dashboard Layout** (main page structure)
3. **Operations Browser** (display data from API)
4. **API Endpoints** (make operations work)
5. **Testing** (cover everything)
6. **Deployment** (go-live)

**Can run in parallel**:
- Auth UI + Dashboard Layout
- Operations Browser + API endpoints (different concerns)
- Tests throughout

---

## 💡 Pro Tips

1. **Type first**: Define Zod schemas before writing code. It'll catch bugs.
2. **Test locally**: Run `pnpm run dev` and manually test before coding tests.
3. **Commit often**: Small commits are easier to review and rollback.
4. **Ask for help**: If stuck >30 min, escalate or review docs.
5. **Use TypeScript**: Lean on the type system. Let it guide your design.

---

## 📊 Success Metrics (Phase 2 End)

- [ ] Dashboard accessible at production URL
- [ ] Users can login with OAuth
- [ ] Operations list loads from API
- [ ] Can execute operations and see results
- [ ] Job queue handles long-running tasks
- [ ] Database RLS prevents cross-org access
- [ ] Test coverage >80%
- [ ] No console errors in production build
- [ ] API response time <200ms (median)
- [ ] Team trained and ready for on-call

---

## 📋 Checklists

### Before You Start
```bash
[ ] Cloned repo
[ ] pnpm install complete
[ ] .env.local has all required vars
[ ] pnpm run db:migrate successful
[ ] pnpm run dev starts without errors
[ ] Can login via OAuth
[ ] Read README.md and SETUP.md
[ ] Read NEXT-STEPS.md
[ ] Reviewed docs/ARCHITECTURE.md
```

### First Week (Auth UI + Dashboard)
```bash
[ ] Login page created (OAuth buttons work)
[ ] Dashboard page renders (authenticated)
[ ] Sidebar navigation works
[ ] User info displayed
[ ] Responsive design works
[ ] Tests written
[ ] TypeScript clean
[ ] Committed to feature branch
```

### Week 2 (Operations + API)
```bash
[ ] Operations list page loads
[ ] Can search/filter operations
[ ] API endpoints created
[ ] Job queue integration working
[ ] Polling for job status works
[ ] Tests pass
[ ] Merged to main
```

---

**You've got this! 🚀 Ask questions if you get stuck. Report progress in git commits.**

---

*Last updated: Oct 14, 2026*  
*Created by: Higor (higorbaleco@gmail.com)*  
*Repository: https://github.com/higorbaleco/avraham-gpt-maker*
