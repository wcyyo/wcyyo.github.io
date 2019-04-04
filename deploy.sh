set -e
npm run build
sudo cp -r dist/* /
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:wcyyo/wcyyo.github.io.git master:gh-pages
