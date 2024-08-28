FROM node:latest AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#stage 2

FROM httpd:alpine3.15

WORKDIR /usr/local/apache2/htdocs
COPY --from=node /app/dist/angular-project .