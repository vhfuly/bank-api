import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankAccount } from './models/bank-account';
import { BanckAccountController } from './controllers/banck-account/banck-account.controller';
import { ConsoleModule } from 'nestjs-console';
import { FixturesCommand } from './fixtures/fixtures.command';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConsoleModule,
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [BankAccount]
    }),
    TypeOrmModule.forFeature([BankAccount])
  ],
  controllers: [AppController, BanckAccountController],
  providers: [AppService, FixturesCommand],
})
export class AppModule {}
