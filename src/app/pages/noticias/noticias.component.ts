import { AppState } from './../../store/app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Noticias } from 'src/app/models/noticias.model';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  news: Noticias[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('noticias').subscribe( ({ noticias, loading, error }) => {
      this.news = noticias;
    });

    this.store.dispatch( actions.obtenerNoticias() );
  }
}
