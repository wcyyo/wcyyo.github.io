

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
sudo cp -r dist/* /


git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f wcyyo@github.com:wcyyo/wcyyo.github.io.git master:gh-pages
