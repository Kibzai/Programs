---
title: "Phone: Scripts & Apps"
permalink: /PHONE
layout: default
---
# Mobile Devices
## Android
- [Scrcpy](https://scrcpy.dev/#download): Remote Android Access.

### ADB
```bash
adb devices
adb shell
# Show installed packages = package:android.jonas.fakestandby
adb shell pm list packages | grep "standby" 
# Uninstall app (Fake Standby)
adb shell pm uninstall --user 0 android.jonas.fakestandby
```

### Termux
```bash
history # Console History!
top # All Proccess Running
ip a # Network connections	
```
## Package manager: pkg
```bash
pkg # Pkg manager
pkg search <query> # Search
pkg install <package> # X
# Additional Rooted Repos:
pkg install root-repo # Root
pkg install x11-repo # x11
```
Packages
```bash
pkg install tsu # Install Sudo (Rooted Devices)
pkg install termux-api # Install Clipboard
```
Protocols
```bash
cat $PREFIX/etc/ssh/sshd_config
```
Scripts varios
``` bash
`battery`
`history`
`open -n [app_package]`
`ip`
`netstat`
`ping [address]`, `ping -c 4 www.google.com`
`rss [add/remove] [url]`
`music [play/pause/next/previous]`
`flash`
`wifi`
`uninstall [app_package]`
`alias gm='open -n com.google.android.apps.maps'`
`config`, `config -set font_size 10`
```

# OS
- [Android-x86](https://www.android-x86.org/documentation/virtualbox.html)
- [Anbox](https://anbox.io/)
- [MEmu](https://www.memuplay.com/)

## Apps
### Tiendas

- **Google Play Store** - `https://play.google.com/store`
- **F-Droid** - `https://f-droid.org/`
- **APKMirror** (no es exactamente una tienda, pero es un repositorio popular de APKs) - `https://www.apkmirror.com/`
- **Amazon Appstore** - `https://www.amazon.com/mobile-apps/b?node=2350149011`

## Home's

### 1.- Hogar

Las apps más principales!
Personalización: Lanzadores, temas, fondos de pantalla y widgets.

*Esenciales (pendiente de integrar el Home actual):*
- *(placeholder)*

#### Teclados y entrada
- [FUTO Keyboard](https://keyboard.futo.tech/): Best Keyboard.
- [FUTO Voice](https://voiceinput.futo.tech/): Best voice to text.
- AnySoftKeyboard: Teclado personalizable.
- Microsoft SwiftKey Keyboard: Teclado predictivo.
- Hacker's Keyboard: Teclado completo para hackers.
- Thumb-Key: Asistente de texto personalizado.
- Texpand: Expansión de texto.

#### Fondos, temas y widgets
- Tunnel 3D Live Wallpaper: Fondos de pantalla en 3D.
- 3D Wallpapers: Fondos de pantalla en 3D.
- Slideshow Wallpaper: Fondos de pantalla de presentación.
- LiveWallpaperIt: Fondos de pantalla en vivo.
- Wallpaper Engine: Fondos de pantalla animados.
- [Muzei](https://muzei.co/): Fondos de pantalla en vivo cambiantes.
- [Zedge](https://www.zedge.net/): Fondos de pantalla y tonos.
- TickTock Video Wallpaper by TikTok: Fondos de pantalla en video.

> Los **lanzadores** están agrupados aparte en la sección **Launchers**.

### 2.-Want to be (Productivity)

¿Dónde quieres estar?
Productividad: Aplicaciones de calendario, tareas, notas, y gestión de proyectos.

#### Calendario
- My Calendar: Calendario personalizado.
- Proton Calendar: Calendario de ProtonMail.
- Calendar: Calendario.
- Birday: Recordatorio de cumpleaños.

#### Notas, tareas y proyectos
- [Notion](https://www.notion.so/): Colaboración y gestión de proyectos.
- [Trello](https://trello.com/): Gestión de proyectos en línea.
- Obsidian: Toma de notas y organización.
- Pegboard: Organizador de notas y tareas.
- Myne: Herramienta de organización personal.
- Hibi: Diario de gratitud.
- Lifetime Goals 1.8: Metas personales.
- Track & Graph: Herramienta de seguimiento y gráficos.
- Pomodoro: Técnica de gestión del tiempo.
- TimeLimit: Control del tiempo de pantalla.
- timeto.me: Control de tiempo de pantalla.
- Decisions: Toma decisiones al azar.
- Countdown Timer: Temporizador de cuenta regresiva.
- Smart EggTimer: Temporizador de huevos inteligente.

#### Documentos y almacenamiento
- [Drive](https://www.google.com/drive/): Almacenamiento en la nube de Google.
- [Docs](https://www.google.com/docs/): Procesador de texto en línea de Google.
- [Sheets](https://www.google.com/sheets/): Hojas de cálculo en línea de Google.
- [Slides](https://www.google.com/slides/): Presentaciones en línea de Google.
- Google Cloud: Servicios en la nube de Google.
- Google One: Almacenamiento en la nube de Google.
- markdownr: Editor de Markdown.
- QuickEdit: Editor de texto y código.
- PDF Converter: Convierte documentos a PDF.
- AppBak: Copia de seguridad de aplicaciones.
- CameraFileCopy: Copia de seguridad de fotos.
- Otter: Transcripción de voz a texto.

#### PIM
- Contacts: Lista de contactos.
- OCCMundial: Empleos y reclutamiento.

### 3.-Social creation edit calendar

Comunicación: Apps de mensajería, correo electrónico, y redes sociales.
Fotografía y Creación de Contenidos: Editores de fotos y videos, dibujo y diseño.

#### Mensajería y comunicación
- Snapchat: Comparte fotos y videos efímeros.
- [Discord](https://discord.com/): Plataforma de comunicación para gamers.
- [Telegram](https://telegram.org/): Mensajería segura y rápida.
- Nekogram X: Cliente de Telegram.
- [Signal](https://signal.org/): Mensajería privada y segura.
- [WhatsApp](https://www.whatsapp.com/): Aplicación de mensajería.
- WeChat: Aplicación de mensajería y redes sociales.
- Messenger: Aplicación de mensajería de Facebook.
- Zello: Comunicación por voz en tiempo real.
- [Meet](https://meet.google.com/): Videoconferencias de Google.

#### Correo
- [Gmail](https://mail.google.com/): Correo electrónico de Google.
- [Proton Mail](https://protonmail.com/): Servicio de correo electrónico seguro.
- Temp Mail: Correo temporal.

#### Redes sociales
- [Instagram](https://www.instagram.com/): Red social de fotos y videos.
- [TikTok](https://www.tiktok.com/): Red social de videos cortos.
- [Facebook](https://www.facebook.com/): Red social.
- Business Suite: Administración de negocios en Facebook.
- Finch: Aplicación de Twitter.
- [Reddit](https://www.reddit.com/): Comunidad en línea.
- [Tumblr](https://www.tumblr.com/): Plataforma de blogs y redes sociales.
- [LinkedIn](https://www.linkedin.com/): Red profesional.
- [Pinterest](https://www.pinterest.com/): Red social de imágenes.
- [Foursquare](https://foursquare.com/): Red social de ubicaciones.
- Swarm: Aplicación de check-in de Foursquare.
- Meetup: Encuentra y construye comunidades.
- [DeviantArt](https://www.deviantart.com/): Comunidad de arte en línea.
- [Behance](https://www.behance.net/): Plataforma de portafolios de creativos.
- [Quora](https://www.quora.com/): Plataforma de preguntas y respuestas.
- [Medium](https://medium.com/): Plataforma de escritura y lectura.
- [Patreon](https://www.patreon.com/): Plataforma de apoyo a creadores.
- [Fiverr](https://www.fiverr.com/): Plataforma de freelancers.
- [Brand24](https://brand24.com/): Monitoreo de redes sociales y reputación.
- [Mailchimp](https://mailchimp.com/): Marketing por correo electrónico.
- PinPoi: Comparte ubicación en el mapa.
- Life360: Rastreo familiar y de amigos.

#### Fotografía y video
- Adobe Photoshop Express: Edición de fotos.
- [Snapseed](https://snapseed.online/): Editor de fotos de Google.
- Picsart: Editor de fotos y creador de collages.
- Prisma: Editor de fotos artísticas.
- InShot: Editor de video y foto.
- YouCut - Video Editor: Editor de video.
- CapCut: Editor de video y foto.
- VivaCut: Editor de video profesional.
- [KineMaster](https://www.kinemaster.com/): Editor de video móvil.
- BIGVU: Aplicación de grabación de video.
- Clapperboard: Pizarra de claqueta.
- GoPro Quik: Edición de videos de GoPro.
- Hypocam: Fotografía en blanco y negro.
- Glitch Lab: Efectos de fotografía glitch.
- 8Bit Photo Lab: Efectos de fotografía retro.
- Background Eraser - Remove BG: Herramienta de edición de fotos.
- Image Toolbox (Resizer): Herramienta de edición de imágenes.
- SCANN3D: Escanea objetos en 3D con la cámara.
- PhotoScan: Escanea fotos antiguas.
- PhotoTime: Organiza tus fotos por tiempo.
- AsciiCam: Convierte fotos en arte ASCII.
- AnaCam: Cámara de análisis científico.
- [Photos](https://www.google.com/photos/): Almacenamiento y gestión de fotos de Google.

#### Dibujo y diseño
- Canva: Diseño gráfico en línea.
- Sketchbook: Aplicación de dibujo.
- Acrylic Paint: Aplicación de pintura digital.
- PixaPencil: Dibujo y animación.
- Pixel Station: Editor de píxeles.
- Marvel: Creador de cómics.
- Logo Maker: Crea logotipos personalizados.
- Make AI Art: Crea arte generativo con IA.
- [WhatTheFont](https://www.myfonts.com/WhatTheFont/): Identificación de fuentes.

#### Stickers y memes
- Sticker Maker: Crea tus propios stickers.
- Sticker.ly: Creador de stickers personalizados.
- MemeTastic: Generador de memes.
- [GIPHY](https://giphy.com/): Plataforma de GIFs animados.
- Kaomoji: Generador de emoticonos japoneses.

#### Streaming y medios
- [Twitch](https://www.twitch.tv/): Plataforma de transmisión en vivo.
- Streamlabs: Herramientas para transmisión en vivo.
- Streamlabs Controller: Controla las transmisiones en vivo.
- OBS Blade: Herramienta de retransmisión en vivo.
- [Prime Video](https://www.primevideo.com/): Servicio de streaming de video.
- [YouTube](https://www.youtube.com/): Plataforma de videos en línea.
- [YT Studio](https://studio.youtube.com/): Gestión de canal de YouTube.
- [Crunchyroll](https://www.crunchyroll.com/): Streaming de anime.
- [IMDb](https://www.imdb.com/): Base de datos de películas y series.
- [Letterboxd](https://letterboxd.com/): Comunidad de cine.

### 4.-Hacking? money

Utilidades y Herramientas: Calculadoras, linterna, y herramientas del sistema.
Seguridad y Mantenimiento: Antivirus, limpiadores y gestores de batería. ¿Hackeando?
Finanzas: Gestión de gastos, banca, inversiones y criptomonedas.
Compras: Aplicaciones de tiendas, comparación de precios y listas de compras.

#### Utilidades y sistema
- Activity Manager: Administra aplicaciones en ejecución.
- Vibrator: Control de la vibración del teléfono.
- NightLight light: Luz nocturna.
- Sixtynite: Linterna nocturna.
- Cowsay: Generador de arte ASCII.
- #FFF Info: Información sobre colores.
- Color Reference: Referencia de colores.
- Binary Code Translator: Traductor de código binario.
- Smart AutoClicker: Herramienta de clic automático.
- Octopus: Mapeador de botones para juegos.
- F12: Emulador de teclado F12.
- Tether: Comparte la conexión a Internet.
- Wake On Lan: Enciende computadoras de forma remota.
- Find Device: Encuentra tu dispositivo Android.
- Barcode Scanner: Escáner de códigos de barras.
- QR Scanner: Escáner de códigos QR.
- Binary Eye: Escáner de códigos de barras.
- Barcodegen: Generador de códigos de barras.
- OCR (Tesseract): Reconocimiento óptico de caracteres.
- MD5 Checker: Verifica sumas de comprobación MD5.
- URLazy: Encurtador de URL.
- Nock Nock: Monitoriza servidores.
- RAR: Aplicación para archivos RAR y ZIP.
- YouTube Downloader: Descarga videos de YouTube.
- CameraAlign: Alineación de cámara.
- Pocket Optics: Lupa y lente de aumento.
- Echo: Grabadora de voz.
- Recorder: Grabadora de audio.
- Amaze: Explorador de archivos.
- Amaze Utilities: Utilidades para el explorador de archivos.
- Cx File Explorer: Explorador de archivos avanzado.
- Root Browser: Explorador de archivos con acceso root.
- 3D Model Viewer: Visor de modelos 3D.

#### Calculadoras y conversores
- Calculator++ (incluye Window mode): Calculadora avanzada.
- Hexpress: Calculadora hexadecimal.
- Velocity Calculator: Calculadora de velocidad.
- X: Calculadora científica.
- MyCurrency: Conversor de moneda.
- Parco: Calculadora de aparcamiento.
- Cofi: Calculadora financiera.

#### Electrónica y laboratorio
- Electronics Toolbox: Herramientas electrónicas.
- Oscilloscope: Osciloscopio virtual.
- Signal Generator: Generador de señales.

#### Seguridad, root y mantenimiento
- AFWall+: Firewall para Android.
- AdAway: Bloqueador de anuncios.
- [ExpressVPN](https://www.expressvpn.com/): VPN para privacidad en línea.
- [Orbot](https://guardianproject.info/apps/orbot/): Proxy y enrutador anónimo.
- [Tor Browser](https://www.torproject.org/): Navegador web seguro.
- OrfoxRIP: Navegador web seguro.
- [OnionShare (beta)](https://onionshare.org/): Compartir archivos de forma segura y anónima.
- cSploit: Herramienta de seguridad informática.
- Haven: Vigilancia de seguridad personal.
- Conceal: Cifrado de datos.
- Checkey: Verifica la integridad de las aplicaciones.
- Root Checker Basic: Verifica el acceso root.
- AAAAXY: Generador de contraseñas seguras.
- System App Safe Remover: Remueve aplicaciones del sistema.
- [Titanium Backup](https://play.google.com/store/apps/details?id=com.keramidas.TitaniumBackup): Copias de seguridad avanzadas (Root required).
- Magisk: Herramienta de modificación de Android.
- SD Maid (y SD Maid Pro): Limpieza y optimización de Android.
- Official TWRP App: Recuperación personalizada TWRP.
- BusyBox Free: Instala BusyBox en tu dispositivo.
- Authy: Aplicación de autenticación de dos factores.
- Authenticator: Aplicación de autenticación.
- [LastPass](https://www.lastpass.com/): Gestor de contraseñas.
- FakeStandby: Aplicación para simular que el teléfono está apagado.
- Keep Alive: Mantén las conexiones activas.
- DPM: Modo de administración de dispositivos.
- Admin: Herramientas de administración de Android.
- Tu Tag PASE: Control de acceso.
- Mi ATT: Administrador de la cuenta de AT&T.
- Rewards: Programa de recompensas de Google.

#### Redes y diagnóstico
- WiFiAnalyzer: Analizador de señales Wi-Fi.
- Fing: Escáner de red.
- NetX: Información de redes.
- NetMonster: Información de la red móvil.
- SpeedChecker: Prueba de velocidad de Internet.
- BLE Radar: Escaneo de dispositivos BLE.
- Bluetooth LE Spam: Herramienta de prueba de BLE.
- Signal Detector: Detecta señales inalámbricas.
- Sensors Multitool: Información de sensores del dispositivo.
- NFC Tools: Herramientas NFC.
- NFC Tasks: Automatización NFC.
- Router Keygen (y Router Keygen YoloSec): Generador de claves WiFi.
- LogFox: Herramienta de registro de eventos.
- Serial USB Terminal: Terminal de comunicación serie.
- μlogger: Seguimiento de ubicación.
- Ltt.rs: Sistema de ubicación en tiempo real.
- Bulkshare 2: Comparte archivos en lote.
- Share Notification: Comparte notificaciones en otros dispositivos.
- Notify: Notificaciones avanzadas.
- Stop-o-Moto: Detiene el motor en tu motocicleta.

#### Control remoto y escritorio
- Vysor: Controla tu Android desde la PC.
- AirDroid: Control remoto de Android.
- AirMirror: Refleja la pantalla de Android en la PC.
- Remote Desktop: Controla tu PC desde Android.
- Remote Mouse: Ratón y teclado remoto.
- Headwind Remote: Control remoto del viento.
- MultiVNC: Cliente VNC.
- Roku: Controla tu dispositivo Roku.
- RaspController: Controla tu Raspberry Pi.
- IP Webcam: Convierte tu dispositivo en una cámara web.
- Motion Eye: Cámara de seguridad.
- ServDroid: Servidor web para Android.

#### Finanzas
- [Mercado Pago](https://www.mercadopago.com/): Pagos en línea.
- [PayPal](https://www.paypal.com/): Pagos en línea.
- [PayPal Business](https://www.paypal.com/): Pagos y transacciones en línea.
- Wallet: Monedero / cartera digital.
- AforeMóvil Citibanamex: Acceso a tu Afore en línea.
- PAYBACK: Programa de recompensas.
- [Kickstarter](https://www.kickstarter.com/): Financiación colectiva.

#### Web y comercio electrónico
- [Shopify](https://www.shopify.com/): Plataforma de comercio electrónico.
- WooCommerce: Comercio electrónico con WooCommerce.
- Squarespace: Creación de sitios web.
- Wix Owner: Gestión de sitios web de Wix.

#### Compras
- [Amazon Shopping](https://www.amazon.com/): Compras en línea en Amazon.
- [Mercado Libre](https://www.mercadolibre.com/): Compras en línea.
- Cornershop: Compras de supermercado en línea.
- Costco: Compras en línea en Costco.
- Chedraui - Tienda en línea: Compras en línea en Chedraui.
- Cyberpuerta: Compras en línea de tecnología.
- Joom: Compras en línea a precios bajos.
- SHEIN: Compras de moda en línea.
- H&M: Compras de moda en línea.
- Pull&Bear: Compras de moda en línea.
- [ASOS](https://www.asos.com/): Compras de moda en línea.
- Cuidado Con el Perro: Compras en línea de moda.
- Petco: Compras en línea para mascotas.
- Sams Club MX: Aplicación de Sam's Club México.
- Promodescuentos: Comunidad de ofertas y descuentos.
- Little Caesars: Ordena comida en línea.
- Burger King: Ordena comida en línea.
- [Domino's](https://www.dominos.com/): Pedido de pizza en línea.
- Cielito Querido: Pedidos de café en línea.
- Cinépolis: Aplicación de cines.
- Envíos Extra: Envíos de paquetería.
- [Uber Eats](https://www.ubereats.com/): Entrega de comida a domicilio.
- [Rappi](https://www.rappi.com/): Entrega a domicilio.
- DiDi Food: Entrega de comida a domicilio.
- Tasty: Recetas de cocina y alimentos.
- Yummly: Recetas y planificación de comidas.
- KitchenOwl: Recetas de cocina.

#### Hogar / IoT
- [Home Assistant](https://www.home-assistant.io/): Automatización del hogar.
- [openHAB Beta](https://www.openhab.org/): Automatización del hogar.
- eWiseHome: Control de dispositivos domésticos.
- Gosund: Control de dispositivos inteligentes.
- Cayenne: Automatización del Internet de las cosas (IoT).
- [IFTTT](https://ifttt.com/): Automatización de tareas en línea.

#### Automatización
- Tasker: Automatización de tareas en Android. *(ver Configuración)*
- Tasker Secondary: Extensión para Tasker.
- AutoApps: Automatización para Android.
- AutoInput: Automatización para Android.
- AutoLocation: Automatización para Android.
- AutoNotification: Automatización para Android.
- AutoShare: Automatización para Android.
- AutoTools: Automatización para Android.
- Automate: Automatización de tareas en Android.

#### Linux, desarrollo y terminal
- Termux: Terminal de Linux en Android.
- Termux:Boot: Ejecución de comandos al inicio.
- Termux:Tasker: Integración con Tasker.
- Termux:Widget: Widgets para Tasker.
- Termux:Float: Aplicación flotante para Termux.
- UserLAnd: Emulador de Linux en Android.
- Linux Deploy: Instalador de Linux en Android.
- Andronix: Instalador de Linux en Android.
- Complete Linux Installer: Instalador de Linux en Android.
- Pydroid 3: IDE de Python.
- DroidScript: Desarrollo de aplicaciones móviles.
- devRant: Comunidad de desarrolladores.
- OpenHub: Cliente de GitHub.
- [GitHub](https://github.com/): Plataforma de desarrollo de software.
- Mongo Explorer: Herramienta de base de datos.
- aGrep: Buscador de patrones.
- tldr: Documentación de comandos de terminal simplificada.
- Linux Command Library: Biblioteca de comandos de Linux.
- Nix: Intérprete de lenguaje Nix.
- Termius: Cliente SSH y Telnet.
- [BOINC](https://boinc.berkeley.edu/): Computación distribuida.
- EtchDroid: Aplicación de grabado.
- [F-Droid](https://f-droid.org/): Tienda de aplicaciones de código abierto.
- F-Droid Build Status: Estado de construcción de F-Droid.
- TorrServe MatriX: Servidor y cliente BitTorrent.
- BitTorrent: Cliente de torrent.

#### Navegadores
- [Firefox](https://www.mozilla.org/firefox/): Navegador web Firefox.
- [Firefox Nightly](https://www.mozilla.org/firefox/channel/desktop/): Navegador web nocturno de Firefox.
- [DuckDuckGo](https://duckduckgo.com/): Motor de búsqueda privado.
- [Bing](https://www.bing.com/): Motor de búsqueda de Microsoft.
- Browser: Navegador web.

### 5.-Learn investigate (weather)

Noticias y Tiempo: Información actualizada, tiempo meteorológico y alertas.
Educación y Aprendizaje: Aplicaciones educativas, cursos en línea, y libros electrónicos.

#### Noticias y tiempo
- [Flipboard](https://flipboard.com/): Plataforma de noticias personalizadas.
- Ground News: Noticias de diferentes fuentes.
- Feeder: Lector de noticias RSS.
- Pulse: Aplicación de noticias.
- Local: Descubre eventos locales.
- lWS: Pronóstico del tiempo.

#### Educación y ciencia
- [Memrise](https://www.memrise.com/): Aprende idiomas y más.
- Infinite Japanese: Aprende japonés.
- Japanese: Aprende japonés.
- Kanji draw: Aprende a escribir kanji.
- AnkiDroid: Tarjetas de memoria y repaso.
- [Photomath](https://photomath.app/): Resuelve ecuaciones con la cámara.
- Sangaku Maths: Resuelve problemas matemáticos.
- [Platzi](https://platzi.com/): Educación en línea.
- [Udemy](https://www.udemy.com/): Plataforma de cursos en línea.
- [edX](https://www.edx.org/): Cursos en línea de las mejores universidades y empresas.
- [TED](https://www.ted.com/): Charlas inspiradoras en video.
- Classroom: Google Classroom.
- ChemistryLab: Laboratorio de química virtual.
- Physics: Aplicación de física educativa.
- Quantum: Aplicación de física cuántica.
- Electric Circuit Studio: Simulador de circuitos eléctricos.
- Periodic Table: Tabla periódica interactiva.
- Geological Timescale: Escala de tiempo geológico.
- Knots 3D Animated: Aprende a hacer nudos.
- Survival Manual: Manual de supervivencia.
- Constellations: Explora las constelaciones.
- Star Walk 2: Astronomía y observación de estrellas.
- Trail Sense: Navegación en exteriores.
- SatDump: Satélite y estación espacial seguimiento.
- Aves Libre: Observación de aves.
- [iNaturalist](https://www.inaturalist.org/): Ciencia ciudadana de observación de la naturaleza.
- Seek: Identificación de plantas y animales.
- Florae: Aplicación de flores y plantas.
- Antikythera Simulation: Simulador astronómico.
- Mandelbrot Maps: Explora fractales.
- [NASA](https://www.nasa.gov/): Aplicación oficial de la NASA.
- [Wikipedia](https://www.wikipedia.org/): Enciclopedia en línea.
- Translate: Traductor de Google.
- Arts & Culture: Explora el arte y la cultura.

#### Libros y lectura
- [Audible](https://www.audible.com/): Audiolibros y entretenimiento auditivo.
- [Goodreads](https://www.goodreads.com/): Comunidad de lectores.
- [Pocket](https://getpocket.com/): Guarda artículos para leer después.
- KOReader: Lector de libros electrónicos.
- eReader Prestigio: Lector de libros electrónicos.
- TachiyomiSY: Lector de manga.
- MyAnimeList: Seguimiento de anime y manga.
- Bulbapedia: Enciclopedia Pokémon.
- Bible: Biblia en línea.
- BibleProject: Recursos bíblicos y videos.
- Himnario Bautista: Himnario cristiano.

### 6.-Sensors music Creation reality

Música y Audio: Reproductores de música, podcast, y herramientas de producción musical.
Salud y Bienestar: Monitores de actividad, yoga, meditación y dietas.
Transporte y Viajes: Mapas, reservas de viaje, transporte local y guías turísticas.
Fitness: Seguimiento de actividad física, nutrición y entrenamientos.

#### Reproductores y streaming (audio/video)
- [Spotify](https://www.spotify.com/): Plataforma de streaming de música.
- [Deezer](https://www.deezer.com/): Streaming de música.
- [SoundCloud](https://soundcloud.com/): Plataforma de música y audio.
- [YT Music](https://music.youtube.com/): Streaming de música de YouTube.
- Musicolet: Reproductor de música sin anuncios.
- Poweramp: Reproductor de música avanzado.
- Stereo: Reproductor de música.
- Music: Reproductor de música.
- [VLC](https://www.videolan.org/vlc/): Reproductor multimedia.
- [Plex](https://www.plex.tv/): Servidor multimedia y transmisión.
- Podcasters: Escucha y descubre podcasts.
- [Last.fm](https://www.last.fm/): Seguimiento de música y recomendaciones.
- [Shazam](https://www.shazam.com/): Identifica música en segundos.
- [SoundHound](https://www.soundhound.com/): Identifica música.
- [Musixmatch](https://www.musixmatch.com/): Letras de canciones.
- WhoSampled: Descubre samples de música.
- [Genius](https://genius.com/): Plataforma de letras de canciones.
- Secret Shuffle: Reproductor de música aleatorio.
- SUFLER.PRO: Reproductor de audio.
- Snapcast: Sincronización de audio multihabitación.

#### Instrumentos y producción musical
- DaTuner: Afinador de instrumentos musicales.
- gStrings: Afinador de instrumentos.
- Tuner: Afinador de instrumentos.
- Tuner - Pitched: Afinador musical.
- Soundbrenner: Metrónomo y sintonizador.
- Tone Generator: Generador de tonos.
- Perfect Ear: Entrenador auditivo.
- Music Theory Companion: Herramienta de teoría musical.
- Scales Practice: Práctica de escalas musicales.
- Circle Of Fifths: Herramienta musical.
- Chord Tracker: Seguimiento de acordes musicales.
- OpenSongApp: Aplicación para músicos.
- Flat: Editor de partituras musicales.
- SynprezFM: Sintetizador FM.
- Pagan Music Sequencer: Secuenciador musical pagano.
- Remixlive: Estación de creación musical.
- FL Studio Mobile: Estudio de música móvil.
- [BandLab](https://www.bandlab.com/): Creación de música en línea.
- Moises: Herramienta de edición de música.
- Piano: Simulador de piano.
- Melodeon: Acordeón virtual.
- Accordion: Acordeón virtual.
- VocalPitchMonitor: Monitor de tono vocal.

#### Audio y utilidades de sonido
- Sound Manager: Administrador de sonido.
- AudioFX: Ecualizador de audio.
- AudioMeter: Medidor de sonido.
- Audio Spectrum Analyzer: Analizador de espectro de audio.
- Spectroid: Visualizador de espectro de audio.
- Headphones: Ecualizador de auriculares.
- Safe Headphones: Protege tus oídos.
- Sound Amplifier: Amplificador de sonido.
- Binaural Beats: Sonidos binaurales para la relajación.
- Mindroid: Generador de sonidos relajantes.
- Brethap: Ejercicios de respiración.
- OMGSoundboard: Soundboard con sonidos graciosos.
- A Whip: Aplicación de sonidos de látigo.

#### Salud, bienestar y fitness
- [Headspace](https://www.headspace.com/): Meditación y mindfulness.
- Inner Breeze: Meditación y relajación.
- MyTherapy: Seguimiento de medicamentos y salud.
- Ceno: Calculadora de dieta cetogénica.
- Broccoli: Calculadora de nutrición.
- Sleep: Aplicación de seguimiento del sueño.
- Awoken: Control de sueño y sueños lúcidos.
- Fit: Aplicación de seguimiento de actividad física.
- FitProSport: Seguimiento de actividad física.
- OpenTracks: Registra tus actividades al aire libre.
- STEEZY: Clases de baile en línea.
- IMSS Digital: Servicios médicos en línea en México.

#### Transporte y viajes
- [Uber](https://www.uber.com/): Servicio de transporte.
- DiDi: Servicio de transporte.
- [Waze](https://www.waze.com/): Navegación y tráfico en tiempo real.
- [Maps](https://www.google.com/maps/): Mapas y navegación de Google.
- [OsmAnd~](https://osmand.net/): Mapas y navegación fuera de línea.
- Transportr: Planificador de transporte público.
- Subway - Metro Metrobus - Mexico CDMX: Mapa del metro y autobús en Ciudad de México.
- [Airbnb](https://www.airbnb.com/): Reserva de alojamiento en línea.

#### AR, sensores y realidad
- Pokémon GO: Caza Pokémon en el mundo real.
- Pikmin Bloom: Juego de realidad aumentada.
- ARuler: Regla de medición en realidad aumentada.
- OpenAthena™ for Android: Herramienta de análisis de energía.

### 7.-Games

Entretenimiento: Juegos.

- Minesweeper: Juego clásico de buscaminas.
- hocus: Juego de puzles.
- Petals: Juego de rompecabezas.
- Ricochlime: Juego de habilidad.
- AIDungeon: Juego de aventuras de texto.
- Fall: Juego de plataformas.
- Flow Free: Juego de puzles.
- Chess: Juego de ajedrez.
- Chess Clock: Reloj de ajedrez.
- Hammer: Juego de habilidad con martillo.
- Wa-Tor: Simulador de ecosistema.
- PvZ 2: Plants vs. Zombies 2.
- ZENONIA4: Juego de rol.
- Blindscape: Juego de aventuras.
- Endless Sky: Juego de exploración espacial.
- Super Toss The Turtle: Juego de lanzamiento de tortugas.
- Fruit Ninja: Juego de corte de frutas.
- Fruit Ninja Classic: Juego de corte de frutas.
- JJ Classic: Juego clásico.
- Jetpack: Juego de plataformas.
- Hyperforma: Juego de puzles.
- Cats&Soup: Juego de gatos y sopa.
- Euclidea: Juego de geometría.
- Iron Marines: Juego de estrategia.
- Kingdom Rush: Juego de defensa de torres.
- Frontiers: Juego de estrategia.
- Balance the Ball: Juego de equilibrio.
- Chibe: Juego relajante.
- Don't Touch The Spikes: Juego adictivo.
- Eternium: Juego de rol de acción.
- Smash Hit: Juego de lanzamiento de bolas.
- Zombie Smasher: Juego de aplastar zombies.
- [Minecraft](https://www.minecraft.net/): Juego de construcción.
- New Life 2: Juego de simulación de vida.
- [Pokémon GO](https://www.pokemongo.com/): Caza Pokémon en el mundo real.
- GuessThatPokemon: Adivina el Pokémon.
- Pokémon Quest: Juego de aventuras de Pokémon.
- Pokémon Sleep: Controla tu sueño con Pokémon.
- Pokémon UNITE: Juego de batalla en equipo de Pokémon.
- Solar Smash: Simulador de destrucción planetaria.
- Traffic Rider: Juego de carreras de motos.
- Swordigo: Juego de aventuras.
- 2048: Juego de rompecabezas numérico.
- Just Dance Now: Juego de baile en línea.
- JD Controller: Controlador de Just Dance Now.
- Unciv: Juego de estrategia tipo Civilization.
- Beer Simulator - iBeer: Simulador de cerveza.
- Prime Number Counter: Contador de números primos.
- Zombie Roadkill: Juego de supervivencia zombie.
- Crossy Road: Cruza la carretera en este juego.
- Cut the Rope Free: Juego de puzles.
- SpacePeng!: Juego de aventuras en el espacio.
- Rule of Three: Juego de lógica.
- 8-Bit Wonders: Colección de juegos retro.
- Sudoku: Juego de rompecabezas numérico.
- GoldenEye: Juego de disparos en primera persona.
- Fruity Game: Juego de rompecabezas.
- tower: Juego de estrategia.
- All In Gold: Juego de puzzle de combinación.
- brain:code: Juego de programación.
- [Roblox](https://www.roblox.com/): Plataforma de juegos y creación.
- Progressbar95: Juego estilo retro.
- Chinese Checkers: Juego de damas chino.
- Frozen Bubble: Juego de puzles con burbujas.
- Frozen Bubble LevelEditor plus: Editor de niveles para Frozen Bubble.
- Taps Of Fire: Juego de ritmo musical.
- BombSquad: Juego de fiesta multijugador.
- BSRemote: Control remoto de BombSquad.
- Super Charadas: Juego de adivinanzas.
- iPuke: Simulador de vómito.
- Poleidoscope: Caleidoscopio interactivo.
- Apex Legends: Companion: Herramientas para el juego Apex Legends.
- TFT: Teamfight Tactics Companion.
- Battle.net: Aplicación de Blizzard Entertainment.
- [Steam](https://store.steampowered.com/): Plataforma de juegos de PC.
- GeForce NOW: Juega a juegos de PC en la nube.
- Parsec: Juegos en la nube.
- Roll20: Juegos de rol en línea.
- Character Sheet: Hoja de personaje para juegos de rol.
- Fifth Edition Character Sheet: Hoja de personaje D&D 5E.
- Reroll: Generador de personajes para juegos de rol.
- Dice: Lanza dados virtuales.

## Launchers

- Smart Launcher: Launcher personalizado.
- Home: Launcher de Android.
- Lens Launcher: Lanzador de aplicaciones.
- T-UI: Interfaz de usuario de terminal.
- Kvaesitso: *(en la lista original figura como "Juego de puzles"; en realidad es un launcher)*
- Nova7: *(figura como "Aplicación de utilidades"; probablemente Nova Launcher — dudoso)*

## Configuración

### Tasker
#### Profiles
- [x] Autorotate Apps: Automatically rotates the screen based on the device's orientation.
- [x] Autoinput (Moto edge): Rooted phones with custom button remapping: `Search Manual Codes: 84`
- [ ] Auto Silence(WIP): Automatically silences the phone when Calendar shows not available.
- [ ] Headphones connected: Automatically adjusts the volume based on the headphones connected.
- [ ] Daytime: Automatically adjusts the screen brightness based on the time of day.
- [ ] Nighttime: Automatically adjusts the screen brightness based on the time of day.
- [ ] Important call: Always full volume for incoming calls.

#### Tasks
- [ ] Hotspot
- [ ] Full Brightness
- [ ] Auto Brightness
- [ ] Launch:
	- [ ] Life360
- [ ] Volume Please
- [ ] Autorotate Apps

#### Variables
- %Awake
- %OpenedApp

#### Code
- `tasker [task_name]`

## Sin clasificar (Unordered)

> Déjame aquí lo que no pude clasificar con certeza. Muévelo tú a la categoría que corresponda.

- Artists: Aplicación para artistas.
- Google: Motor de búsqueda y aplicaciones de Google. *(entrada paraguas — duplica al resto de apps de Google)*
- Dogo: Aplicación para dueños de mascotas.
- Lunescope: Calendario lunar.
- Easter Eggs: Descubre los huevos de Pascua en Android.
- Digital LED Signboard: Letrero digital.
- Rarevision: Edición de video.
- SDAI: Aplicación de inteligencia artificial.
- PUNTADA: Aplicación de costura.
- ParticleSim: Simulador de partículas.
- LEGO® Builder: Construye con bloques virtuales.
- Trycorder: Emulador de Tricorder.
- Fluffyboard: Tablón de anuncios en línea.
- Assistant: Asistente virtual de Google.
- Lens: Búsqueda visual de Google.
- Camera: La cámara app incluída en tu celular.
- Configuraciones: Lista de aplicaciones de configuración. *(parece artefacto de exportación, no una app)*
- Exported by AppBak at Feb 1: Aplicaciones exportadas por AppBak el 1 de febrero. *(no es una app)*
