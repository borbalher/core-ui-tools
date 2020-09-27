#!/bin/bash
echo 'Removing previous build'
find src/node/api/www/assets/js -type d -name 'bundle' -exec rm -rv {} +
# find src/node/api/www/assets -type d -name 'css' -exec rm -rv {} +
rm -rf dist

echo 'Creating distributable folder...'
mkdir -p dist

echo '----Copying webpack entries...'
mkdir -p dist/entry
rsync -a webpack/ dist/entry

echo '----Copying src...'
if [[ -d src/common ]]
then
    mkdir -p dist/src/common
    rsync -a src/common/ dist/src/common
fi

if [[ -d src/browser ]]
then
    mkdir -p dist/src/browser
    rsync -a src/browser/ dist/src/browser
fi

echo '----Removing test files...'
find dist -type f -name '*.test.js' -delete
echo '----Removing test folders...'
find dist -type d -name 'test' -exec rm -rv {} +

echo '----Removing scss...'
find dist -type f -name '*.scss'  -delete
echo '----Removing partials...'
find dist -type f -name '*.handlebars'  -delete