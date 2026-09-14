# Risks and usage practices

## Risks (sourced)

### Data leakage

UNSW warns that entering research or sensitive data into external AI tools may expose that data.

The UNSW-provided tools (ChatGPT Edu, Microsoft Copilot Chat) come with contractual protections — for example, OpenAI does not train on content submitted through UNSW's ChatGPT Edu — that personal Free/Plus accounts do not. See [GenAI at UNSW](/guidance#tools-unsw-provides).

UNSW's research-conduct guidance says not to upload restricted data into any AI system without authorisation and safeguards. See [what UNSW expects](/guidance#what-unsw-expects-in-research).

Sources:
- https://www.teaching.unsw.edu.au/ai/tools
- https://www.unsw.edu.au/newsroom/news/2025/09/unsw-sydney-inks-australias-biggest-chatgpt-edu-deal-with-openai
- https://www.unsw.edu.au/content/dam/images/unsw-wide/planning-assurance/websites/2026-05-21/ai-and-the-responsible-conduct-of-research-at-unsw.pdf

### Reliability limitations

UNSW notes that AI outputs should be independently verified.

Source:
- https://www.teaching.unsw.edu.au/ai/examples

### Literature-review tools can miss or misextract data

A peer-reviewed evaluation of Elicit found it useful as a *secondary* reviewer but not a replacement for human data extractors in systematic reviews.

Source:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11921719/

## Notes on usage practices

::: warning Not directly sourced
The following are suggested practices.
:::

- Using APIs within version-controlled environments (e.g. git) can support reproducibility
- Tracking prompts and outputs can help audit GenAI use
- Prefer UNSW-provided tools (ChatGPT Edu, Microsoft Copilot Chat, Scite, Scopus AI, Adobe Firefly) over personal accounts when handling unpublished research or sensitive data — and still check the relevant UNSW policy first where privacy, IP, or confidentiality is involved
- Disclose GenAI use in outputs where it materially contributed, as UNSW's research-conduct guidance requires
- Run agentic coding tools inside a sandbox — see [Sandboxing agentic tools](/sandboxing)
- For HPC / Gadi-specific guidance, see [How to use GenAI on Gadi](/gadi)
