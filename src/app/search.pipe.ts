import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'employeeFilter'
})

export class SearchPipe implements PipeTransform
{
    transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.id.toLocaleLowerCase().includes(args)) || (val.name.toLocaleLowerCase().includes(args)) ||  (val.address.toLocaleLowerCase().includes(args)) ||
      (val.age.toString().includes(args));
      return rVal;
    })

  }
}