import { Controller, Get } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
    constructor(private bookmarksService:BookmarksService){}

    @Get()
    findAll(): any[]{
       return this.bookmarksService.findAll();
    }

    
}
