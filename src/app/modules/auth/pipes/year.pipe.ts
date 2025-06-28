import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'year',
  standalone: false,
})
export class YearPipe extends DatePipe implements PipeTransform {
  override transform(date: Date): any {
    return super.transform(date, 'y');
  }
}
