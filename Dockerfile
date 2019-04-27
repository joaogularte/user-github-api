FROM node:10.15-alpine

ENV HOME=/home/app

RUN useradd --user-group --create-home --shell /bin/false app && \
    npm install --global npm@6.9.0

COPY package.json package-lock.json $HOME/user-github-api
 
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/user-github-api

RUN npm cache clean && npm i --silent --progress=false

USER root
COPY . $HOME/user-