FROM node:alpine as builder

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . ./build

RUN npm run build

FROM nginx:latest as runner

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]