import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import appConfig from './common/config/app.config';
import databaseConfig from './common/config/database.config';
import jwtConfig from './common/config/jwt.config';
import { validate } from './common/validation/env.validation';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import redisConfig from './common/config/redis.config';
import { RedisModule } from './redis/redis.module';
import { SocietyModule } from './society/society.module';
import { EventsModule } from './events/events.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BufferModule } from './buffer/buffer.module';
import swaggerConfig from './common/config/swagger.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, jwtConfig, databaseConfig, redisConfig, swaggerConfig],
      validate,
    }),
    DatabaseModule,
    RedisModule,
    AuthModule,
    UsersModule,
    SocietyModule,
    EventsModule,
    TransactionsModule,
    BufferModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
