---
permalink: /HELP
title: "Help: ¡Ayuda!"
layout: default
---
# Help
## Bible
### Versions
- [Amplified]()

## People that need help:
### Palestine
- [Genocide Database](https://law4palestine.org/law-for-palestine-releases-database-with-500-instances-of-israeli-incitement-to-genocide-continuously-updated/)

## Give Help
- [ ] Somehow

## Find Help

Para pedir ayuda en situaciones de emergencia usando dispositivos móviles, hay varias aplicaciones que pueden ser útiles. Algunas de estas aplicaciones incluyen:

Life360: Permite crear grupos con amigos o familiares y compartir tu ubicación en tiempo real. Incluye una función de pánico para alertar a tus contactos en caso de emergencia.

Kwema: Trabaja con una pulsera que al presionar por 3 segundos, envía una alerta y tu ubicación a tus contactos de seguridad.

Red Panic Button: Permite enviar tu ubicación a contactos preestablecidos en caso de peligro.

SOSMEX: Envía un llamado de auxilio agitando fuerte el teléfono o desde la barra de notificaciones.

Círculo Beta: Comparte tu ubicación con hasta seis contactos y permite enviar alertas de emergencia.

Todas estas aplicaciones están disponibles tanto para iOS como para Android y pueden ser herramientas valiosas para solicitar ayuda rápidamente en situaciones de emergencia​​. 

---

Para buscar ayuda y prepararse para la reconstrucción de la civilización en caso de un colapso, puedes considerar los siguientes recursos:

1. **Memory of Mankind (MOM)**: Es un proyecto que busca preservar el conocimiento de nuestra civilización actual en caso de un colapso. Utiliza tabletas de cerámica para almacenar información de manera duradera, con la intención de que esta información pueda ayudar a futuras generaciones o civilizaciones a reconstruir conocimientos perdidos.

2. **Repositorios de Acceso Abierto**: Existen varios repositorios y bases de datos que ofrecen acceso abierto a una vasta cantidad de documentos e investigaciones académicas. Algunos de estos incluyen:
   - **OpenAIRE**: Con más de 23,6 millones de documentos, es un recurso importante para acceder a la investigación financiada con fondos europeos.
   - **BASE (Bielefeld Academic Search Engine)**: Ofrece más de 128 millones de documentos académicos, siendo uno de los motores de búsqueda más grandes para recursos web académicos en acceso abierto.
   - **Paperity**: Un agregador multidisciplinario que recopila trabajos de Ciencias, Tecnología, Medicina, Ciencias Sociales, Humanidades y Artes.
   - **Redalyc**: Focalizado en Iberoamérica, provee acceso a casi 600.000 artículos de más de 1.260 revistas.
   - **Europe PMC**: Un repositorio que ofrece acceso a artículos, libros, patentes y guías clínicas en ciencias de la vida a nivel mundial.

Estos recursos pueden ser valiosos no solo para la investigación académica actual, sino también como un medio para preservar el conocimiento esencial para el futuro. En el caso de un evento catastrófico, tener acceso a esta información almacenada podría ser crucial para reconstruir aspectos fundamentales de la sociedad y la tecnología.

Más información sobre el proyecto Memory of Mankind está disponible en [Wikipedia](https://es.wikipedia.org/wiki/Memory_of_Mankind). Para explorar los repositorios mencionados, puedes visitar sus respectivas páginas web: [OpenAIRE](https://www.openaire.eu/), [BASE](https://www.base-search.net/), [Paperity](https://paperity.org/), [Redalyc](https://www.redalyc.org/), y [Europe PMC](https://europepmc.org/).

# Code
Símbolos Útiles
```bash
{[(<@\!/#$%&^>)]}
´`'"
```
```bash
# Wsl: Linux  in Windows Subsystem.
wsl
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
```sh
# Open Browser in Power Shell
Start-Process "https://kibzai.github.io/Programas/"
```

# Protocols
## Terminal
```bash
# Updates the package lists and upgrades packages
sudo apt update && sudo apt upgrade -y
# Install openCode
sudo curl -fsSL https://opencode.ai/install | bash
```

## Git
```bash
sudo apt install git -y
```

### Commands
- Credentials:
  - Set Email
  - Set Name
- Permissions:
  - Set SSH Key

``` bash
git config --global user.email "user@service.com"
git config --global user.name "User"
ssh-keygen -t rsa -b 4096 -C "user@service.com"
```

### Bash
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

# Science
## Learning
### Videos
- [TwoMinutePapers](https://www.youtube.com/@TwoMinutePapers): Scientific Papers.
  - [OpenAI Plays Hide and Seek…and Breaks The Game](https://www.youtube.com/watch?v=Lu56xVlZ40M)

## Thinking
True si ambos son verdaderos.
```typescript
let yesBoth = (x,y) => { return ( x && y ) }
```

---

# Hacks
- [Check Tor Project](check.torproject.org)

## Scripts
¡Cuidado! Oneliners Pesados.
```bash
# Visual monitors
htop
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

# Work
- (occ.com.mx)
- (computrabajo.com)
- (indeed.com)
- (indeed.com)

# Parental
- https://www.bark.us/
- https://www.qustodio.com

# Search
- [Pentester](pentester.com)
- [OSINT Framework](https://osintframework.com/)
- [OSINT Pilot](https://osintpilot.com/)

# Protocolos
- Reiniciar
- Apagar
- Reiniciar

# Order
- Check saved messages

# Drugs
- ¿Cuánto tiempo tiene que tomaste?
- You can always take more but you can never take less so be gentle!
