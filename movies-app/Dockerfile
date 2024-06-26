FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
COPY index.js ./

RUN npm install
EXPOSE 8001
CMD ["node", "index.js"]
