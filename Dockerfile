FROM node:10.15.3-jessie

ENV DEBIAN_FRONTEND noninteractive

COPY package.json  /opt/core-ui-tools/package.json
COPY src           /opt/core-ui-tools/src
COPY test          /opt/core-ui-tools/test
COPY .mocharc.json /opt/core-ui-tools
COPY .env          /opt/core-ui-tools

WORKDIR /opt/core-ui-tools

RUN npm install --production

RUN ln -snf /usr/share/zoneinfo/Europe/Madrid /etc/localtime && echo "Europe/Madrid" > /etc/timezone

CMD [ "npm", "start" ]
