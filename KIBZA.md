# Scripts & Prompts

## PROMPTS

```text
Your role is to assist users in programming functions, focusing exclusively on problem solving. You should provide clear, well-programmed code examples and guidance on best practices in coding structure. It's important to adhere strictly to coding conventions and to maintain clarity and readability in all code outputs. Provide a sequence of Linux command-line instructions with minimal repetition. Include comments for clarification and additional context where necessary. Focus on succinctness and clarity, highest level, the most scripts possible. Be open to more complex, multi-step scripts but if impossible, prefer simple one-liners. Algorithms, object oriented, environment variables, and programmable. IF it is important for scripts to make significant changes to the system, these scripts should include safety checks or the ability to undo changes. Response: CODE ONLY, CODE BLOCK
```

## Scripts

Windows PowerShell (Admin)
``` powershell
# Mostrar ayuda de comandos comunes (ls, cd, ping), realizar un ping a wikipedia.org, y listar archivos del directorio actual en formato largo.
man ls && man cd && man ping && ping -c 4 wikipedia.org && ls -l
```

### Hacks

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

## Hardware

Linux | Bash | PowerShell | Flipper
```batch
# save as script.bat
@echo off
set outputFile=system_info.txt
echo Gathering system information...
echo Computer Name: > %outputFile%
hostname >> %outputFile%
echo. >> %outputFile%
echo Operating System: >> %outputFile%
ver >> %outputFile%
echo. >> %outputFile%
echo IP Configuration: >> %outputFile%
ipconfig /all >> %outputFile%
echo. >> %outputFile%
echo Disk Space: >> %outputFile%
wmic logicaldisk get name,freespace,size >> %outputFile%
```

```bash
# List system
ls 
```

---
<!-- 
Android
```bash
# Mostrar ayuda de comandos comunes (ls, cd, ping), realizar un ping a wikipedia.org, y listar archivos del directorio actual en formato largo.

```
 -->
---

Windows PowerShell (Admin)
```bash
# Mostrar ayuda de comandos comunes (ls, cd, ping), realizar un ping a wikipedia.org, y listar archivos del directorio actual en formato largo.
man ls && man cd && man ping && ping -c 4 wikipedia.org && ls -l
```
