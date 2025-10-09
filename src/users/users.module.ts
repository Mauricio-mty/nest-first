import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UtilsModule } from '../utils/utils.module';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports:[UtilsModule,LoggerModule.register('Users')], //importascion del modulo de utils donde esta el provider del uuid
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
