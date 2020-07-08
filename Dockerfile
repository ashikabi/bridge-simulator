FROM node:12

WORKDIR /home/nodejs/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8082

CMD ["node", "index.js"]