import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { League } from './league.component';
import { routing }       from './league.routing';

import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {MoStatService} from "../../service/mostat.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    DropdownModule,
    ModalModule,
    routing
  ],
  declarations: [
    League
  ],
  providers: [
    MoStatService
  ]
})
export default class LeagueModule {}
