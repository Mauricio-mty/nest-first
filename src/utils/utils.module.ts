import { Module } from '@nestjs/common';
import { IdService } from './id/id.service';

@Module({
    providers:[IdService],
    exports:[IdService]  //exportacion del service qu ees un provider para el uuid

})
export class UtilsModule {}
