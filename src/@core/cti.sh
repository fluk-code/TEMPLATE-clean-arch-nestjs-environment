#!bin/sh

npm run cti create './src/@shared' -- -i '*spec.ts' -b &&

npm run cti create './src/product/application' -- -i '*spec.ts' -b && 

npm run cti create './src/customer/application' -- -i '*spec.ts' -b 