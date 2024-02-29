import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppRepository } from './app.repo';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
