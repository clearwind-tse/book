#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
echo 'b.xugaoyi.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=https://github.com/xiehanfeng/book.git
else
  msg='来自github actions的自动部署'
  githubUrl= https://xiehanfeng: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@github.com/xiehanfeng/book.git
  git config --global user.name "xiehanfeng"
  git config --global user.email "710723333@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f https://xiehanfeng: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@github.com/xiehanfeng/book.git master:master # 推送到github gh-pages分支


# deploy to coding pages
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:xgy/xgy.git
# else
#   codingUrl=https://xiehanfeng:309fd3e1b45712eda5acf32ed6e12ee6@gitee.com/xiehanfeng/blog.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f https://xiehanfeng:309fd3e1b45712eda5acf32ed6e12ee6@gitee.com/xiehanfeng/blog.git master # 推送到coding

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
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
309fd3e1b45712eda5acf32ed6e12ee6

 https://xiehanfeng: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@github.com/xiehanfeng/book.git

cd -
rm -rf docs/.vuepress/dist
