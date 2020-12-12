FROM node:14

WORKDIR /usr/src/app
# Install app dependencies
COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD "yarn" "start"