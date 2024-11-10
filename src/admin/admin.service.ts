import { Admin } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async createAdmin(data: CreateAdminDto): Promise<Admin> {
    return this.prisma.admin.create({ data });
  }

  async getAdmins(): Promise<Admin[]> {
    return this.prisma.admin.findMany();
  }

  async getAdminById(id: number): Promise<Admin | null> {
    return this.prisma.admin.findUnique({
      where: { id },
    });
  }

  async updateAdmin(id: number, data: UpdateAdminDto): Promise<Admin> {
    return this.prisma.admin.update({
      where: { id },
      data,
    });
  }

  async deleteAdmin(id: number): Promise<Admin> {
    return this.prisma.admin.delete({
      where: { id },
    });
  }
}
