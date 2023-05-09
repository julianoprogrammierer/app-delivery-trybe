FROM node:16-alpine

WORKDIR /app-frontend

COPY package*.json ./

# Instalar todas as dependências, incluindo as de desenvolvimento
RUN npm install

COPY . .

# Executar o build do projeto
RUN npm run build

# Remover dependências de desenvolvimento após o build
RUN npm prune --production

CMD ["npm", "start"]

