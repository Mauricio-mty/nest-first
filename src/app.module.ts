import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IdService } from './utils/id/id.service';
import { UtilsModule } from './utils/utils.module';
import { LoggerModule } from './logger/logger.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [UsersModule, UtilsModule, LoggerModule.register('Users APP'), DbModule],
  controllers: [AppController],
  providers: [AppService, IdService],
})
export class AppModule {}
