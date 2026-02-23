import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { IdService } from './utils/id/id.service';
import { UtilsModule } from './utils/utils.module';
import { LoggerModule } from './logger/logger.module';
import { DbModule } from './db/db.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [UsersModule, UtilsModule, LoggerModule.register('Users APP'), DbModule, MovieModule],
  controllers: [],
  providers: [IdService],
})
export class AppModule {}
