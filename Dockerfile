FROM node:13.11.0
WORKDIR "/usr/src/app"
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "todo.js --help"]