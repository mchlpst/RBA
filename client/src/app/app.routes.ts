import { Routes } from '@angular/router';
import { TransactionDetail } from './pages/transactionDetail/transactionDetail.component';
import { TransactionsOverview } from './pages/transactionsOverview/transactionsOverview.component';

export const routes: Routes = [
  { path: '', component: TransactionsOverview },
  { path: 'transaction/:index', component: TransactionDetail }
];
