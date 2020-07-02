#!/bin/sh

page=$1

if [ "$page" != "" ]; then
    npx hexo new "$page"
else
    echo "please file name"
fi

