---
permalink: /HELP/
---
# ¡Ayuda!
## Code
Símbolos Útiles
```bash
{[(<@\!/#$%&^>)]}
´`'"
```
WWW - World Wide Web
```bash
http(s):// # (s) para conecciones seguras
`%20` # para escribir espacios en urls.
```
Checks
```bash
# Mostrar ayuda de comandos comunes (ls, cd, ping)
man ls && man cd && man ping
# Listar archivos del directorio actual en formato largo.
ls -l
# Realizar un ping a wikipedia.org
ping -c 4 wikipedia.org
# Ctrl+C para salir
```

## Git: Local, Github & Gitlab
[Git](https://git-scm.com/) is a version control system. Its like a timelined branched repository with history.
- [Install](https://git-scm.com/install/)
- Add credentials:

```bash
git config --global user.email "Kibsaim.Mejia@protonmail.com"
git config --global user.name "Kibzai"
```

### Commands
Series of protocols to use Git.
- Init: Creates a Git repository by using: `git init`.
- Remote: Adds a remote repository to the Git repository by using: `git remote add <name> <url>`.
- Status: Shows the status of the Git repository by using: `git status`.
- Add Remote: Adds a remote repository to the Git repository by using: `git remote add <name> <url>`.
- Clone: Clones a Git repository by using: `git clone <url>`.
- Fetch: Fetches changes from a remote repository by using: `git fetch <name>`.
- Checkout: Checks out a different branch or commit by using: `git checkout <branch | commit>`.
- Add: Stages changes in the working directory by using: `git add <file(s)>`.
- Commit: Commits changes in the working directory by using: `git commit -m "<message>"`.
- Delete: Deletes a branch or commit by using: `git branch -d <branch>` or: `git commit --amend`.
- Update: Updates a branch to the latest version by using: `git pull <name> <branch>`.
- Push: Pushes changes to a remote repository by using: `git push <name> <branch>`.
- Pull: Pulls changes from a remote repository by using: `git pull <name> <branch>`.
- Branch: Creates a new branch by using: `git branch <name>`.

## Console Help.

```bash
# .
sfc /scannow
```
```bash
# System scan.
Dism /Online /Cleanup-Image /RestoreHealth
```
``` bash
# Open Browser
start https://kibzai.github.io/Programs/
```
``` bash
# Open Browser
Start-Process "https://kibzai.github.io/Programas/"
```


### Protocols
- Command descriptions (ls, cd, ping):
`man ls && man cd && man ping`.
- Command help (ls, cd, ping):
`help ls && help cd && help ping`

## Github
Cómo hacer links en Github: (HELP.md)
``` markdown
[¡Ayuda!](https://kibzai.github.io/Programs/HELP): Webpage.
[HELP.md](https://github.com/Kibzai/Programs/blob/main/HELP.md): Github Code.
```
- [¡Ayuda!](https://kibzai.github.io/Programs/HELP): Webpage.
- [HELP.md](https://github.com/Kibzai/Programs/blob/main/HELP.md): Github Code.

---

## Thinking
```bash
### ¡Piensa?
```typescript
let yesBoth = (x,y) => { return ( x && y ) }
```
