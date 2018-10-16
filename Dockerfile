FROM mhart/alpine-node:latest
WORKDIR /weaver
COPY . .
RUN tar -zxvf graphql.tar.gz

#Build and start graphQL
RUN yarn install && yarn build
EXPOSE 4000
CMD /bin/sh
