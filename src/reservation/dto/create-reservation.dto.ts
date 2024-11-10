import { IsString, IsNotEmpty, IsDate, IsInt, Min, IsDateString } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  userEmail: string;

  @IsInt()
  @Min(1)
  roomId: number;

  @IsDateString()
  reservationDate: string;

  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsDate()
  @IsNotEmpty()
  endDate: Date;
}
