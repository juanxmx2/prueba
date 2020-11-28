import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasRoutingModule } from './noticias.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias.component';
import { DetalleNoticiasComponent } from './detalle-noticias/detalle-noticias.component';



@NgModule({
  declarations: [NoticiasComponent, NoticiaComponent, DetalleNoticiasComponent],
  exports: [NoticiasComponent],
  entryComponents: [NoticiaComponent],
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }
