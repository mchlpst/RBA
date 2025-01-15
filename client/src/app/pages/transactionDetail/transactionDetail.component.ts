import { Component, OnInit, computed, inject, effect } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Store } from "../../stores/data.store";
import { TransferConverterPipe } from "../../../pipes/transfer-converter.pipe";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'transaction-detail',
  styleUrl: './transactionDetail.component.scss',
  templateUrl: './transactionDetail.component.html',
  imports: [TransferConverterPipe, DatePipe]
})

export class TransactionDetail implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private index: number | undefined;
  allTransactions = computed(() => this.store.convertedData());
  activeTransaction: Transaction | undefined;
  private updateEffect = effect(() => {
    if (this.index !== undefined && this.allTransactions().length > 0) {
      this.activeTransaction = this.allTransactions()[this.index];
      console.log(this.activeTransaction)
    }
  })

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.index = params['index'];
    });
  }
};