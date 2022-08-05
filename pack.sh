#! /bin/bash
yarn build
scp -r build/* root@148.70.218.192:/var/www/static/db