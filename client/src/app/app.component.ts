import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionService } from './services/transactions.service';
import { Store } from './stores/data.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [Store],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  hasError = signal<boolean>(false);
  store = inject(Store)

  constructor(private apiService: TransactionService) { }

  ngOnInit() {
    this.apiService.getTransactions()
      .subscribe({
        next: (data: unknown[]) => {
          this.store.addToRawData(data)
          this.store.addToConvertedData(data)
        },
        error: (error: any) => {
          console.log(error);
          this.hasError.set(true);
        }
      });
  }
}
