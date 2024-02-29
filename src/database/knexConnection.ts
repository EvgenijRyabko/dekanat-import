import 'dotenv/config';

import knex from 'knex';

export const KNEX_CONNECTION = 'KNEX_CONNECTION';

export const knexConnection = {
  provide: KNEX_CONNECTION,
  useFactory: () =>
    knex({
      client: 'pg',
      useNullAsDefault: true,
      connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: 5432,
        charset: 'utf8',
        timezone: 'Europe/Moscow',
      },
      searchPath: ['education'],
      pool: { min: 0, max: 50 },
      acquireConnectionTimeout: 10000,
    }),
};
