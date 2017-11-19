import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, warm: any): any {
    //check if search term is undefined
    if(warm==undefined)return ninjas;
    //return updated ninjas array
    return ninjas.filter(function(ninja){

    return ninja.name.toLowerCase().includes(warm.toLowerCase());
  })

  }

}
