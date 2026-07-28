---
permalink: /HELP
title: "Help: ¡Ayuda!"
layout: default
---
# Code
Símbolos Útiles
```bash
{[(<@\!/#$%&^>)]}
´`'"
```

## WWW - World Wide Web

```bash
http(s):// # (s) para conecciones seguras
`%20` # para escribir espacios en urls.
```
``` bash
# Open Browser Bash
start https://kibzai.github.io/Programs/
```
``` bash
# Open Browser Power Shell
Start-Process "https://kibzai.github.io/Programas/"
```

# Protocols
# Git: Local, Github & Gitlab
[Git](https://git-scm.com/) is a version control system. Its like a timelined branched repository with history.
- [Install](https://git-scm.com/install/)

## Commands
- Credentials:
  - Set Email: `git config --global user.email "user@service.com"`.
  - Set Name: `git config --global user.name "User"`.
- Permissions:
  - Set SSH Key: `ssh-keygen -t rsa -b 4096 -C "user@service.com"`.

### Git Bash
Terminal commands for Git Bash.
```bash
# Clone a Git repository
git clone <url>
# Create a Git repository
git init
# Add a remote repository to the Git repository
git remote add <name> <url>
# Show the status of the Git repository
git status
# Fetch changes from a remote repository
git fetch <name>
# Checkout a different branch or commit
git checkout <branch | commit>
# Stage changes in the working directory
git add <file(s)>
# Commit changes in the working directory
git commit -m "<message>"
# Delete a branch or commit
git branch -d <branch>` or: `git comm --amend`.
# Update a branch to the latest version
git pull <name> <branch>
# Push changes to a remote repository
git push <name> <branch>
# Pull changes from a remote repository
git pull <name> <branch>
# Create a new branch
git branch <name>
```

---

## Terminal
Help:
```bash
# Mostrar ayuda de comandos comunes (ls, cd, ping)
man ls && man cd && man ping
# Command help (ls, cd, ping)
help ls && help cd && help ping
# Ctrl+C para salir
# Copy File
cp [source] [destination]
# Move File
mv [source] [destination]
# Delete File: rm cifrado.txt
rm [file]
```

---

# Hacks
## Scripts
¡Cuidado! Oneliners Pesados.
```bash
# Updates the package lists and upgrades packages
sudo apt update && sudo apt upgrade -y
# Continuously monitors system performance
top
# Displays disk usage of each file/folder in the current directory
du -sh *
# Searches for 'text_to_find' in files under the current directory
grep -rnw '.' -e 'text_to_find'
# Lists all open network ports with their associated processes
sudo netstat -tulnp
# Lists files in the current directory and all subdirectories
find . -type f
# Syncs contents from source to destination directory
rsync -avh /path/to/source/ /path/to/destination/
# Displays disk usage and available space
df -h
# Adds a new user with a home directory
sudo adduser newusername
# Creates a backup before modifying
cp /path/to/file /path/to/file.bak
# If needed, restore from the backup
cp /path/to/file.bak /path/to/file
# Lists all listening services with their ports and protocols
sudo lsof -i -P -n | grep LISTEN

# Alert!
# Displays detailed hardware information
lshw -short
# Creates a compressed backup of a directory
tar -czvf backup.tar.gz /path/to/directory
# Renames all .txt files to .bak in the current directory
rename 's/\.txt$/.bak/' *.txt
# Finds and deletes files older than 10 days in a specific directory
find /path/to/directory -type f -mtime +10 -exec rm {} \;
```

## Console Help.

```bash
# .
sfc /scannow
```
```bash
# System scan.
Dism /Online /Cleanup-Image /RestoreHealth
```

---

# Thinking
### Videos
- [TwoMinutePapers](https://www.youtube.com/@TwoMinutePapers): Scientific Papers.
  - [OpenAI Plays Hide and Seek…and Breaks The Game](https://www.youtube.com/watch?v=Lu56xVlZ40M)

## Learn
True si ambos son verdaderos.
```typescript
let yesBoth = (x,y) => { return ( x && y ) }
```
