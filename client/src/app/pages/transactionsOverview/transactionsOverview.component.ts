import { Component } from '@angular/core';
import { TransactionList } from '../../components/transactionList/transactionList.component';

@Component({
  selector: 'transactions-overview',
  imports: [TransactionList],
  templateUrl: './transactionsOverview.component.html',
  styleUrl: './transactionsOverview.component.scss'
})
export class TransactionsOverview { };