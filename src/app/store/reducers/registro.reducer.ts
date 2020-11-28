import { Registro } from './../../models/registro.model';
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

export interface RegistroState {
    registro: Registro;
    loading: boolean;
    error: any;
}

export const registroInitialState: RegistroState = {
   registro: null,
   loading: false,
   error: null

}

const _registroReducer = createReducer(registroInitialState,

    on(actions.crearRegistro, (state, { registro  }) =>
    ({
        ...state,
        loading: true
    })),

    on(actions.crearRegistroSuccess, (state, { registro  }) =>
    ({
        ...state,
        loading: false,
        registro: {...registro}
    })),


    on(actions.crearRegistroError, (state, { payload  }) =>
    ({
        ...state,
        loading: false,
        error: payload
    })),


);

export function registroReducer(state, action) {
    return _registroReducer(state, action);
}