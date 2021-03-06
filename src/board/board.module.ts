import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '../user/user.entity';
import { ListEntity } from '../list/list.entity';
import { ListService } from '../list/list.service';
import { BoardController } from './board.controller';
import { BoardEntity } from './board.entity';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';
import { AppGateway } from '../app.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity, UserEntity, ListEntity])],
  controllers: [BoardController],
  providers: [BoardService, BoardResolver, ListService, AppGateway],
})
export class BoardModule { }
