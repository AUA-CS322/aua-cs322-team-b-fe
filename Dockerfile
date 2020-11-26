#FROM node:10 AS build

#WORKDIR /app

#COPY package.json package-lock.json ./

#RUN npm install

#COPY . .

#RUN npm run build

FROM nginx:1.19.5-alpine

#COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf

#COPY --from=build /app/build/ /var/www
COPY build /var/www

RUN chown -R nginx:nginx /var/www && chmod -R 755 /var/www
