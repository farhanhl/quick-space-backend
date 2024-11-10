import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Room } from '@prisma/client';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async createRoom(data: CreateRoomDto): Promise<Room> {
    return this.prisma.room.create({ data });
  }

  async getRooms(): Promise<Room[]> {
    return this.prisma.room.findMany();
  }

  async getRoomById(id: number): Promise<Room | null> {
    return this.prisma.room.findUnique({
      where: { id },
    });
  }

  async updateRoom(id: number, data: UpdateRoomDto): Promise<Room> {
    return this.prisma.room.update({
      where: { id },
      data,
    });
  }

  async deleteRoom(id: number): Promise<Room> {
    return this.prisma.room.delete({
      where: { id },
    });
  }
}
