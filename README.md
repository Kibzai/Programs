# Programs & Tools
## Protocols

- [Help!](https://github.com/Kibzai/Programs/blob/main/HELP.md)
- [Kibza](https://github.com/Kibzai/Programs/blob/main/KIBZA.md): Hacking.
- [Kibsaim](https://github.com/Kibzai/Programs/blob/main/KIBSAIM.md): Setup.
- [Apps](https://github.com/Kibzai/Programs/blob/main/PHONE.md): Mobile.
- [Mafia](https://github.com/Kibzai/Programs/blob/main/MAFIA.md): Pirates.

---

Bash script to run setup:
- Caution: This script requires administrative privileges. Always review scripts from the internet before running them with elevated permissions!
``` bash
# Setup
wget -O setup.sh https://kibzai.github.io/Programs/setup.sh
chmod +x setup.sh
./setup.sh
```
---
## Implement
Cifrado y agregado a los metadatos
```sh
#!/bin/bash
# Ruta del archivo de texto a cifrar
archivo_texto="mensaje.txt"
# Ruta de la imagen
imagen="imagen.png"
# Cifrar el archivo de texto
openssl enc -aes-256-cbc -base64 -in $archivo_texto -out mensaje_cifrado.txt
# Eliminar todos los metadatos de la imagen
exiftool -all= $imagen
# Agregar el texto cifrado a los metadatos de la imagen
exiftool -comment="$(cat mensaje_cifrado.txt)" $imagen
# Limpiar archivos temporales
rm mensaje_cifrado.txt
# Limpiar el historial de Bash
history -c
echo "" > ~/.bash_history
```
Descifrado del texto desde los metadatos
```` sh
#!/bin/bash
# Copia el texto cifrado de los metadatos a un archivo
# Asume que ya has extraído el comentario de los metadatos y lo has guardado en mensaje_cifrado_extraido.txt
# Ruta del archivo de texto cifrado extraído
archivo_cifrado="mensaje_cifrado_extraido.txt"
# Ruta del archivo de texto descifrado
archivo_descifrado="mensaje_descifrado.txt"
# Descifrar el archivo de texto
openssl enc -aes-256-cbc -d -base64 -in $archivo_cifrado -out $archivo_descifrado
# Limpiar el historial de Bash
history -c
echo "" > ~/.bash_history
````

## Support
Protocol
``` bash
ls -l
```
Ping? Internet?
``` bash
# Mostrar ayuda de ping & realizar un ping a wikipedia.org.
man ping && ping -c 4 wikipedia.org && ls -l
```

``` bash
# Mostrar ayuda de comandos comunes (ls, cd, ping)
man ls && man cd && man ping
```
