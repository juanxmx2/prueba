import { RegistroService } from './../../services/registro.service';
import { NoticiasService } from './../../services/noticias.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RegistroEffects {

    constructor(
        private actions$: Actions,
        private registroService: RegistroService
    ){}

        getNews$ = createEffect(
            () => this.actions$.pipe(
                ofType( actions.crearRegistro ),
                mergeMap(
                    ( action ) => this.registroService.setPrograms(action.registro).pipe(
                    map((reg: any) => actions.crearRegistroSuccess( { registro: reg })),
                    catchError( err => of( actions.crearRegistroError( { payload : err}) )))
                )
            )
        );
}