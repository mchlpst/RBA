import { TransferConverterPipe } from "./transfer-converter.pipe"

describe('TransferConverterPipe', () => {
  const pipe = new TransferConverterPipe();

  it('Should transform USD to EUR', () => {
    expect(pipe.transform('-12.75', 'USD', 1.34567)).toBe('€ -17.16');
  })
  it('Should NOT transform', () => {
    expect(pipe.transform('-12.75', 'EUR')).toBe('€ -12.75');
  })
})