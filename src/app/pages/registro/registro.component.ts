import { AppState } from './../../store/app.reducers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from 'src/app/models/registro.model';
import { Store } from '@ngrx/store';

import * as actions from '../../store/actions'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  programs: any[] = [];

  constructor(private store: Store<AppState>, private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      family_name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(10)]],
      program: ['', Validators.required],
      comment: [null]
    })

   }

  get f(){ return this.registerForm.controls; }

  ngOnInit() {

    this.store.select('programs').subscribe(({ programs }) => {
      const info = [];
      programs.forEach((data, index, array) => {
        const exist = info.find(r => r.id === data.id);
        console.log(exist);
        if (!exist) {
          info.push(data);
        }

        if (index === array.length - 1) {
          this.programs = info;
        }
      });
      console.log(this.programs);
    })

    this.store.select('registro').subscribe(( { registro, loading }) => {
      this.loading = loading;
      if (registro != null) {
        alert('registro exitoso');
        this.registerForm.reset();
      }
    });

    this.store.dispatch( actions.obtenerProgramas() );
  }

  registrar() {
    console.log(this.registerForm.value);
    this.store.dispatch( actions.crearRegistro( { registro : this.registerForm.value } ) );
  }

}
