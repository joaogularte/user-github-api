FROM node:10.15

ENV HOME=/home/app

RUN useradd --user-group --create-home --shell /bin/false app

COPY package.json package-lock.json $HOME/user-github-api/
 
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/user-github-api

RUN  npm i --silent --progress=false

USER root
COPY . $HOME/user-github-api/
RUN chown -R app:app $HOME/*

USER app

CMD [ "npm", "start" ]