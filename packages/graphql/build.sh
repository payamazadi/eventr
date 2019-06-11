#!/bin/sh
docker kill $(docker ps -q --filter ancestor=weaver)

docker build -t weaver .

#detached
#docker run -d -p 4000:4000 weaver

#pop in shell
docker run -it -p 4000:4000 weaver /bin/sh
