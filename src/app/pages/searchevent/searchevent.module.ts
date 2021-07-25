import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearcheventPageRoutingModule } from './searchevent-routing.module';

import { SearcheventPage } from './searchevent.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearcheventPageRoutingModule,
    Ng2SearchPipeModule
    // SearchfilterPipe
  ],
  declarations: [SearcheventPage]
})
export class SearcheventPageModule {}
