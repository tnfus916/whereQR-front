FROM node:alpine as builder

WORKDIR /builder

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

COPY ./build ./build

FROM nginx:latest as runner

WORKDIR /app

COPY --from=builder /builder/build ./build

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

