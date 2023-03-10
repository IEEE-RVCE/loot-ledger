## Folder Structure

```
src
├── auth
│   ├── controllers
│   ├── dto
│   ├── guards
│   ├── roles
│   └── services
├── buffer
│   ├── controllers
│   ├── dto
│   ├── entities
│   └── services
├── common
│   ├── config
│   ├── constants
│   ├── decorators
│   ├── enums
│   ├── interceptors
│   ├── interfaces
│   ├── types
│   └── validation
├── database
├── events
│   ├── controllers
│   ├── dto
│   ├── entities
│   └── services
├── redis
├── society
│   ├── controllers
│   ├── dto
│   ├── entities
│   └── services
├── transactions
│   ├── controllers
│   ├── dto
│   ├── entities
│   └── services
└── users
    ├── controllers
    ├── dtos
    ├── entities
    └── services

42 directories
```

<!-- we are in folder strcurture.md -->

Each folder is a module, each module serves specific purpose, down below is a brief description of each module. Each module has primarily 4 folders:

- controllers
- services
- entities
- dto

**Controller Folder:** This folder contains all the controllers for the specific module, each controller is responsible for a specific route, for example, the `auth.controller.ts` is responsible for the `/auth` route, and the `society.controller.ts` is responsible for the `/society` route.

Services folder: This folder contains all the services for the specific module, each service is responsible for a specific task, for example, the `auth.service.ts` is responsible for the calling database and verifying the passoword of users, and the `society.service.ts` is responsible for the creation of societies. [Just like in the controllers folder, each service is responsible for a specific task]

Entities folder: This folder contains all the entities for the specific module, each entity is responsible for a specific table in the database, for example, the `user.entity.ts` is responsible for the `users` table in the database, and the `society.entity.ts` is responsible for the `societies` table in the database.

DTO [Data Transfer Object] folder: This folder contains all the DTOs for the specific module, each DTO is responsible for a specific data transfer, for example, the `sign-in.dto.ts` is responsible for the data transfer of the `/auth/login` route, which will automatically handle validation pipe and transform the data to the correct type. For more information on validation pipe, take a look at [Validation Pipe](https://docs.nestjs.com/techniques/validation#)

### Auth

This module is responsible for authentication and authorization of users, it contains the following folders:

```bash
src/auth
├── controllers
├── dto
├── guards
├── roles
└── services
```

### Buffer

This module is responsible for the blob storage of the application, it contains the following folders:

```bash
src/buffer
├── controllers
├── dto
├── entities
└── services

4 directories
```

### Common

This is only the exception to the rule, think this folder as utilities, it has some of the common files which are used in multiple modules such as constants, decorators, enums, interceptors, interfaces, types and validation.

```bash
src/common
├── config
├── constants
├── decorators
├── enums
├── interceptors
├── interfaces
├── types
└── validation

8 directories
```

### Database

This folder exposes the database connection and some configuration for the database and exposes database connection as database provider, this folder is only used in the `app.module.ts` file.

### Events

This module is responsible for the CRUD of events , (standard CRUD operations) has similar folder structure.

### Redis

This folder exposes the redis connection and some configuration for the redis and exposes redis connection as redis provider, this folder is only used in the `app.module.ts` file.

### Society

This module is responsible for the CRUD of societies , (standard CRUD operations) has similar folder structure.

### Transactions

This module is responsible for the CRUD of transactions , (standard CRUD operations) has similar folder structure.

### Users

This module is responsible for the CRUD of users , (standard CRUD operations) has similar folder structure.
