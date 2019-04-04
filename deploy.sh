set -e
npm run build
sudo cp -r dist/* /
git init
git add -A
git commit -m 'deploy'
git push origin master --force