import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '10.0.2.134',
    port: 3306,
    username: 'ramasaireddys',
    password: 'Ramasaireddy@SQL_DB',
    database: 'users',
    autoLoadEntities: true,
    synchronize: true,
                   
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
