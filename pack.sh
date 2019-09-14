#! /bin/bash
yarn build
mv build db
zip -r zip.zip db
scp -r zip.zip root@148.70.218.192:/var/www/static/

mv db build
rm -rf zip.zip