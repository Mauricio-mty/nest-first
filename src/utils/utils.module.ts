import { Module } from '@nestjs/common';
import { IdService } from './id/id.service';

@Module({
    providers:[IdService],
    exports:[IdService]

})
export class UtilsModule {}
