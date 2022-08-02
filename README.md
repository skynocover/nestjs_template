## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## generate

module and service

```bash
nest g mo prisma src/prisma 
nest g s prisma
nest g mi log middlewares #定義產生位置
nest g gu guards/auth
```

CRUD resource

```
npx nest g resource

? What name would you like to use for this resource (plural, e.g., "users")? articles
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? Yes
```
