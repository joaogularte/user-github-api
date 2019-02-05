# user-github-api

User GitHub Api created to Shaw and Partners admission test.

GET -> /api/users?since={number}
GET -> /api/users/:username/details
GET -> /api/users/:username/repos

### Stack

| Responsability  | What |
|---|---|
| Process Managament  | PM2  |
| Code Standard  | ESLint  |    
| HTTP Headers  | Helmet |
| Test Runner | Mocha |
| CORS  | CORS |   
| Body Parsing  | Body Parser |   
| Versioning  | Git |
| Schema Validation | Joi |
| Gzip compression | Compression | 


### Installing and running the app with PM2

```sh
$ cp .env.sample .env
$ npm install
$ npm install -g pm2
$ npm start
```

### Running in dev with nodemon

```sh
$ cp .env.sample .env
$ npm install
$ npm install -g nodemon
$ npm run dev
```

### Running tests
```sh
$ npm run test-integration

$ npm run test-unit 
```

### Running lint

```sh
$ npm run lint
```