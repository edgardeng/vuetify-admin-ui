#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m ':markbook: deploy new version'
git config --local user.name 'edgardeng'
git remote add origin https://github.com/edgardeng/vuetify-admin-ui.git
echo 'add remote repos'
git push -f origin master:gh-pages

#git push -f git@github.com:edgardeng/view-echarts.git master:gh-pages
