FROM node:14

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --silent

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000
CMD [ "yarn", "start" ]