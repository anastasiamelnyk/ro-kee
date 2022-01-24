import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export default [
  {
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dropSchema: false,
    port: Number(process.env.DB_PORT),
    synchronize: process.env.DB_SYNC === 'true',
    migrations: [join(__dirname, '..', 'database/migrations/*.{ts,js}')],
    cli: {
      migrationsDir: join(__dirname, '..', 'database/migrations'),
    },
    entities: [join(__dirname, '..', 'database/entities/*.{ts,js}')],
  } as TypeOrmModuleOptions,
];
