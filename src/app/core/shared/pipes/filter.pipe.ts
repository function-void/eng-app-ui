import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], field: string, value: string): any[] {
    if (!data) return [];
    if (!value || value.length == 0) return data;

    return data.filter(item => item[field].toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
