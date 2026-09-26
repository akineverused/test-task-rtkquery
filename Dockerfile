FROM node:22-alpine
WORKDIR /app
ENV PORT=3000
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]