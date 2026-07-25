#!/bin/bash
git clone https://github.com/Kibzai/Programs.git
cd Programs
gem install bundler
bundle install
echo "✅ Listo. Ejecuta ./serve.sh para iniciar."
