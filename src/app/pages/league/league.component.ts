import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import {MoStatService} from "../../service/mostat.service";

@Component({
  selector: 'league',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./league.scss')],
  template: require('./league.html')
})
export class League implements OnInit {

  ngOnInit() {

  }


  constructor(private service:MoStatService) {

  }

}
