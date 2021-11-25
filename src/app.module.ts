import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { SalesGroupsModule } from './sales-groups/sales-groups.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['**/*.entity{.ts,.js}'],
      migrationsTableName: 'migrations',
      migrations: ['src/database/migrations/*.ts'],
      cli: {
        migrationsDir: 'src/database/migrations',
      },
      synchronize: true,
    }),
    AuthModule, UsersModule, CompaniesModule, FacilitiesModule, SalesGroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
