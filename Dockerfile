FROM node:latest

COPY . /var/www

WORKDIR /var/www

RUN cd /var/www \
    && npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@beta \
    && npm install \
    && npm run prebuild:prod && npm run build:prod

EXPOSE 31600

ENTRYPOINT ["npm", "run", "server:prod"]
