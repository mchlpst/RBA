import { Component, OnInit, computed, signal, inject, effect, input } from "@angular/core";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from "../../stores/data.store";
import { TransferConverterPipe } from "../../../pipes/transfer-converter.pipe";
import { DatePipe, NgIf } from "@angular/common";

@Component({
  selector: 'transaction-detail',
  styleUrl: './transactionDetail.component.scss',
  templateUrl: './transactionDetail.component.html',
  imports: [TransferConverterPipe, DatePipe, RouterLink, NgIf]
})

export class TransactionDetail implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  index = input<number | undefined>();
  allTransactions = computed(() => this.store.convertedData());
  activeTransaction = signal<Transaction | undefined>(undefined);
  private updateEffect = effect(() => {
    if (this.index !== undefined && this.allTransactions().length > 0) {
      // @ts-ignore-next-line
      this.activeTransaction.set(this.allTransactions()[this.index]);
      console.log(this.activeTransaction())
    }
  })

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.index = params['index'];
    });
  }
};