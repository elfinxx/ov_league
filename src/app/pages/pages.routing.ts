import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'league', loadChildren: () => System.import('./league/league.module') },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
