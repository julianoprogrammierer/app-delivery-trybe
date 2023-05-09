FROM node:16-alpine

WORKDIR /app-frontend

COPY package* ./

RUN npm install

COPY . .

RUN npm run build

RUN npm ci --only=production

CMD ["npm", "start"]

