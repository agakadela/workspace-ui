import {
  ArrowRight,
  CircleCheck,
  FolderKanban,
  Home as HomeIcon,
  ShieldCheck,
} from "lucide-react";

import type { WorkspaceHomeModel } from "../../shared/data/mockWorkspace";

type HomeProps = {
  model: WorkspaceHomeModel;
};

export function Home({ model }: HomeProps) {
  return (
    <main className="min-h-screen bg-paper-50 text-ink-950">
      <div className="flex min-h-screen">
        <aside
          aria-label="Workspace sections"
          className="hidden w-64 shrink-0 border-r border-ink-950/10 bg-ink-950 px-5 py-6 text-paper-50 lg:block"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded bg-paper-50 text-ink-950">
              <FolderKanban aria-hidden="true" size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">workspace-ui</p>
              <p className="text-xs text-paper-100/70">Local shell</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2" aria-label="Primary">
            <a
              className="flex items-center gap-3 rounded bg-paper-50 px-3 py-2 text-sm font-medium text-ink-950"
              href="#home"
            >
              <HomeIcon aria-hidden="true" size={18} />
              Home
            </a>
          </nav>
        </aside>

        <section id="home" className="flex-1 px-5 py-5 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            <header className="flex flex-col gap-4 border-b border-ink-950/10 pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase text-steel-700">
                  Phase 0 web prototype
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-normal text-ink-950 md:text-5xl">
                  Workspace Home
                </h1>
              </div>
              <div className="max-w-sm rounded border border-steel-700/25 bg-steel-100 px-4 py-3 text-sm text-steel-700">
                <p className="font-semibold">Mock workspace only</p>
                <p className="mt-1 text-steel-700/85">
                  No filesystem, Git, terminal, Codex, auth, cloud, search, or
                  Tauri behavior is active.
                </p>
              </div>
            </header>

            <section
              aria-labelledby="continue-heading"
              className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]"
            >
              <div className="rounded border border-ink-950/10 bg-white p-5 shadow-panel">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-ink-600">
                      Continue with the active workspace
                    </p>
                    <h2
                      id="continue-heading"
                      className="mt-2 max-w-2xl text-2xl font-semibold tracking-normal text-ink-950"
                    >
                      {model.continueItem.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-ink-600">
                      {model.continueItem.summary}
                    </p>
                  </div>
                  <a
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded bg-ink-950 px-4 py-2 text-sm font-semibold text-paper-50"
                    href="#workspace-summary"
                  >
                    Review shell
                    <ArrowRight aria-hidden="true" size={17} />
                  </a>
                </div>
              </div>

              <div
                id="workspace-summary"
                className="rounded border border-ink-950/10 bg-paper-100 p-5"
              >
                <h2 className="text-base font-semibold text-ink-950">
                  Shell status
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-ink-600">
                  {model.shellStatus.map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <CircleCheck
                        className="mt-0.5 shrink-0 text-moss-700"
                        aria-hidden="true"
                        size={18}
                      />
                      <span>
                        <span className="font-medium text-ink-950">
                          {item.label}:
                        </span>{" "}
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              aria-labelledby="safety-heading"
              className="grid gap-4 md:grid-cols-3"
            >
              <h2 id="safety-heading" className="sr-only">
                Phase 0 guardrails
              </h2>
              {model.guardrails.map((guardrail) => (
                <article
                  key={guardrail.id}
                  className="rounded border border-ink-950/10 bg-white p-4"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                    <ShieldCheck
                      className="text-moss-700"
                      aria-hidden="true"
                      size={18}
                    />
                    <h3>{guardrail.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink-600">
                    {guardrail.description}
                  </p>
                </article>
              ))}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
