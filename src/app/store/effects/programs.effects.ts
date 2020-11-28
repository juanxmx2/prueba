import { RegistroService } from '../../services/registro.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProgramsEffects {

    constructor(
        private actions$: Actions,
        private registroService: RegistroService
    ){}

        getReg$ = createEffect(
            () => this.actions$.pipe(
                ofType( actions.obtenerProgramas ),
                mergeMap(
                    (  ) => this.registroService.getPrograms().pipe(
                    map((reg: any) => actions.obtenerProgramasSuccess( { programs: reg })),
                    catchError( err => of( actions.obtenerProgramasError( { payload : err}) )))
                )
            )
        );
}