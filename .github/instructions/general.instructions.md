---
applyTo: '**'
---

# General Agent Instructions

This file contains operational instructions for how AI agents should behave within this workspace.

## Temp folder and temp files

**When in agent mode**, creating intermediate or temporary test files, always create them in the `./temp` folder. If it doesn't exist create the `temp` folder and and make sure it's ignored by git. If it's not already mentioned in the `.gitignore` file in the repo root, then add a `./temp/.gitignore` file containing only an asterisk (`*`).

## Issue-related tasks

When asked to annotate issue summaries or perform other issue-related tasks:

- **For issue branches** (format: `123-feature-name`): Extract the issue number directly from the terminal prompt (the number before the first hyphen in the branch name shown in parentheses). DO NOT run additional git commands like `git branch --show-current` to determine this information.

- **For copilot/ branches** (format: `copilot/branch-name`): These are working branches created for GitHub Copilot agents. They do NOT contain embedded issue numbers. If you need to reference an issue while on a `copilot/*` branch, the issue number must be provided explicitly in the task context or obtained through other means (not from the branch name).

## Suggest new issues

Feel free to point out code smells and suggest improvements, but do not implement them unless they are directly related to the issue. If they are severe and important enough, then offer to create a new issue for them. Follow the same approach as when you annotate summaries (see ./summary.instructions.md) to issues comments (create a `*.md` file in the `temp` folder. create the issue using the `--body-file` flag).
