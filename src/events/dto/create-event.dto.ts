import { IsDataURI, IsDate, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsDate()
  conductedDate: Date;

  @IsNotEmpty()
  societies: string[];
}
