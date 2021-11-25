import { ConnectionOptions } from "typeorm";

export default {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: 'db_smart_software',
    entities: [
        'src/**/**.entity{.ts,.js}',
    ],
    migrations: [
        'src/database/migrations/*.ts',
    ],
    cli: {
        migrationsDir: 'src/database/migrations',
    },
    synchronize: false
} as ConnectionOptions;