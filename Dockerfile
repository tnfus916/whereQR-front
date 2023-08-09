FROM node:alpine as builder

WORKDIR /builder

COPY package.json .

RUN npm install --legacy-peer-deps

RUN npm run dev

COPY ./build ./build

FROM nginx:latest as runner

WORKDIR /app

COPY --from=builder /builder/build ./build

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
