import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../exceptions/validation.exception";


@Injectable()
export class ValidationPipe implements  PipeTransform<any> {

  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
      console.log("errors");
        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj);

        if (errors.length) {
           console.log(errors)
          console.log(obj)
          console.log(value)
           let messages = errors.map(err => {
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`
            })
            throw new ValidationException(messages)
        }
        return value;
    }
}