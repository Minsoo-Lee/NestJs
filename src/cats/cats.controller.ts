import { Controller, Get, Header, HttpCode, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
}
