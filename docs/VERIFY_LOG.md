# VERIFY_LOG.md

Append-only verification source of truth.

Rules:

- Do not rewrite history; add new entries.
- Standard task/feature: one compact entry. Detailed proof can live in PR/commit.
- High-risk work: use an extended entry.
- If something could not be verified, name it explicitly.
- Runtime proof beats agent declaration.

## Entries

No runtime entries yet. The app has not been scaffolded.

## Entry Template

### YYYY-MM-DD — `standard | high-risk | phase close | ship` — `[feature/task/phase]` — `[commit SHA or N/A]`

- Environment: `local | preview/staging | production | N/A`
- Checked:
  - `UNKNOWN`
- Commands run:
  - `UNKNOWN`
- Runtime proof:
  - Browser flow: `UNKNOWN | N/A`
  - Database proof: `UNKNOWN | N/A`
  - Provider/dashboard proof: `UNKNOWN | N/A`
- Cannot verify:
  - `UNKNOWN | N/A`
- Docs updated:
  - `UNKNOWN | N/A`
- Verdict: `SHIP | FIX FIRST | BLOCKED`
