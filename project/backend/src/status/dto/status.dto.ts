import {IsNumber, IsString} from "class-validator";

export class GetStatusDtoById {
    readonly id: string;
}

export class GetStatusDtoByName {
  readonly statusName: string;
}

export class changeStatusDto {
  @IsString({message: "Должно быть строкой"})
  readonly statusName: string;
  @IsNumber({}, {message: "Должно быть числом"})
  readonly userId: number;
}
