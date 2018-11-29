import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models/list.model';


@Pipe({
  name: 'filterComplt',
  pure: false
})
export class FilterCompltPipe implements PipeTransform {

  transform(list: List[], finished:boolean) {
    return list.filter( list => {
      return list.finished === finished
    });
  }
}
