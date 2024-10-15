#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

touch .nojekyll

git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:shahinabdi/shahinabdi.github.io.git main:gh-pages

cd -