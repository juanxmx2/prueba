import { Registro } from './../../models/registro.model';
import { createAction, props } from '@ngrx/store';


export const obtenerProgramas = createAction('[Registro]  obtener programas');

export const obtenerProgramasSuccess = createAction('[Registro]  obtener programas Success',
    props<{ programs: any[] }>()
);

export const obtenerProgramasError = createAction('[Registro]  obtener programass Error',
    props<{ payload: any }>()
);