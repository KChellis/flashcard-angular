import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CardsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
