import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { RoomModule } from './room/room.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [PrismaModule, PrismaModule, AdminModule, RoomModule, ReservationModule],
  controllers: [AppController],
  
  providers: [AppService],
})
export class AppModule {}
