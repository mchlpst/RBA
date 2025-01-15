interface RootObject {
  days: Day[];
}

interface Day {
  id: string;
  transactions: Transaction[];
}

interface Transaction {
  id: number;
  uid: number;
  timestamp: string;
  amount: number;
  currencyCode: string;
  currencyRate?: number;
  description: string;
  otherParty?: OtherParty;
}

interface OtherParty {
  name: string;
  iban: string;
}
