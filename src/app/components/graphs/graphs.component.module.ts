import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GraphsComponent } from './graphs.component';

const declarations = [
  GraphsComponent
]; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  declarations: [
    declarations
  ], 
  exports: [
    declarations
]
})
export class GraphsModule { }
