#!/usr/bin/env bash
set -e # fail on error
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/../public"
cd "${DIR}"

bundle exec jekyll build
bundle exec htmlproofer --href-ignore "#" ./_site
