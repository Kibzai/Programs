---
title: Readme
permalink: /README
layout: default
---
# 🌎 [Protocols, Programs & Tools](https://kibzai.github.io/Programs/)
> Crear: Hacer una versión de lo que amas.

## Usage
``` bash
# This is a protocol. It should run on any device. Perfect for the internet.
sh serve.sh
```

---

## Setup
``` bash
# chmod +x script.sh
sh setup.sh
```
### Uninstall
``` bash
# chmod +x script.sh
sh uninstall.sh
```

## Github Links
- [Protocols, Programs & Tools](https://github.com/Kibzai/Programs/): Github Page.
- [Readme.md](https://github.com/Kibzai/Programs/blob/main/README.md): Programs Readme.
- [Kibza.md](https://github.com/Kibzai/Programs/blob/main/KIBZA.md): Kibza Lab.
- [Kibsaim.md](https://github.com/Kibzai/Programs/blob/main/KIBSAIM.md): Devices Setup.
- [Phone.md](https://github.com/Kibzai/Programs/blob/main/PHONE.md): Phone Apps.
- [Mafia.md](https://github.com/Kibzai/Programs/blob/main/MAFIA.md): Fun.
- [Help.md](https://github.com/Kibzai/Programs/blob/main/HELP.md): ¡Ayuda!

---

## Install
Prerequisites: 
  - [Git](https://git-scm.com/): Version control system.
  - [Ruby](https://www.ruby-lang.org/): Programming language.
  - [Bundler](https://bundler.io/): Ruby gem manager.

Install from scratch:
``` bash
# Global Login
git config --global user.email "you@example.com" 
# Clone the repository
git clone https://github.com/Kibzai/Programs.git
cd Programs
# Dependencies
gem install bundler
# Update RubyGems
gem update --system 4.0.16
# Install gems
bundle install
# Remove cache & Serve
rm -rf .jekyll-cache _site
bundle exec jekyll serve
```

### Ruby Troubleshooting
``` bash
gem update --system 4.0.16
# Find Ruby
ls -la /c/Ruby*/bin/ruby.exe
# PATH
echo 'export PATH="/c/Ruby33-x64/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
# Other rubys
export PATH="/c/Ruby40-x64/bin:$PATH"
# Verify
ruby -v
which ruby
# Install bundler and run
gem install bundler
bundle install
```
# Github Implementation
## Programs: Collapsable Div!

<details>
<summary>Title</summary>
<div markdown="1">

# List 
- [x] Done

</div>
</details>
Warning: It needs the spacing!
```markdown
# Spacing between lines
<details>
<summary>Title</summary>
<div markdown="1">

# List
- [x] Done

</div>
</details>
# Respect Spacing
```

## Links
- [¡Ayuda!](HELP): Link interno.
- [¡Ayuda! - Link de Github](https://github.com/Kibzai/Programs/HELP): Github Readme Page.
- [HELP.md](https://github.com/Kibzai/Programs/blob/main/HELP.md): Github Code Page.

``` markdown
[¡Ayuda!](HELP): Link interno.
[¡Ayuda!- Link de Github](https://github.com/Kibzai/Programs/HELP): Github Page.
[HELP.md](https://github.com/Kibzai/Programs/blob/main/HELP.md): Github Code.
```

---

Made with Love❤️, Music🎶 & Curiosity🌠.
