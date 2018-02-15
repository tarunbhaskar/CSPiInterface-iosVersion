import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchText pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchText implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(list: any[], searchTerm: string): any[] {
     if (searchTerm) {
        //searchTerm = searchTerm.toUpperCase();
        return list.filter(item => {
          return (item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
           (item.desc.toLowerCase().includes(searchTerm.toLowerCase())) ||
           (item.titleMain.toLowerCase().includes(searchTerm.toLowerCase()))||
           (item.title.toLowerCase().includes(searchTerm.toLowerCase())))
        });
      } else {
        return list;
      }
  }
}
