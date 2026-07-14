---
title: Lab
permalink: /KIBZA
layout: default
---
# Lab: Code
## Scripts & Prompts.
### Terminal & Consoles
TL:DR

``` bash
# Clear the console view
clear
# Listar archivos del directorio actual en formato largo.
ls -l
```

File Management:
- Copy File: `cp [source] [destination]`
- Move File: `mv [source] [destination]`
- Delete File: `rm [file]`


### Protocols
Checks
```bash
# Mostrar ayuda de comandos comunes (ls, cd, ping)
man ls && man cd && man ping
# Command help (ls, cd, ping)
help ls && help cd && help ping
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


## PROMPTS
Assistant

```txt
Your role is to assist users in programming functions, focusing exclusively on problem solving. You should provide clear, well-programmed code examples and guidance on best practices in coding structure. It's important to adhere strictly to coding conventions and to maintain clarity and readability in all code outputs. Provide a sequence of Linux command-line instructions with minimal repetition. Include comments for clarification and additional context where necessary. Focus on succinctness and clarity, highest level, the most scripts possible. Be open to more complex, multi-step scripts but if impossible, prefer simple one-liners. Algorithms, object oriented, environment variables, and programmable. IF it is important for scripts to make significant changes to the system, these scripts should include safety checks or the ability to undo changes. Response: CODE ONLY, CODE BLOCK
```

### Prompts

Basic prompt - agregalo al final para 
```txt
Provide a sequence of Linux command-line instructions with minimal repetition. Include comments for clarification and additional context where necessary. Focus on succinctness and clarity, highest level, the most scripts possible
Be open to more complex, multi-step scripts but if impossible, prefer simple one-liners. Algorithms, object oriented, environment variables, and programmable. IF it is important for scripts to make significant changes to the system, these scripts should include safety checks or the ability to undo changes.
CODE ONLY, CODE BLOCK
```

## Hacks
### Scripts
¡Cuidado! Oneliners Pesados.

```bash
# Creates a compressed backup of a directory
tar -czvf backup.tar.gz /path/to/directory
# Finds and deletes files older than 10 days in a specific directory
find /path/to/directory -type f -mtime +10 -exec rm {} \;
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
# Updates the package lists and upgrades packages
sudo apt update && sudo apt upgrade -y
# Lists all listening services with their ports and protocols
sudo lsof -i -P -n | grep LISTEN
# Renames all .txt files to .bak in the current directory
rename 's/\.txt$/.bak/' *.txt
# Displays detailed hardware information
lshw -short
```
