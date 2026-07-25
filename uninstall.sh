#!/bin/bash
rm -rf .jekyll-cache _site Gemfile.lock
gem uninstall -x bundler
gem uninstall -x jekyll
echo "✅ Limpieza completada."
