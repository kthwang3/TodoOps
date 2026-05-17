FROM node:24-alpine
WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN chmod -R 755 /app/node_modules/.bin
CMD ["node", "index.js"]
