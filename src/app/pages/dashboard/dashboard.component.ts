import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import {MoStatService} from "./mostat.service";
import {MoStat} from "./mostat";
import {role} from "./role";

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard implements OnInit {

  public member:Array<string> = ['메롱이-3257', 'seanchoi-31603', '모짜렐라-3555', 'Swallowtail-3676', '바트-31102', '동사-3697', '조군-3226', '수목이짱-3281', '미풍-3509', 'Tito-3100', '하이네켄-3838', 'luffy-32674', 'Dva-31390', 'BRODI-3597', '포곰-3789', '아현동호랭이-31945', '심봉사눈뜨는소리-3599', '최치선-3485', '아그래요-3761', 'wasabi-31508', '롤리팝-31683', 'Awesome-3827', '크라젠-3830', '슈퍼스타캐이-3563', '외길홍보-3374', '저마음에안들죠-3163', 'IlIlIlIl-3106', 'chanhyun-3815', '카스토르-3882', '개보이-3779', '요왓썸맨-3488', 'joo2-3285', 'Kasia-3575', '이크리-3824', '윤또실-3443'];
  public exMember:Array<string> = ['슈퍼세븐-31728'];
  public moStats:Array<MoStat> = [];
  public exMoStats:Array<MoStat> = [];

  ngOnInit() {
    for (let user of this.member) {
      this.service.getStat(user)
        .subscribe(
          data => {
            this.moStats.push(data);

          });
    }

    for (let user of this.exMember) {
      this.service.getStat(user)
        .subscribe(
          data => {
            this.exMoStats.push(data);
          });
    }
  }

  public blue:Array<MoStat> = [];
  public red:Array<MoStat> = [];

  public avrLevelRed:number = 0;
  public avrSkillRatingRed:number = 0;
  public avrWinrateRed:number = 0;

  public avrLevelBlue:number = 0;
  public avrSkillRatingBlue:number = 0;
  public avrWinrateBlue:number = 0;

  selectedMember:MoStat = new MoStat("dummy", 2, 3, 10, 5, 5, [new role("Tank")]);

  setSelectedMember(member:MoStat) {
    this.selectedMember = member;
  }

  constructor(private service:MoStatService) {

  }

  public addTo(team) {
    if (team == 'red') {
      this.red.push(this.selectedMember);
      this.updateTeamRating();
    } else {
      this.blue.push(this.selectedMember);
      this.updateTeamRating();
    }
  }

  public removeFromBlue() {
    this.blue.splice(this.blue.indexOf(this.selectedMember), 1);
    this.updateTeamRating();
  }

  public moveToRed() {
    this.blue.splice(this.blue.indexOf(this.selectedMember), 1);
    this.red.push(this.selectedMember);
    this.updateTeamRating();
  }

  public removeFromRed() {
    this.red.splice(this.red.indexOf(this.selectedMember), 1);
    this.updateTeamRating();
  }

  public moveToBlue() {
    this.red.splice(this.red.indexOf(this.selectedMember), 1);
    this.blue.push(this.selectedMember);
    this.updateTeamRating();
  }

  public getStyleFor(member:MoStat) {
    switch (member.roles[0].position) {
      case "Tank":
        return "btn btn-primary";
      case "Offense":
        return "btn btn-danger";
      case "Defense":
        return "btn btn-warning";
      case "Support":
        return "btn btn-success";

    }
  }

  public updateTeamRating() {

    let redLevel:number = 0;
    let redSkillRating:number = 0;
    let redWinrate:number = 0;

    let blueLevel:number = 0;
    let blueSkillRating:number = 0;
    let blueWinrate:number = 0;

    if (this.red.length > 0) {
      for (let user of this.red) {
        redLevel += user.level;
        if ((typeof user.skillRating) === "number") {
          if (user.skillRating == -1) {
            redSkillRating += 1900;
          } else {
            redSkillRating += user.skillRating;
          }
        } else {
          redSkillRating += 1900;
        }
        redWinrate += user.win / user.totalGames;
      }

      this.avrLevelRed = redLevel / this.red.length;
      this.avrSkillRatingRed = redSkillRating / this.red.length;
      this.avrWinrateRed = redWinrate / this.red.length;
    }

    if (this.blue.length > 0) {
      for (let user of this.blue) {
        blueLevel += user.level;
        blueWinrate += user.win / user.totalGames;

        if ((typeof user.skillRating) === "number") {
          if (user.skillRating == -1) {
            blueSkillRating += 1900;
          } else {
            blueSkillRating += user.skillRating;
          }
        } else {
          blueSkillRating += 1900;
        }
      }

      this.avrLevelBlue = blueLevel / this.blue.length;
      this.avrSkillRatingBlue = blueSkillRating / this.blue.length;
      this.avrWinrateBlue = blueWinrate / this.blue.length;
    }
  }


  public updateClicked() {
    this.blue = [];

    for (let user of this.member) {
      this.service.getStat(user)
        .subscribe(
          data => {

            this.blue.push(data);
            // this.blue.push(data.battleTag);
          },
          // error => this.errorMsg = error,
          () => console.log("finished")
        );
    }

  }
}
