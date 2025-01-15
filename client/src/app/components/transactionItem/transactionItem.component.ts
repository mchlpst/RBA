import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TransferConverterPipe } from '../../../pipes/transfer-converter.pipe';

@Component({
  templateUrl: './transactionItem.component.html',
  styleUrl: './transactionItem.component.scss',
  selector: 'transaction-item',
  imports: [RouterLink, TransferConverterPipe]
})
export class TransactionItem {
  data = input<Transaction>();
  index = input<number>();
}