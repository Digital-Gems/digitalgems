# Project rules

- Use Bun's text `bun.lock` as the primary dependency lockfile and synchronize `package-lock.json` after dependency updates; omit binary lockfiles so security scanners can inspect resolved versions.
- Fix transitive dependency vulnerabilities by re-resolving the lockfiles, not by adding transitive packages or overrides to `package.json`, so dependency ownership stays with their parent packages.