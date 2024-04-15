FROM node:lts-alpine

WORKDIR /server

COPY package.json .

RUN npm install

COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src

CMD [ "npm", "run", "dev" ]