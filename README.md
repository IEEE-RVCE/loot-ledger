# Loot Ledger

> where every financial transaction is accounted for!

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- npm/yarn (preferably yarn)
- Working Knowledge of [NestJs](https://docs.nestjs.com) and [Node.js](https://nodejs.org/en/docs/)
- Working Knowledge of [MySql](https://dev.mysql.com/doc/)
- Working Knowledge of [TypeORM](https://typeorm.io/#/)

## API Documentation is available on [Postman](https://documenter.getpostman.com/view/15779817/2s93CHuF8b)

## Setup

### 1. Install the required dependencies

```bash
$ yarn add
```

### 2. Rename the .env.example filename to .env and set your local variables

```bash
$ mv .env.example .env
```

### 3. Start the application

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Docker for development

```bash
# start the application
$ yarn docker:up

# stop the application
$ yarn docker:down
```

## Test

```bash
# unit tests
$ yarn test:watch
```

## Swagger documentation

- [localhost:3000/docs](http://localhost:3000/docs)

## Overall Architecture

[![](https://mermaid.ink/img/pako:eNqFVMtugzAQ_BXkc_IDHCqlJYdK6aEhvXFxYWmQwLb8iIqi_HtNMMFrO-oNz6w8s95ZrqTmDZCc_EgqztmpqFiW7YTYbl92Rp_fONOS9z3IFf9SIFN4yesO9JiiTpIyRWvdcZai9xdgOkW8mrbFYncOGXNOS5CXroaFd0dHHkFw1Wkux4VfEVvyMZafh_lu3Jzr1rvbOzoS340RfHf0QOujeQoYWUuwTgRiqeSD40F4kjGKS7F0ksDywUCXEXuS_nmhsUwAYYEwGI-seBIIeBRgkRDDKsp8z2tRkQMdQaqKTPA9ne4j2pEwQjOW3I0nY5qpxE7EbU8osCZy-840SEb7rABheWBWfTWPtwVlGrlFWDo5eJC-SQ9KOdz__uMQzylcLOQzhJ8mNwqVbzhEXQ6cfbIhA8iBdo39V14nuCL6DANUJLefDbTU9Hpq4GZLqdG8HFlNci0NbIgRDdVQdNS2P5C8pb2C2x-pavjI?type=png)](https://mermaid.live/edit#pako:eNqFVMtugzAQ_BXkc_IDHCqlJYdK6aEhvXFxYWmQwLb8iIqi_HtNMMFrO-oNz6w8s95ZrqTmDZCc_EgqztmpqFiW7YTYbl92Rp_fONOS9z3IFf9SIFN4yesO9JiiTpIyRWvdcZai9xdgOkW8mrbFYncOGXNOS5CXroaFd0dHHkFw1Wkux4VfEVvyMZafh_lu3Jzr1rvbOzoS340RfHf0QOujeQoYWUuwTgRiqeSD40F4kjGKS7F0ksDywUCXEXuS_nmhsUwAYYEwGI-seBIIeBRgkRDDKsp8z2tRkQMdQaqKTPA9ne4j2pEwQjOW3I0nY5qpxE7EbU8osCZy-840SEb7rABheWBWfTWPtwVlGrlFWDo5eJC-SQ9KOdz__uMQzylcLOQzhJ8mNwqVbzhEXQ6cfbIhA8iBdo39V14nuCL6DANUJLefDbTU9Hpq4GZLqdG8HFlNci0NbIgRDdVQdNS2P5C8pb2C2x-pavjI)

## Hireachy

![README drawio](https://user-images.githubusercontent.com/71436720/152999124-11b02319-4529-4d5b-a248-02e5ff1a4124.png)

## Note

- This project is still under development
- This Project has auto commit message formatting on commit using [Husky](https://typicode.github.io/husky/#/) and [Commitlint](https://commitlint.js.org/#/), so make sure you follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format when commiting your changes.

## License

Release under the terms of [MIT](./LICENSE)
