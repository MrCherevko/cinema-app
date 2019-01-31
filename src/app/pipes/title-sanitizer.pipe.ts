import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';


@Pipe({
  name: 'titleSanitizer'
})
export class TitleSanitizerPipe implements PipeTransform {

  constructor(private titleCasePipe: TitleCasePipe){} 

  transform(value: string): string {
    let newVal = value.replace(/[^\w\s]/gi, '')
    return this.titleCasePipe.transform(newVal);
  }

}