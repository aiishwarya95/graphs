import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AdvancedPage } from './advanced.page';
import {GraphsModule} from '../components/graphs/graphs.component.module';

@NgModule({
  imports: [
    GraphsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdvancedPage
      }
    ])
  ],
  declarations: [AdvancedPage]
})
export class AdvancedPageModule { }
