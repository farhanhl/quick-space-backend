import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Reservation } from '@prisma/client';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {}

  async createReservation(data: { userEmail: string; roomId: number; startDate: Date; endDate: Date }): Promise<Reservation> {
    const now = new Date();
    const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);

    if (new Date(data.startDate) < oneHourFromNow) {
      throw new BadRequestException('Reservation must be made at least 1 hour in advance.');
    }

    const conflictingReservation = await this.prisma.reservation.findFirst({
      where: {
        roomId: data.roomId,
        OR: [
          {
            startDate: { lte: data.endDate },
            endDate: { gte: data.startDate },
          },
        ],
      },
    });

    if (conflictingReservation) {
      throw new BadRequestException('The room is already reserved for the selected time.');
    }

    return this.prisma.reservation.create({
      data,
    });
  }

  async getReservations(): Promise<Reservation[]> {
    return this.prisma.reservation.findMany();
  }

  async getReservationById(id: number): Promise<Reservation | null> {
    return this.prisma.reservation.findUnique({
      where: { id },
    });
  }

  async updateReservation(id: number, data: Partial<Reservation>): Promise<Reservation> {
    return this.prisma.reservation.update({
      where: { id },
      data,
    });
  }

  async deleteReservation(id: number): Promise<Reservation> {
    return this.prisma.reservation.delete({
      where: { id },
    });
  }
}
