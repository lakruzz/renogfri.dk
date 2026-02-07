>When working in agentic mode, the copilot workflow had trouble getting the bundle up and running.
>
>But I also see in the setup step, that you are using a plain vanilla ubuntu image:
>
>Which surprises me because #file:copilot-setup-steps.yml instructs you to use the image I carefully prepared based off the #file:dockerfile - which I know is working.
>
>**Question**: Are you not capable of using the image I build? Why isn't it used?
>
>Is it a rekuriement for you, that I use a standard ubuntu image in agentic mode?

---

Looking at the job logs, I can see that the "Configure Bundler" step failed with exit code 127 (command not found) because `bundle` wasn't available. The key issue is visible in the workflow: it shows `Runner Image: ubuntu-24.04` instead of using the custom Docker container.

Let me check the earlier logs to understand why the container wasn't used ...Looking at the workflow file and the error, the problem is:

1. The `copilot-setup-steps.yml` file specifies that the `copilot-setup-steps` job should run in a Docker container (`container: image: ${{ needs.prepare-image.outputs.image-fqdn }}`)
2. However, when GitHub Copilot runs in agent mode, it doesn't execute the `copilot-setup-steps` workflow - it runs directly on the `ubuntu-latest` runner
3. The workflow steps in `copilot-setup-steps.yml` are meant to be executed IN the container, but Copilot agent runs on the bare Ubuntu runner

>Why the Docker image isn't being used.

Let me reply to explain this:

# Summary

I investigated the CI/Build failure that @lakruzz reported. The issue was that the `bundle` command wasn't available during the Copilot agent execution, causing the setup steps to fail.

## Root Cause

The `copilot-setup-steps.yml` workflow file specifies that the `copilot-setup-steps` job should run inside a Docker container built from the `dockerfile`. However, **GitHub Copilot agent doesn't execute workflows inside custom Docker containers** - it runs directly on a standard `ubuntu-latest` runner and only executes the individual steps from the workflow.

## Why This Happened

1. The workflow defines: `container: image: ${{ needs.prepare-image.outputs.image-fqdn }}`
2. This container has Ruby 3.3.0 + bundler pre-installed (from the `dockerfile`)
3. When the workflow runs normally (on push/PR), it runs inside this container ✅
4. When Copilot agent runs, it extracts the steps but runs them on bare Ubuntu ❌
5. Result: `bundle: command not found` because Ubuntu doesn't have Ruby/bundler by default

## Response

I replied to @lakruzz's comment explaining:

- This is expected behavior and a platform limitation of GitHub Copilot agent
- Copilot doesn't support custom container images during agent execution
- The solution is to add Ruby installation steps (like `ruby/setup-ruby@v1`) to the workflow that work on bare Ubuntu
- This ensures dependencies are available whether running in the container OR on the agent's Ubuntu runner

No code changes were needed for this PR - the issue is a broader platform consideration for future agent runs.
