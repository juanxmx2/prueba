import { createReducer, on } from '@ngrx/store';
import { Noticias } from 'src/app/models/noticias.model';
import * as actions from '../actions';

export interface NoticiasState {
    noticias: Noticias[];
    loading: boolean;
    error: any;
}

export const noticiasInitialState: NoticiasState = {
   noticias: [],
   loading: false,
   error: null
}

const _noticiasReducer = createReducer(noticiasInitialState,

    on(actions.obtenerNoticias, state => ({ ...state, loading: true })),

    on(actions.noticiasSuccess, (state, { noticias  }) =>
    ({
        ...state,
        loading: false,
        noticias: [...noticias]
    })),

    on(actions.noticiasError, (state, { payload  }) =>
    ({
        ...state,
        loading: false,
        error: payload
    })),

    // on(actions.obtenerNoticia, (state, { id  }) => {
        
    // }),

);

export function noticiasReducer(state, action) {
    return _noticiasReducer(state, action);
}