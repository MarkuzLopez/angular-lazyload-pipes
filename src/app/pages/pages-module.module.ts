import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    HomeComponent,
    ContactoComponent
  ]
})
export class PagesModuleModule { }
