import { NoticiasService } from './../../services/noticias.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class NoticiasEffects {

    constructor(
        private actions$: Actions,
        private noticiasService: NoticiasService 
    ){}

        getNews$ = createEffect(
            () => this.actions$.pipe(
                ofType( actions.obtenerNoticias ),
                mergeMap(
                    () => this.noticiasService.getNews().pipe(
                    map((news: any) => actions.noticiasSuccess( { noticias: news })),
                    catchError( err => of( actions.noticiasError( { payload : err}) )))
                )
            )
        );
}