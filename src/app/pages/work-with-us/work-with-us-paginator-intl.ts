import {MatPaginatorIntl} from '@angular/material/paginator';
import {Injectable} from '@angular/core';

@Injectable()
export class WorkWithUsPaginatorIntl extends MatPaginatorIntl {
  constructor() {
    super();  

    this.getAndInitTranslations();
  }

  getAndInitTranslations() {
   
      this.itemsPerPageLabel = "Job per page";
      this.nextPageLabel = "Next Page";
      this.previousPageLabel = "Previous Page";
      this.changes.next();
   
  }

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return '0 of ' + length;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} to ${endIndex} of ${length}`;
  };
}