FROM node:12 AS angularBuilder

WORKDIR /node

COPY . .

RUN npm install
RUN npx ng build --configuration production

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=angularBuilder /node/dist/2022_angular_chuck_noris_test_project .
COPY ./nginx_templates /etc/nginx/templates
