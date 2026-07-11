#!/bin/bash
# Protocolos: Setup & Checks
start https://kibzai.github.io/Programs/


# Install dependencies
gem install bundler
bundle install

# Build and serve
bundle exec jekyll serve
