#!/bin/sh
export GOOGLE_APPLICATION_CREDENTIALS="/weaver/weaver-demo-432554c246f9.json"
cd /weaver/packages/graphql
yarn build && yarn run start
