import { Registro } from './../../models/registro.model';
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

export interface programState {
    programs: any[];
}

export const programInitialState: programState = {
   programs: []
}

const _programReducer = createReducer(programInitialState,


    on(actions.obtenerProgramas, state => ({ ...state, loading: true })),


    on(actions.obtenerProgramasSuccess, (state, { programs  }) =>
    ({
        ...state,
        loading: false,
        programs: [...programs]
    })),


    on(actions.obtenerProgramasError, (state, { payload  }) =>
    ({
        ...state,
        loading: false,
        error: payload
    })),



);

export function programReducer(state, action) {
    return _programReducer(state, action);
}

