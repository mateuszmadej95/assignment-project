import { TableItem } from "../../interfaces/table-item";

export interface ComponentsState {
    tableItems: TableItem[],
    tableItemsLoading: boolean
}

const initialState: ComponentsState = {
    tableItems: [],
    tableItemsLoading: false
}

// export const featureReducer = createReducer(
//     initialState,
//     on(featureActions.action, state => ({ ...state, prop: updatedValue })),
// );

// export function reducer(state: ComponentsState | undefined, action: Action) {
//     return featureReducer(state, action);
// }
