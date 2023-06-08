#!/bin/bash

echo "###### Instaling dependencies ######"
npm i

echo "###### Instaling Husky ######"
npx husky install

echo "###### Building @core ######"
npm run -w @project-name/core build


tail -f /dev/null
#npm run start:dev