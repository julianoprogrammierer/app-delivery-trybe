FROM node:16-alpine

WORKDIR /app-frontend

COPY package* ./

COPY . .

RUN npm install --production

# RUN npm run build

CMD ["npm", "start"]