import { Module } from '@nestjs/common';

import { knexConnection } from './knexConnection';

@Module({
  providers: [knexConnection],
  exports: [knexConnection],
})
export class DatabaseModule {}
