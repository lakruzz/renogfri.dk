# Jekyll Project - Copilot Instructions

This document provides general instructions for working on a Jekyll-based project that uses a common toolchain including Rake and the `gh-tt` Git extension.

## Architecture and Tech Stack

- **Static Site Generator**: The site is built using **Jekyll**. The source code resides in the `src/` directory.
- **Build Output**: The final, generated static site is placed in the `_site/` directory. This directory is not checked into version control.
- **Styling**: We use **SCSS** for styling. The main stylesheet is `src/_sass/main.scss`, which gets compiled into `assets/css/style.css`.
- **JavaScript**: Vanilla JavaScript is used for interactive elements. The main file is typically `src/assets/js/main.js`.
- **Task Runner**: **Rake** is used to automate build and development tasks. See the `Rakefile` for details.
- **Containerization**: A `dockerfile` is provided to create a consistent development environment with Ruby, Bundler, and the GitHub CLI.

## Version Control & Issue Management

We do not use pull requests. Instead, we use the GitHub CLI extension [gh-tt](https://github.com/thetechcollective/gh-tt) to manage issues and branches.

- `gh tt workon [-i ISSUE | -t TITLE]`: Creates and switches to a new issue branch (e.g., `123-my-feature`).
- `gh tt wrapup [message]`: Stages all changes, commits them, and pushes the branch. This triggers the pre-commit hook locally and the 'wrapup' workflow when reaching GitHub.
- `gh tt deliver`: Squashes all branch commits into one commit on a branch named after the issue and prefixed with `ready/` It triggers the 'ready' workflow and prepares it for fast-forwarding into `main`. When a commit hits main it is automatically deployed by the 'deploy' workflow.
- `git sweep`: An alias defined in the .gitconfig file that fetches and prunes remote branches, then deletes any local branches that have been merged into `main`. It prepares your local repo for new work.

## Developer Workflow

The primary development workflow involves running a local server with live reload to see changes as you make them.

- **To start the local development server**:

  ```bash
  bundle exec rake jekyll:serve
  ```

  This command builds the site and serves it from `http://localhost:4000`. The `--livereload` flag ensures that the browser automatically refreshes when you save a file.

- **To build the site for production**:

  ```bash
  bundle exec rake build
  ```

  This command runs `bundle exec jekyll build` and places the output in the `_site` directory.

- **To validate HTML**:
  The `Rakefile` includes tasks to check for broken links using `html-proofer`.
  - `bundle exec rake proofer:check` (internal links only)
  - `bundle exec rake proofer:check_external` (includes external links)

The pre-commit hook in `.githooks/pre-commit` runs the internal link check before allowing a commit, ensuring that all internal links are valid. It can make sence to run that manually as a pre-check even on a dirty working tree before committing, to catch issues early.

  ```bash
  .githooks/pre-commit
  ```

## Code Conventions

- **Keep Changesets Small**: Keep changes focused on the issue at hand. Do not add unrelated changes or refactorings.
- **DRY (Don't Repeat Yourself)**: Avoid code duplication. Refactor repeated code into reusable functions or classes.
- **CLI Output**: Avoid adding `print` or `puts` statements to CLI tools. If nothing happened, nothing should be printed.
- **Jekyll Structure**: Follow standard Jekyll conventions. Content pages are in the root of `src/`, reusable modules are in `src/_includes/`, and layouts are in `src/_layouts/`.
- **Separation of Concerns**: Honor the principle of separating "what" (content in `.md` files) from "how" (presentation in layouts and includes). Use Jekyll's includes and layouts to keep Markdown files clean of HTML and scripts. When Markdown files are cluttered with HTML, identify reusable snippets to move into includes.

## RAG (Retrieval-Augmented Generation)

Further details and project-specific instructions can be found in the `.github/instructions/` directory. These files contain specific instructions for handling different parts of the codebase and workflows.
