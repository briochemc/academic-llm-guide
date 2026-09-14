# GenAI tools for coding

::: tip
Most of these tools can read, write, and run code on your machine. See [Sandboxing agentic tools](/sandboxing) for ways to constrain what they can reach.
:::

Prices are USD per month for one person, as shown on each vendor's pricing page on 8 September 2026. Annual billing is usually cheaper. UNSW-provided tools are listed first. <Badge type="warning" text="TBC" /> marks something we could not confirm on an official page.

## Ways to use a coding assistant

Every vendor below offers most of these. The second table says what each one is called.

| Mode | What it is | Good for |
|---|---|---|
| **Chat** | Web, desktop, or mobile app. You paste code or upload files. | Questions, explanations, one-off snippets. |
| **IDE** | An extension for VS Code, JetBrains, and others, or a dedicated editor. Inline completions plus an agent that edits files. | Day-to-day coding in your own environment. |
| **CLI** | An agent in your terminal that reads, edits, and runs code in the current directory. | Multi-file changes, tests, refactors. Works over SSH, for example on Gadi. |
| **Cloud agent** | Runs in the vendor's sandbox on a copy of your repository and returns a pull request. | Delegating a task. Nothing runs on your machine. |
| **API** | Pay per token from scripts and pipelines. | Batch jobs and reproducible workflows. See [Gadi / HPC](/gadi). |

## At a glance

| Tool | Access at UNSW | Individual price (USD/month) | API ($ per million tokens, in / out) |
|---|---|---|---|
| **ChatGPT & Codex** (OpenAI) | **UNSW-provided** through ChatGPT Edu for staff. See [GenAI at UNSW](/guidance#chatgpt-edu). Whether UNSW has enabled Codex <Badge type="warning" text="TBC" /> | Free $0 · Go $8 · Plus $20 · Pro $100 or $200. Codex is on every plan. | GPT-6 Astra $10 / $50 · GPT-5 nano $0.05 / $0.40 |
| **Microsoft Copilot Chat** (Microsoft) | **UNSW-provided** for all staff and students, with enterprise data protection. Not a coding agent, but fine for questions about code. See [GenAI at UNSW](/guidance#tools-unsw-provides). | Included. | Not sold separately |
| **GitHub Copilot** (GitHub) | Personal account. Verified teachers get Copilot Pro free and verified students get the Student plan free, via GitHub Education. | Free $0 · Pro $10 · Pro+ $39 · Max $100 · Business $19/seat. Usage above the plan allowance is billed in credits at $0.01 each. | Not sold. Uses OpenAI, Anthropic, and Google models. |
| **Claude** (Anthropic) | Personal account. PIs in natural sciences, maths, CS, or engineering can apply for a free 12-month Team plan (Standard seats $0, Premium seats $15). | Free $0 · Pro $20 ($17 annual) · Max $100 or $200 · Team $25/seat. Claude Code and Cowork need a paid plan or API billing. | Opus 5 $5 / $25 · Sonnet 5 $2 / $10 · Haiku 4.5 $1 / $5 · Fable 5.1 $10 / $50 |
| **Cursor** (Anysphere) | Personal account. Student offers only at events. | Hobby $0 · Pro $20 · Pro+ $60 · Ultra $200 · Teams $40/seat | No general API |
| **Gemini** (Google) | Personal account. Students can get 12 months of Google AI Plus free (AI Pro in the US). | Free $0 · AI Pro $19.99 · AI Ultra $99.99 or $199.99. Antigravity has a free Individual tier. | Gemini 3.1 Pro $2 / $12 · Gemini 3.5 Flash-Lite $0.30 / $2.50 |
| **Mistral Vibe** (Mistral AI) | Personal account. Verified students $5.99 for 12 months. | Free $0 (includes $10 of API credit) · Pro $14.99 · Team $24.99/seat | Mistral Medium 3.5 $1.50 / $7.50 · Mistral Small 4 $0.15 / $0.60 |

## Ways to use each tool

| Tool | Chat | IDE | CLI | Cloud agent | Other |
|---|---|---|---|---|---|
| **ChatGPT & Codex** | ChatGPT (web, desktop, mobile) | Codex extension for VS Code, Cursor, JetBrains, Xcode | Codex CLI (open source) | Codex cloud (from the web, GitHub, Slack) | Codex in the ChatGPT desktop app. Codex Remote drives your computer from the mobile app. |
| **Microsoft Copilot Chat** | Copilot (web, Teams, Edge, mobile) | — | — | — | — |
| **GitHub Copilot** | GitHub Copilot app (desktop) | VS Code, Visual Studio, JetBrains, Xcode, Eclipse | Copilot CLI | Copilot cloud agent on github.com | Copilot code review. GitHub Mobile. |
| **Claude** | Claude (web, desktop, mobile) | Claude Code in VS Code and JetBrains | Claude Code | Claude Code on the web | Claude Cowork, a desktop agent for files and documents rather than code. Claude in Chrome. Claude Code in Slack and GitHub Actions. |
| **Cursor** | — | Cursor editor, a VS Code fork with models from OpenAI, Anthropic, Google, xAI, and Cursor | Cursor CLI | Cloud Agents from the web, iOS, Slack, GitHub | Bugbot code review |
| **Gemini** | Gemini (web, mobile) | Antigravity (desktop editor) | Antigravity CLI. Gemini CLI still works with an API key. | Jules (15 tasks a day free) | — |
| **Mistral Vibe** | Vibe (web, mobile), formerly Le Chat | Extensions for VS Code, JetBrains, Zed | Vibe CLI (open source) | Remote agents | Open-weight models such as Mistral Small 4 (Apache 2.0) can run locally or on HPC. |

::: info Changes since the last version of this page
- Devstral, Mistral's coding model, was deprecated in May 2026. Mistral now points to Mistral Medium 3.5, and Le Chat was renamed Vibe.
- Google replaced Gemini CLI with Antigravity CLI for consumer plans in June 2026 and ended the free Gemini Code Assist tier for individuals.
- Codex is now included in every ChatGPT plan, including Free and Edu.
- GitHub Copilot moved from "premium requests" to credit-based billing and added a Max plan and a free Student plan.
:::

## Sources

- OpenAI: https://learn.chatgpt.com/docs/pricing · https://learn.chatgpt.com/docs/codex/cli · https://learn.chatgpt.com/docs/codex/ide · https://learn.chatgpt.com/docs/cloud · https://developers.openai.com/api/docs/pricing
- GitHub Copilot: https://github.com/features/copilot/plans · https://docs.github.com/en/copilot/get-started/plans · https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals
- Anthropic: https://claude.com/pricing · https://claude.com/product/claude-code · https://claude.com/product/cowork · https://claude.com/programs/team-plan-for-scientists · https://platform.claude.com/docs/en/about-claude/pricing
- Cursor: https://cursor.com/pricing · https://cursor.com/docs/cli/overview · https://cursor.com/docs/cloud-agent
- Google: https://gemini.google/subscriptions/ · https://antigravity.google/pricing · https://jules.google/docs/usage-limits · https://ai.google.dev/gemini-api/docs/pricing · https://geminicli.com/docs/resources/quota-and-pricing/
- Mistral: https://mistral.ai/pricing · https://mistral.ai/pricing/api/ · https://mistral.ai/products/vibe
