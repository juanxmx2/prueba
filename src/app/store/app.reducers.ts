import { programState } from './reducers/programs.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   noticias: reducers.NoticiasState;
   registro: reducers.RegistroState,
   programs: reducers.programState
}



export const appReducers: ActionReducerMap<AppState> = {
   noticias: reducers.noticiasReducer,
   registro: reducers.registroReducer,
   programs: reducers.programReducer
}