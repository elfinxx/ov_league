import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import {MoStatService} from "./mostat.service";

@NgModule({
  imports: [
    DragulaModule,
    CommonModule,
    FormsModule,
    NgaModule,
    DropdownModule,
    ModalModule,
    routing
  ],
  declarations: [
    Dashboard
  ],
  providers: [
    MoStatService

  ]
})
export default class DashboardModule {}
