# Sandboxing agentic tools

Agentic coding tools (see [GenAI for coding](/coding)) differ from chat assistants in one important way: they **run commands on your machine**. They can read and write files, install packages, call APIs, and push to remotes. Most ship with a permission prompt, but that prompt is often the only thing standing between an agent and your filesystem — and it is commonly disabled for convenience (e.g. `claude --dangerously-skip-permissions`).

A sandbox constrains what the agent *can* do, rather than asking you to approve each thing it *tries* to do.

## Fence

URL: https://fencesandbox.com/

A lightweight, container-free sandbox for terminal agents on macOS and Linux. It wraps any command (`fence -- claude`, `fence -- codex`, …) in an OS-level sandbox with:

- default-deny outbound network, with an allowlist
- scoped filesystem access (path allow/deny rules)
- blocking of dangerous commands (e.g. `git push`)
- a reviewable policy file

On macOS it works by generating Seatbelt profiles for `sandbox-exec`, so there is no extra sandbox package to install. It ships a default "code" template that allowlists common model APIs, Git hosts, and package registries while keeping the workspace and normal agent config/cache directories usable.

Pricing / licence:
- Free and open source (Apache-2.0). Built by [Tusk](https://usetusk.ai).

Install (macOS, Homebrew):

```sh
brew tap fencesandbox/tap
brew install fencesandbox/tap/fence
```

Sources:
- https://fencesandbox.com/

## Other approaches

::: warning Not directly sourced
The following is orientation, not a sourced recommendation. Check the current documentation for whichever tool you use.
:::

- **Containers / devcontainers.** Running the agent inside Docker or a VS Code devcontainer gives stronger isolation than an OS sandbox, at the cost of a slower, less host-native workflow (your local toolchain, GPU, and mounted data may need reconfiguring).
- **Built-in sandboxes.** Some tools sandbox themselves. Codex's web and IDE surfaces run each task in its own cloud sandbox preloaded with your repository — see [GenAI for coding](/coding#openai-codex).
- **Least privilege by default.** Give the agent a working directory containing only what it needs, and avoid running it in a shell that already holds credentials (cloud CLI sessions, SSH agent keys, `.env` files) unless it genuinely needs them.

## Why this matters for research

::: warning Not directly sourced
Suggested practice.
:::

Two of the risks listed on [Risks & practices](/risks) are directly reduced by sandboxing:

- **Data leakage** — a default-deny network policy means an agent cannot upload files from your machine to an unexpected endpoint, whether by mistake or by following instructions embedded in a file it read.
- **Irreversible actions** — blocking commands like `git push`, or denying writes outside the workspace, keeps a confused agent from damaging shared repositories or unbacked-up data.

Sandboxing is *not* a substitute for the guidance on what data you may put into an external AI tool in the first place — see [UNSW guidance](/guidance).
