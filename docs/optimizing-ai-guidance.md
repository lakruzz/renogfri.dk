# Beyond the Basics: A Two-Tiered Approach to Guiding AI Coding Assistants

As developers, we're increasingly collaborating with AI coding assistants like GitHub Copilot. While they are incredibly powerful out of the box, getting them to understand the specific nuances, workflows, and architectural patterns of *your* project can be a challenge. Simply dropping them into a large codebase is like asking a new hire to start contributing with no onboarding.

To truly unlock their potential, we need to provide clear, structured guidance. Through experimentation, a powerful two-tiered approach has emerged that balances high-level project context with granular, task-specific instructions.

## Tier 1: The Project Handbook (`.github/copilot-instructions.md`)

The first tier is a single, standardized file that serves as the primary "welcome packet" for any AI assistant entering your repository.

- **Purpose:** To provide a high-level, comprehensive overview of the project's landscape. This is the first document the AI reads to understand the "big picture."
- **Location:** `.github/copilot-instructions.md`
- **Analogy:** Think of this as the **Employee Handbook**. It's what every new team member (human or AI) reads on their first day to understand the company's structure, core values, and general procedures.

### What should it contain?

- **Architecture & Tech Stack:** What are the major components? What frameworks, languages, and libraries are used?
- **Core Developer Workflow:** How do you build, test, and run the project? What are the essential commands?
- **Version Control Strategy:** How are branches managed? Is there a PR process, or a different model like trunk-based development?
- **High-Level Code Conventions:** What are the most important design principles for this project (e.g., "separation of concerns," "DRY," "keep changesets small")?

The goal is to provide the foundational knowledge required to be a competent contributor.

## Tier 2: The Modular SOPs (`.github/instructions/*.md`)

While the handbook is great for general knowledge, it can become bloated if you try to document every single process. The second tier addresses this by creating a directory of modular, task-specific instruction files.

- **Purpose:** To provide detailed, step-by-step instructions for specific, recurring, or complex tasks that an AI agent might be asked to perform.
- **Location:** A dedicated folder, such as `.github/instructions/`.
- **Analogy:** These are the **Standard Operating Procedure (SOP)** manuals. While the handbook tells you *what* the company does, the SOPs tell you *exactly how* to perform a specific job, like "How to file an expense report" or "How to operate the forklift."

### What should it contain

Each file in this directory should be narrowly focused on a single task.

- `summary.instructions.md`: "When asked to create a change summary, follow these exact steps: 1. Get the issue number from the branch name. 2. Create a temp file. 3. Use the `gh issue comment --body-file` command..."
- `testing.instructions.md`: "When asked to write a unit test for a service class, always mock dependencies using this specific library and place the test file in this directory..."
- `agent-rules.instructions.md`: "When operating in agent mode, always create temporary files in the `./temp` directory and clean them up afterward."

## How They Work Together: A Perfect Synergy

These two tiers don't contradict each other; they are hierarchical and complementary.

1. **General Context First:** The AI assistant starts by reading the main `.github/copilot-instructions.md` to get its bearings and understand the project's architecture and core principles.
2. **Specific Guidance on Demand:** When it's given a specific task (e.g., "summarize my changes"), it then looks for and applies the detailed rules from the corresponding file in the `.github/instructions/` directory.

This layered approach keeps your instructions clean, maintainable, and highly effective. The main handbook remains stable and high-level, while you can add or refine granular, task-specific SOPs as your project evolves, turning your AI assistant from a capable generalist into a true, specialized team member.

## Scaling Up: Managing Instructions Across Multiple Repositories

As you adopt this two-tiered instruction model, you'll quickly notice a new challenge: repetition. Many of your projects might share the same tech stack and workflow, leading to identical copilot-instructions.md files and common SOPs in the instructions directory. Maintaining these duplicates is inefficient and error-prone.

The solution is to centralize your common instruction files and sync them into your projects. Here are a few common approaches to solve this problem, with their respective pros and cons.

### 1. Template Repository & Sync Script

This approach involves creating a central, non-public repository (e.g., `ai-instructions-template`) that holds the canonical versions of your instruction files.

- **How it works:** A simple shell script (`bash`, `PowerShell`, etc.) in each project can be run manually to copy the files from a local clone of the template repository into the project's .github folder.
- **Pros:**
  - **Simple & Low-Tech:** Easy to set up and understand. No complex Git knowledge is required.
  - **Flexible:** You can easily choose which files to sync and which to keep project-specific.
- **Cons:**
  - **Manual Process:** Requires developers to remember to run the sync script. Can lead to outdated instructions if forgotten.
  - **No Versioning:** The project repository has no formal link to a specific version of the instructions.

### 2. Git Submodules

This is a Git-native solution where you embed one repository inside another. Your .github folder (or a part of it) could be a submodule pointing to your central instructions repository.

- **How it works:** You add the instructions repository as a submodule. The parent repository then tracks a specific commit of the submodule.
- **Pros:**
  - **Built-in Versioning:** The parent project is pinned to a specific version of the instructions, ensuring consistency.
  - **Official & Integrated:** It's a standard Git feature, well-documented and understood.
- **Cons:**
  - **Complexity:** Submodules can be confusing for developers unfamiliar with them, especially regarding updating and committing.
  - **Cloning Overhead:** Requires an extra step when cloning (`git clone --recurse-submodules`).

### 3. Dotfile Management Tools (e.g., `stow`, `chezmoi`)

While designed for managing personal dotfiles, these tools are excellent at symlinking files from a central location to multiple destinations.

- **How it works:** You maintain a central repository of your instruction files. A tool like `stow` can then create symbolic links from that repository into the .github folder of each project.
- **Pros:**
  - **Single Source of Truth:** Changes in the central repository are instantly reflected in all projects that have been "stowed."
  - **Clean:** No copying of files; the project directories just contain links.
- **Cons:**
  - **Requires Tool Installation:** Every developer needs to have the management tool installed.
  - **Symlink Compatibility:** Can sometimes be an issue in specific environments, though it's rare in modern development.

Choosing the right approach depends on your team's comfort level with different tools and the desired balance between simplicity and robust versioning. For many, starting with a simple sync script is a great first step, while teams comfortable with Git may prefer the rigor of submodules.
