FROM node:20 AS build

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /src/build /usr/share/nginx/html