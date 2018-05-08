import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
