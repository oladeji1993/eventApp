import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearcheventPage } from './searchevent.page';

const routes: Routes = [
  {
    path: '',
    component: SearcheventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearcheventPageRoutingModule {}
