# Task 8B Foundation Proof Review

Status: `FIX FIRST / pending Aga visual acceptance`

This file holds the reference-comparison checklist for Task 8B. The product UI
must render the fictional workspace surface itself, not this review checklist or
the reference PNG names.

## Reference Roles

| Reference | Review role |
|---|---|
| `Company Profile.png` | Primary shell/object anchor: top navigation, object header, tabs, compact action cluster. |
| `Workflow.png` | Dominant dark work canvas with attached controls and object work zones. |
| `Company Profile - ai chat.png` / `Company Profile - ai chat (1).png` | Docked composer/tray density, context boundary groups, prompt tray rhythm. |
| `Company Profile - Materials.png` | Payload-forward object cards and compact metadata strips. |
| `settings- General.png` | Dense supporting rows and local detail rhythm. |

## Visual Gate Checklist

- The first viewport reads as one fictional workspace object, not an agent
  checklist.
- The dark canvas is the dominant surface.
- The composer or preview tray is attached to the canvas and visible at
  1024px without needing to scroll.
- Reference names and acceptance criteria are not rendered as in-app copy.
- Raw paths and technical details are secondary to human-readable object names.
- Phase 0 boundaries remain visible: mock-only, no filesystem, no Git, no
  Codex/Tauri/runtime behavior, and no private data.

## Current Remediation Target

The repaired runtime proof uses `Orchard Notes` as the selected fictional
workspace object. It should show object metadata, short tabs, a workflow-style
canvas, artifact/preview content, and an attached context handoff tray in one
compact surface.
