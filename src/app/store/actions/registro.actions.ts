import { Registro } from './../../models/registro.model';
import { createAction, props } from '@ngrx/store';

export const crearRegistro = createAction('[Registro]  crearRegistro', 
    props<{ registro: Registro }>()
);

export const crearRegistroSuccess = createAction('[Registro]  crearRegistro Success',
    props<{ registro: Registro }>()
);

export const crearRegistroError = createAction('[Registro]  crearRegistro Error',
    props<{ payload: any }>()
);




