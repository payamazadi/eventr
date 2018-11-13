FROM mhart/alpine-node:10
WORKDIR /weaver
COPY . .

RUN apk add python3
WORKDIR /weaver/packages/graphql
RUN yarn install && yarn build
EXPOSE 4000
CMD /bin/sh
