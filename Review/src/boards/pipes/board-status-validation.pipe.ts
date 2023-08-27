import {ArgumentMetadata, PipeTransform} from "@nestjs/common";
import {BoardStatus} from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();
        if (!this.isValidStatus(value)) {
            throw new Error(`${value} isn't in the status options`);
        }
        return value;
    }

    private isValidStatus(status: any) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}