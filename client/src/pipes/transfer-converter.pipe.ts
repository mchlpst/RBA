import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'transferConverter'
})
export class TransferConverterPipe implements PipeTransform {
  transform(value: any, code: string, rate?: number) {
    if (code === 'USD') {
      return `€ ${(Math.round((value * rate!) * 100) / 100).toFixed(2)}`
    } else {
      return `€ ${(Math.round(value * 100) / 100).toFixed(2)}`
    }
  }
}