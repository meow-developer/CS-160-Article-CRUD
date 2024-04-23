FROM node:20.11.1-slim
RUN apt-get update -y && apt-get install -y openssl


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 8080

CMD ["npx", "prisma", "db", "pull"]

CMD ["npx", "prisma", "generate"]


CMD ["npm", "start"]