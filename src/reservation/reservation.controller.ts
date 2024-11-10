import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from '@prisma/client';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  async createReservation(
    @Body() data: { userEmail: string; roomId: number; startDate: Date; endDate: Date }
  ): Promise<Reservation> {
    return this.reservationService.createReservation(data);
  }

  @Get()
  async getReservations(): Promise<Reservation[]> {
    return this.reservationService.getReservations();
  }

  @Get(':id')
  async getReservationById(@Param('id') id: string): Promise<Reservation | null> {
    return this.reservationService.getReservationById(Number(id));
  }

  @Put(':id')
  async updateReservation(
    @Param('id') id: string,
    @Body() data: Partial<Reservation>
  ): Promise<Reservation> {
    return this.reservationService.updateReservation(Number(id), data);
  }

  @Delete(':id')
  async deleteReservation(@Param('id') id: string): Promise<Reservation> {
    return this.reservationService.deleteReservation(Number(id));
  }
}
