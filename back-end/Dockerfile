FROM node:16-alpine

WORKDIR /app-backend

COPY package* ./

COPY . .

RUN npm install --production

ARG NODE_ENV=development

CMD ["npm", "start"]