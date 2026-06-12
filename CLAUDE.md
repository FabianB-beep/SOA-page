# SOA-Page – Claude Code Notes

## Git remote

The internal CCR proxy resets `origin` each session. Always set the PAT remote before pushing:

```bash
git remote set-url origin https://<PAT>@github.com/FabianB-beep/SOA-page.git
git fetch origin claude/serene-hawking-3oijvj
```

Then push with:
```bash
git push origin claude/serene-hawking-3oijvj
```

## Branch

Development branch: `claude/serene-hawking-3oijvj`

## Cache busting

The pre-commit hook replaces all `?v=XXXXXXX` patterns in HTML with the current commit hash.
Use `?nc=` (no-cache) for scripts that must never be cached (e.g. `results.js`), as the hook ignores `?nc=` parameters.
