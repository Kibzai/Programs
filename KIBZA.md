# Hackeando Prompts

## Hacks

```bash
# Creates a compressed backup of a directory
tar -czvf backup.tar.gz /path/to/directory

# Finds and deletes files older than 10 days in a specific directory
find /path/to/directory -type f -mtime +10 -exec rm {} \;

# Continuously monitors system performance
top

```

## Prompts

```bash
Provide a sequence of Linux command-line instructions with minimal repetition. Include comments for clarification and additional context where necessary. Focus on succinctness and clarity, highest level, the most scripts possible
Be open to more complex, multi-step scripts but if impossible, prefer simple one-liners.
IF it is important for scripts to make significant changes to the system, these scripts should include safety checks or the ability to undo changes

CODE ONLY, CODE BLOCK
```