#!/bin/bash
gem install bundler
bundle install
rm -rf .jekyll-cache _site
bundle exec jekyll serve &
until curl --output /dev/null --silent --head --fail http://localhost:4000; do
    printf "."
    sleep 2
done
echo " ✅ Servidor listo"
case "$(uname -s)" in
    MINGW*|CYGWIN*|MSYS*) start http://localhost:4000 ;;
    Linux*) if command -v termux-open &> /dev/null; then termux-open http://localhost:4000; else xdg-open http://localhost:4000; fi ;;
    Darwin*) open http://localhost:4000 ;;
    *) echo "Abre manualmente: http://localhost:4000" ;;
esac
wait
