import { Injectable } from '@nestjs/common';

import { AppRepository } from './app.repo';

@Injectable()
export class AppService {
  constructor(private readonly appRepo: AppRepository) {}

  async getStudentById(id: number) {
    const student = await this.appRepo.getStudentById(id);

    return student;
  }
}
