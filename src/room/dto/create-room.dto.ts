import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  name: string; 

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsOptional() 
  createdAt?: Date;

  @IsOptional() 
  updatedAt?: Date;
}
