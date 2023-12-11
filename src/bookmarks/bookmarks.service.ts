import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarksService {
  private bookmarks = [{
    id:1,
    url:"http://google.com",
    description:"This a test project by nestjs"
  }];

  findAll() {
    return this.bookmarks;
  }
}
