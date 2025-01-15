import { signalStore, withMethods, withState, patchState } from '@ngrx/signals';
import useConvertDays from '../../hooks/useConvertDays'

interface StoreState {
  rawData: any[],
  convertedData: Transaction[],
}

const initialState: StoreState = {
  rawData: [],
  convertedData: []
}
export const Store = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    addToRawData(newData: any) {
      patchState(store, (state) => ({
        rawData: [...state.rawData, newData]
      }));
    },
    addToConvertedData(newData: any) {
      patchState(store, (state: any) => ({
        convertedData: useConvertDays(newData)
      }))
    }
  }))
)