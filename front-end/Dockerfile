FROM node:16-alpine

WORKDIR /app-frontend

COPY package* ./

COPY . .

RUN npm run build && npm install --production


# CMD ["npm", "start"]