FROM node:16-alpine

WORKDIR /app-frontend

COPY package* ./

COPY . .

RUN npm install

RUN npm run build

RUN npm install --production

CMD ["npm", "start"]
