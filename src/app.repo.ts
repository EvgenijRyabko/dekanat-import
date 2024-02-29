import { Inject, Injectable } from '@nestjs/common';
import { StudentType } from '@type/student.entity';
import { Knex } from 'knex';

import { KNEX_CONNECTION } from './database/knexConnection';

@Injectable()
export class AppRepository {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async getStudentById(id: number): Promise<StudentType> {
    return await this.knex('students').select('*').where({ id }).first();
  }
}
