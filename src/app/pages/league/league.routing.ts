import { Routes, RouterModule }  from '@angular/router';

import { League } from './league.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: League,
    children: [
    ]
  }
];

export const routing = RouterModule.forChild(routes);
