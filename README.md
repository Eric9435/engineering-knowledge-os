# Engineering Knowledge OS

A structured engineering learning and reference workspace built with Next.js. It organizes technical domains, topics, code references, formulas, and project material alongside a personal notebook.

## Features

- Domain/category/topic navigation and structured technical content.
- Topic lectures, code examples, and standards-reference cards.
- Search interfaces and a knowledge-graph view.
- Formula, project, simulation, troubleshooting, and workspace pages.
- Browser-local technical notes.
- Dashboard and content-studio interfaces.

## Stack

Next.js, React, TypeScript, Tailwind CSS, React Flow, Recharts, Zustand, and Markdown/code rendering libraries.

## Local development

Use Node.js 22 and npm:

```bash
git clone https://github.com/Eric9435/engineering-knowledge-os.git
cd engineering-knowledge-os/engineering-knowledge-os
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` to check the application, then `npm run start` to serve a successful build.

## Repository layout

The runnable application is inside `engineering-knowledge-os/`, not the repository root.

| Application path | Purpose |
| --- | --- |
| `src/app/` | Learning and workspace routes |
| `src/data/core/` | Domain, topic, and reference registries |
| `src/components/` | Navigation, graphs, lectures, and notebook |
| `src/components/notebook/NotebookClient.tsx` | Browser-local note storage |
| `public/` | Public assets |
| `exports/` | Exported source/content snapshots |

## Content workflow

Update the relevant `src/data/` modules and registries, then verify the corresponding domain/topic routes and search results. References to engineering standards are educational summaries; verify requirements against the actual authoritative publication.

## Current boundaries

The AI Tutor page is a module scaffold rather than a connected tutor service. Other advanced pages may be content or interface demonstrations. Browser notes are stored in localStorage and do not automatically sync across devices. Content coverage and accuracy require review; this README does not claim a validated complete engineering curriculum.

No automated test script is defined. Lint and build commands are available.

## Maintainer

[Aung Phone Myat (Eric)](https://github.com/Eric9435)
