#! /bin/bash
yarn build
scp -rf build/* root@148.70.218.192:/var/www/static/db