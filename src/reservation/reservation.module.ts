import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';

@Module({
  providers: [ReservationService],
  controllers: [ReservationController]
})
export class ReservationModule {}
