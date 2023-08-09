# Use a imagem base do Node.js LTS (Long Term Support)
FROM node:17-alpine

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Comando para iniciar o aplicativo React
CMD ["npm", "start"]
