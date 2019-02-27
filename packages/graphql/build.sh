#!/bin/sh
docker stop $(docker ps -q --filter ancestor=weaver)

docker build -t weaver .

docker run -d -p 4000:4000 weaver
