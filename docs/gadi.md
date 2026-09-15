# How to use GenAI on Gadi / HPC

## VSCode + SSH on Gadi

Guide:
- https://21centuryweather.github.io/21st-Century-Weather-Software-Wiki/vscode/vscode-gadi.html

Key points from source:
- VSCode runs locally, while code executes on Gadi
- Connection is made using SSH
- Remote-SSH extension is used for this workflow

## Running GenAI workflows on HPC

::: info Conceptual
This section contains general observations not tied to a single cited source.
:::

Typical constraints (conceptual):
- restricted internet access
- data security requirements

## Open-weight models

Definition (general):
- Models whose weights can be downloaded and run locally

Use case (conceptual):
- running models in siloed environments to avoid sending data externally

## Internal example (CCRC)

- A CCRC researcher demonstrated running a GenAI workflow on HPC with private data

::: info Source
Based on internal communication, not a web source.
:::

## Stories

Accounts from colleagues of using these tools on Gadi and other HPC systems. See [all stories](/stories/), or [contribute your own](/contribute).

<StoryCards category="hpc" />
