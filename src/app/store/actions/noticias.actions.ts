import { createAction, props } from '@ngrx/store';
import { Noticias } from 'src/app/models/noticias.model';

export const obtenerNoticias = createAction('[Noticias] obtener noticias');

export const noticiasSuccess = createAction('[Noticias]  noticias success',
    props<{ noticias: Noticias[] }>()
);

export const noticiasError = createAction('[Noticias]  noticias error',
    props<{ payload: any }>()
);

export const obtenerNoticia = createAction('[Noticias]  obtener noticia',
    props<{ id: number }>()
);
