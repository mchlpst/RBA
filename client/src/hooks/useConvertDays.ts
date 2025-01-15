const generateSixDigitNumber = () => Math.floor(100000 + Math.random() * 900000);

const useConvertDays = (data: any): Transaction[] => {
  let allTransactions: Transaction[] = [];
  const days: Day[] = data.days
  if (days.length === 0) {
    return allTransactions;
  };
  days.forEach((day: Day) => {
    if (day.transactions.length > 0) {
      allTransactions = allTransactions.concat(day.transactions.map((transaction: Transaction) => {
        return Object.assign({}, transaction, { 'uid': generateSixDigitNumber() })
      }))
    } else {
      return
    }
  })
  allTransactions.sort(function (a: any, b: any) {
    // @ts-ignore-next-line
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
  return allTransactions;
}
export default useConvertDays;