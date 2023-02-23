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

- This project is still under development, there are lot of ideas and featuers to be added, for ideas take a look at [ideas.md](./IDEAS.md), roadmap will be added soon.
- This Project has auto commit message formatting on commit using [Husky](https://typicode.github.io/husky/#/) and [Commitlint](https://commitlint.js.org/#/), so make sure you follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format when commiting your changes.

## License

Release under the terms of [MIT](./LICENSE)

## Database Schema

- ER Diagram

![ER Diagram](https://i.ibb.co/HP0f7sg/image-3.png)<br/>

- Relational Schema

![Relational Schema](https://i.ibb.co/bdpQkPT/image-4.png)

- Tables
  - user
  - society
  - member_of
  - event
  - handled
  - transaction
  - signed_off
  - buffer_store
  - assets
  - documents

## References

1. Transaction Types

```
export enum transactionType {
'DEBIT' = 'DEBIT',
'CREDIT' = 'CREDIT',
'OPENING_BALANCE' = 'OPENING_BALANCE',
'CLOSING_BALANCE' = 'CLOSING_BALANCE',
'DEFAULT' = 'DEFAULT',
}
```

- DEBIT: A debit transaction records an increase in assets or a decrease in liabilities or equity.
- CREDIT: A credit transaction records a decrease in assets or an increase in liabilities or equity.
- OPENING_BALANCE: An opening balance transaction records the starting balance of an account or period.
- CLOSING_BALANCE: A closing balance transaction records the ending balance of an account or period.
- DEFAULT: A default transaction is a catch-all category for transactions that do not fit into any of the other types.

2. Transaction Status

```
export enum transactionStatus {
'PENDING' = 'PENDING',
'APPROVED' = 'APPORVED',
'REJECTED' = 'REJECTED',
'DEFAULT' = 'DEFAULT',
}
```

- PENDING: A pending transaction is a transaction that is yet to be approved or rejected.
- APPROVED: An approved transaction is a transaction that has been approved by the the highest stakeholder.
- REJECTED: A rejected transaction is a transaction that has been rejected by the any one of the stakeholder.
- DEFAULT: A default transaction is the initial status when it has not uploaded completly.

3. Member Positions

```
export enum memberPosition {
'CHAIR' = 'CHAIR',
'TREASURER' = 'TREASURER',
'VICE_CHAIR' = 'VICE_CHAIR',
'SECRETARY' = 'SECRETARY',
'BRANCH_COUNSELLOR' = 'BRANCH_COUNSELLOR',
'SOCIETY_COUNSELLOR' = 'SOCIETY_COUNSELLOR',
'SOCIETY_CHAIR' = 'SOCIETY_CHAIR',
'SOCIETY_VICE_CHAIR' = 'SOCIETY_VICE_CHAIR',
'SOCIETY_SECRETARY' = 'SOCIETY_SECRETARY',
'SOCIETY_TREASURER' = 'SOCIETY_TREASURER',
'MEMBER' = 'MEMBER',
}
```

- CHAIR: A chair is the highest student position in the branch.
- VICE_CHAIR: A vice chair is the second highest student position in the branch.
- TREASURER: A treasurer handles every financial transactions, manages report for the whole branch.
- SECRETARY: A secretary is part of main execom.
- BRANCH_COUNSELLOR: A branch counsellor is a faculty member who is incharge of the branch.
- SOCIETY_COUNSELLOR: A society counsellor is a faculty member who is incharge of the society.
- SOCIETY_CHAIR: A society chair is the highest student position in the society.
- SOCIETY_VICE_CHAIR: A society vice chair is the second highest student position in the society.
- SOCIETY_SECRETARY: A society secretary is part of main execom.
- SOCIETY_TREASURER: A society treasurer handles every financial transactions, manages report only for respective society.
