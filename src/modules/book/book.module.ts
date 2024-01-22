import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookCrontroller } from './book.controller';
import { PrismaService } from 'src/database/prismaService';

@Module({
  controllers: [BookCrontroller],
  providers: [BookService, PrismaService],
})
export class ModulesModule {}
