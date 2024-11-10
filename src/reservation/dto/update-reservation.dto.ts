import { IsString, IsOptional, IsDate, IsInt, Min, IsDateString } from 'class-validator';

export class UpdateReservationDto {
  @IsString()
  @IsOptional()
  userEmail?: string;

  @IsInt()
  @Min(1)
  roomId: number;

  @IsDateString()
  reservationDate: string;

  @IsDate()
  @IsOptional()
  startDate?: Date;

  @IsDate()
  @IsOptional()
  endDate?: Date;
}
