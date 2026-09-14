# Build the site locally

You do not need any of this to fix a typo or add a paragraph: edit the page on GitHub and open a pull request. Running the site on your own machine is useful when you want to see how your changes look, or check that the site still builds, before submitting them.

## What you need

- **Git**, to get the code and send changes back.
- **Node.js 18 or newer**. The current LTS (long-term support) release is the safest choice.

Check what you have with:

```sh
git --version
node --version
```

If `node --version` prints `v18` or higher, skip to [Get the code](#get-the-code).

## Install Node.js

::: code-group

```sh [macOS]
# With Homebrew (https://brew.sh)
brew install node

# Or download the LTS installer from https://nodejs.org
```

```powershell [Windows]
# With winget (built into Windows 10/11)
winget install OpenJS.NodeJS.LTS

# Or download the LTS installer from https://nodejs.org
```

```sh [Linux]
# Distribution packages are often too old. Use nvm instead:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
# then open a new terminal and run:
nvm install --lts
```

:::

Open a new terminal after installing so that `node` is on your `PATH`, then run `node --version` again.

::: tip Already have an older Node?
Some machines have an old Node lying around from another tool, and it can shadow the one you just installed. If `node --version` still reports something below 18, check which binary is being picked up with `which node` (macOS/Linux) or `Get-Command node` (Windows PowerShell), then either remove the old one or put the new install first on your `PATH`.
:::

## Get the code

If you plan to open a pull request, fork the [repository](https://github.com/briochemc/academic-llm-guide) on GitHub first and clone your fork. Otherwise clone it directly:

```sh
git clone https://github.com/briochemc/academic-llm-guide.git
cd academic-llm-guide
```

## Run the site

```sh
npm install      # once, downloads VitePress into node_modules/
npm run docs:dev
```

VitePress prints a local URL, usually `http://localhost:5173`. Open it in your browser. Any change to a `.md` file under `docs/` shows up in the browser straight away. Press `Ctrl+C` in the terminal to stop the server.

## Check that it builds

The live site is built by GitHub Actions on every push to `main`, using the same command below. If it fails on your machine it will fail there too, so run it before opening a pull request:

```sh
npm run docs:build
npm run docs:preview   # optional: serve the built site at http://localhost:4173
```

The most common build failure is a dead internal link. The error message names the page and the link.

## Where things live

| Path | What it is |
|---|---|
| `docs/*.md` | One file per page. |
| `docs/index.md` | The home page, including the boxes at the top. |
| `docs/.vitepress/config.mjs` | Site title, navigation bar, and sidebar. |
| `.github/workflows/deploy.yml` | The GitHub Actions workflow that publishes the site. |

To add a page, create a new `.md` file under `docs/` and add a link to it in the `sidebar` section of `config.mjs`.

## Troubleshooting

- **`node: command not found`**. Node.js is not installed or the terminal was opened before installing. Open a new terminal, or see [Install Node.js](#install-node-js).
- **Syntax errors or `Unsupported engine` warnings during `npm install`**. Node.js is too old. See the tip above about older versions.
- **`npm install` keeps failing**. Delete `node_modules/` and try again.
- **The port is already in use**. VitePress picks the next free port. Read the URL from the terminal output rather than assuming 5173.
