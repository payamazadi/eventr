FROM mhart/alpine-node:10
WORKDIR /graphql

ADD ./package.json yarn.* /tmp/
RUN cd /tmp && yarn install
RUN cd /graphql
RUN ln -s /tmp/node_modules
ADD . /graphql


#RUN apk add python3
#RUN apk add git
WORKDIR /graphql

ENV GOOGLE_APPLICATION_CREDENTIALS="weaver-demo-432554c246f9.json"
#RUN yarn install && yarn build
RUN yarn build
EXPOSE 4000
CMD yarn run start
