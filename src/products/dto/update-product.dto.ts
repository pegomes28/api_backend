
import { IsOptional, IsNumber, IsString, Min } from "class-validator";

export class UpdateProductDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @Min(0) //Preço não pode ser negativo
    price?: number;
}