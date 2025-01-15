import { Component, computed, inject } from "@angular/core";
import { TransactionItem } from "../transactionItem/transactionItem.component";
import { Store } from '../../stores/data.store';

@Component({
  selector: 'transaction-list',
  templateUrl: './transactionList.component.html',
  styleUrl: './transactionList.component.scss',
  imports: [TransactionItem],
})
export class TransactionList {
  store = inject(Store)
  transactions = computed(() => this.store.convertedData())

}