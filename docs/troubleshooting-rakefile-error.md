# Troubleshooting: Rakefile Syntax Error

## Problem

If you encounter an error like:

```text
rake aborted!
SyntaxError: /workspaces/renogfri.dk/rakefile:66: unterminated regexp meets end of file
%r{twitter\.com
```

## Cause

This error indicates that the `Rakefile` in your local checkout is corrupted or incomplete. The file appears to be truncated, ending prematurely around line 66.

## Solution

### Option 1: Reset the file from Git

```bash
# Discard local changes to Rakefile and get the clean version from Git
git checkout HEAD -- Rakefile

# Verify the file is correct
ruby -c Rakefile
```

### Option 2: Clean checkout

```bash
# Stash any local changes
git stash

# Pull the latest changes
git pull

# Verify Rakefile
ruby -c Rakefile
```

### Option 3: Manual verification

The `Rakefile` should be 83+ lines and contain properly closed regexp patterns. You can verify by checking:

```bash
# Check line count
wc -l Rakefile

# Check Ruby syntax
ruby -c Rakefile

# Check that all %r{ patterns are closed with }
grep '%r{' Rakefile
```

All regexp patterns should look like `%r{pattern}`, not `%r{pattern` (missing closing brace).

## Prevention

This issue typically occurs due to:

- Interrupted git operations (pull/checkout/merge)
- Disk full during git operations
- Merge conflicts not properly resolved
- File system issues

Always ensure git operations complete successfully and check the output for errors.

## Verification

After fixing, run:

```bash
bundle exec rake jekyll:build
```

It should complete without syntax errors.
