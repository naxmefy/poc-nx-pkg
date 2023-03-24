import { Module } from '@nestjs/common';
import { NestLibExampleModule } from 'nest-lib-example';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [NestLibExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
