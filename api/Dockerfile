FROM node:10

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4001

CMD [ "yarn", "start" ]